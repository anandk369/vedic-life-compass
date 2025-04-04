
import React, { useState } from 'react';
import PageLayout from '@/components/common/PageLayout';
import SectionTitle from '@/components/common/SectionTitle';
import { Icons } from '@/components/common/Icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { useAppContext } from '@/context/AppContext';
import { 
  meditationSessions, 
  meditationCategories, 
  backgroundSounds,
  getMeditationById
} from '@/services/meditation-data';
import { cn } from '@/lib/utils';

const Meditation = () => {
  const { meditationStats } = useAppContext();
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [currentMeditation, setCurrentMeditation] = useState<{
    id: string;
    timeElapsed: number;
    totalDuration: number;
    isPlaying: boolean;
  } | null>(null);
  
  const durations = [5, 10, 15, 30];
  
  const handleStartMeditation = (sessionId: string) => {
    const session = getMeditationById(sessionId);
    if (!session) return;
    
    setCurrentMeditation({
      id: session.id,
      timeElapsed: 0,
      totalDuration: session.duration * 60, // convert to seconds
      isPlaying: true,
    });
    
    setActiveSessionId(sessionId);
  };
  
  const handleStopMeditation = () => {
    setCurrentMeditation(null);
    setActiveSessionId(null);
  };
  
  const handleTogglePlayPause = () => {
    if (!currentMeditation) return;
    
    setCurrentMeditation({
      ...currentMeditation,
      isPlaying: !currentMeditation.isPlaying
    });
  };
  
  return (
    <PageLayout title="Dhyan (Meditation)" showBackButton={true}>
      {currentMeditation ? (
        <div className="flex flex-col items-center justify-center h-[70vh]">
          <div className="relative w-60 h-60 rounded-full bg-vedic-purple/10 flex items-center justify-center mb-8">
            <div className="absolute inset-0 rounded-full border-4 border-vedic-purple/30 animate-pulse-slow"></div>
            <div className="w-40 h-40 rounded-full bg-vedic-purple/20 flex flex-col items-center justify-center">
              <span className="text-3xl font-semibold">
                {Math.floor(currentMeditation.timeElapsed / 60)}:
                {String(currentMeditation.timeElapsed % 60).padStart(2, '0')}
              </span>
              <span className="text-sm text-muted-foreground">
                of {Math.floor(currentMeditation.totalDuration / 60)} minutes
              </span>
            </div>
          </div>
          
          <div className="w-full max-w-xs mb-6">
            <Progress 
              value={(currentMeditation.timeElapsed / currentMeditation.totalDuration) * 100} 
              className="h-2"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <Button
              size="icon"
              variant="outline"
              className="rounded-full h-12 w-12"
              onClick={handleTogglePlayPause}
            >
              {currentMeditation.isPlaying ? (
                <Icons.pause className="h-5 w-5" />
              ) : (
                <Icons.play className="h-5 w-5" />
              )}
            </Button>
            
            <Button
              variant="ghost"
              className="text-vedic-lotus"
              onClick={handleStopMeditation}
            >
              End Session
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Stats Summary */}
          <Card className="bg-gradient-to-br from-vedic-purple/10 to-vedic-lotus/10 border-none">
            <CardContent className="pt-6">
              <h3 className="text-lg font-medium mb-4">Your Meditation Journey</h3>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">{meditationStats.totalSessions}</div>
                  <div className="text-sm text-muted-foreground">Sessions</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold">{meditationStats.totalMinutes}</div>
                  <div className="text-sm text-muted-foreground">Minutes</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold">{meditationStats.currentStreak}</div>
                  <div className="text-sm text-muted-foreground">Day Streak</div>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold">{meditationStats.longestStreak}</div>
                  <div className="text-sm text-muted-foreground">Best Streak</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="guided">
            <TabsList className="grid grid-cols-2">
              <TabsTrigger value="guided">Guided Sessions</TabsTrigger>
              <TabsTrigger value="timer">Meditation Timer</TabsTrigger>
            </TabsList>
            
            <TabsContent value="guided" className="space-y-4 mt-4">
              <SectionTitle title="Guided Sessions" description="Select a meditation practice to begin" />
              
              {meditationSessions.map((session) => (
                <Card key={session.id}>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium">{session.name}</h3>
                        <p className="text-sm text-muted-foreground">{session.description}</p>
                        
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center">
                            <Icons.clock className="h-4 w-4 text-muted-foreground mr-1" />
                            <span className="text-sm">{session.duration} min</span>
                          </div>
                          
                          <div className="flex flex-wrap gap-1">
                            {session.category.slice(0, 2).map((cat, index) => (
                              <span key={index} className="text-xs text-muted-foreground bg-muted/50 px-2 py-0.5 rounded-full">
                                {cat}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <Button 
                        size="sm" 
                        className="bg-vedic-purple hover:bg-vedic-purple/90"
                        onClick={() => handleStartMeditation(session.id)}
                      >
                        Start
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="timer" className="space-y-4 mt-4">
              <SectionTitle 
                title="Meditation Timer" 
                description="Set a timer for your silent meditation practice" 
              />
              
              <div className="grid grid-cols-2 gap-3">
                {durations.map((duration) => (
                  <Card 
                    key={duration}
                    className={cn(
                      "cursor-pointer hover:border-vedic-purple/50 transition-colors",
                      activeSessionId === `timer-${duration}` && "border-vedic-purple bg-vedic-purple/10"
                    )}
                    onClick={() => setActiveSessionId(`timer-${duration}`)}
                  >
                    <CardContent className="p-4 flex flex-col items-center justify-center">
                      <div className="text-2xl font-semibold">{duration}</div>
                      <div className="text-sm text-muted-foreground">minutes</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-6 flex flex-col items-center">
                <Button 
                  className="bg-vedic-purple hover:bg-vedic-purple/90 w-full max-w-xs"
                  disabled={!activeSessionId?.startsWith('timer-')}
                  onClick={() => {
                    if (activeSessionId?.startsWith('timer-')) {
                      const duration = parseInt(activeSessionId.split('-')[1]);
                      handleStartMeditation(`timer-${duration}`);
                    }
                  }}
                >
                  Start Meditation
                </Button>
                
                <Button 
                  variant="link"
                  className="mt-2"
                  onClick={() => setActiveSessionId(null)}
                >
                  Cancel
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      )}
    </PageLayout>
  );
};

export default Meditation;
