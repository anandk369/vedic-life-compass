
import React, { useState } from 'react';
import PageLayout from '@/components/common/PageLayout';
import { Icons } from '@/components/common/Icons';
import { useAppContext } from '@/context/AppContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';

const Settings = () => {
  const { userPreferences, updatePreference } = useAppContext();
  const [location, setLocation] = useState(userPreferences.location);

  const handleSaveLocation = () => {
    updatePreference('location', location);
    toast({
      title: 'Location updated',
      description: 'Your location preferences have been saved.',
    });
  };

  return (
    <PageLayout title="Settings" showBackButton={true}>
      <div className="space-y-6">
        {/* Theme */}
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-lg font-medium mb-4">Appearance</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Theme</Label>
                  <p className="text-sm text-muted-foreground">
                    Choose your preferred theme
                  </p>
                </div>
                <Select
                  defaultValue={userPreferences.theme}
                  onValueChange={(value) => updatePreference('theme', value as 'light' | 'dark')}
                >
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select theme" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Location */}
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-lg font-medium mb-4">Location</h2>
            
            <div className="space-y-4">
              <div>
                <Label className="text-base">Your Location</Label>
                <p className="text-sm text-muted-foreground mb-2">
                  Enter your location for accurate Panchang data
                </p>
                <div className="flex gap-2">
                  <Input
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City, Country"
                  />
                  <Button onClick={handleSaveLocation}>Save</Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Notifications */}
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-lg font-medium mb-4">Notifications</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Enable Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive updates and reminders
                  </p>
                </div>
                <Switch
                  checked={userPreferences.notifications}
                  onCheckedChange={(value) => updatePreference('notifications', value)}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">Meditation Reminders</Label>
                  <p className="text-sm text-muted-foreground">
                    Daily reminders for meditation practice
                  </p>
                </div>
                <Switch
                  checked={userPreferences.meditationReminders}
                  onCheckedChange={(value) => updatePreference('meditationReminders', value)}
                />
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Language */}
        <Card>
          <CardContent className="pt-6">
            <h2 className="text-lg font-medium mb-4">Language</h2>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label className="text-base">App Language</Label>
                  <p className="text-sm text-muted-foreground">
                    Choose your preferred language
                  </p>
                </div>
                <Select
                  defaultValue={userPreferences.language}
                  onValueChange={(value) => updatePreference('language', value as 'english' | 'hindi' | 'sanskrit')}
                >
                  <SelectTrigger className="w-[120px]">
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="sanskrit">Sanskrit</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* About */}
        <Card>
          <CardContent className="pt-6 text-center">
            <h2 className="text-lg font-medium mb-2">Vedic Lifestyle App</h2>
            <p className="text-sm text-muted-foreground">Version 1.0.0</p>
            <p className="text-sm text-muted-foreground mt-1">© 2025 Vedic Lifestyle</p>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
};

export default Settings;
