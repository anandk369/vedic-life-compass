
import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import PageLayout from '@/components/common/PageLayout';
import SectionTitle from '@/components/common/SectionTitle';
import { Icons } from '@/components/common/Icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useAppContext } from '@/context/AppContext';
import { PanchangData, getPanchangData } from '@/services/panchang-api';
import { cn } from '@/lib/utils';

const Panchang = () => {
  const { userPreferences, isOnline } = useAppContext();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [panchangData, setPanchangData] = useState<PanchangData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getPanchangData(selectedDate, userPreferences.location);
        setPanchangData(data);
      } catch (error) {
        console.error('Error fetching Panchang data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [selectedDate, userPreferences.location]);

  const handlePreviousDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  const handleToday = () => {
    setSelectedDate(new Date());
  };

  return (
    <PageLayout title="Panchang" showBackButton={true}>
      <div className="space-y-6">
        {/* Date Selection */}
        <div className="flex items-center justify-between">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handlePreviousDay}
            className="text-muted-foreground"
          >
            <Icons.chevronLeft className="h-5 w-5 mr-1" />
            Previous
          </Button>
          
          <Button
            variant="outline"
            size="sm"
            onClick={handleToday}
            className="min-w-[140px] font-medium"
          >
            {format(selectedDate, 'MMMM d, yyyy')}
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={handleNextDay}
            className="text-muted-foreground"
          >
            Next
            <Icons.chevronRight className="h-5 w-5 ml-1" />
          </Button>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-10 space-y-4">
            <div className="animate-pulse-slow w-20 h-20 rounded-full bg-muted"></div>
            <p className="text-muted-foreground">Loading Panchang data...</p>
          </div>
        ) : panchangData ? (
          <>
            {/* Location */}
            <div className="flex items-center justify-center text-sm text-muted-foreground">
              <Icons.locate className="h-3 w-3 mr-1" />
              <span>{userPreferences.location}</span>
              {!isOnline && (
                <Badge variant="outline" className="ml-2 text-xs bg-muted/50">
                  Offline Data
                </Badge>
              )}
            </div>

            {/* Basic Panchang */}
            <Card>
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-y-4 gap-x-2">
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Tithi</span>
                    <span className="font-semibold">{panchangData.tithi}</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Nakshatra</span>
                    <span className="font-semibold">{panchangData.nakshatra}</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Yoga</span>
                    <span className="font-semibold">{panchangData.yoga}</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">Karana</span>
                    <span className="font-semibold">{panchangData.karana}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sun & Moon Times */}
            <SectionTitle title="Celestial Timings" />
            
            <div className="grid grid-cols-2 gap-3">
              <Card className="border-vedic-saffron/30 bg-vedic-saffron/5">
                <CardContent className="pt-4">
                  <div className="flex flex-col items-center text-center">
                    <Icons.sun className="h-6 w-6 text-vedic-saffron mb-2" />
                    <h3 className="text-sm font-medium">Sunrise</h3>
                    <p className="text-lg font-semibold">{panchangData.sunrise}</p>
                    <p className="text-xs text-muted-foreground mt-1">Sunset: {panchangData.sunset}</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-vedic-purple/30 bg-vedic-purple/5">
                <CardContent className="pt-4">
                  <div className="flex flex-col items-center text-center">
                    <Icons.moon className="h-6 w-6 text-vedic-purple mb-2" />
                    <h3 className="text-sm font-medium">Moonrise</h3>
                    <p className="text-lg font-semibold">{panchangData.moonrise}</p>
                    <p className="text-xs text-muted-foreground mt-1">Moonset: {panchangData.moonset}</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Auspicious & Inauspicious Timings */}
            <SectionTitle title="Muhurta (Auspicious Periods)" />
            
            <div className="space-y-2">
              {panchangData.auspiciousPeriods.map((period, index) => (
                <div 
                  key={`auspicious-${index}`}
                  className="flex items-center justify-between p-3 border rounded-md border-vedic-sage/30 bg-vedic-sage/5"
                >
                  <div>
                    <h4 className="font-medium">{period.name}</h4>
                    <p className="text-xs text-muted-foreground">Auspicious Period</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{period.start} - {period.end}</p>
                    <p className="text-xs text-muted-foreground">
                      {(function() {
                        const [startHours, startMinutes] = period.start.split(':').map(Number);
                        const [endHours, endMinutes] = period.end.split(':').map(Number);
                        const startMins = startHours * 60 + startMinutes;
                        const endMins = endHours * 60 + endMinutes;
                        const durationMins = endMins - startMins;
                        const hours = Math.floor(durationMins / 60);
                        const minutes = durationMins % 60;
                        return `${hours}h ${minutes}m`;
                      })()}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <SectionTitle title="Inauspicious Periods" />
            
            <div className="space-y-2">
              {panchangData.inauspiciousPeriods.map((period, index) => (
                <div 
                  key={`inauspicious-${index}`}
                  className="flex items-center justify-between p-3 border rounded-md border-vedic-lotus/30 bg-vedic-lotus/5"
                >
                  <div>
                    <h4 className="font-medium">{period.name}</h4>
                    <p className="text-xs text-muted-foreground">Avoid Activities</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{period.start} - {period.end}</p>
                    <p className="text-xs text-muted-foreground">
                      {(function() {
                        const [startHours, startMinutes] = period.start.split(':').map(Number);
                        const [endHours, endMinutes] = period.end.split(':').map(Number);
                        const startMins = startHours * 60 + startMinutes;
                        const endMins = endHours * 60 + endMinutes;
                        const durationMins = endMins - startMins;
                        const hours = Math.floor(durationMins / 60);
                        const minutes = durationMins % 60;
                        return `${hours}h ${minutes}m`;
                      })()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-10">
            <p className="text-muted-foreground">Failed to load Panchang data</p>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => setSelectedDate(new Date())}
              className="mt-2"
            >
              Retry
            </Button>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default Panchang;
