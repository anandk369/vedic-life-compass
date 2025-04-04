
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from '@/components/ui/use-toast';

type ThemeType = 'light' | 'dark';
type LanguageType = 'english' | 'hindi' | 'sanskrit';

interface UserPreferences {
  theme: ThemeType;
  language: LanguageType;
  notifications: boolean;
  meditationReminders: boolean;
  location: string;
}

interface MeditationStats {
  totalSessions: number;
  totalMinutes: number;
  currentStreak: number;
  longestStreak: number;
  lastSessionDate: string | null;
}

interface AppContextType {
  userPreferences: UserPreferences;
  meditationStats: MeditationStats;
  updatePreference: <K extends keyof UserPreferences>(key: K, value: UserPreferences[K]) => void;
  updateMeditationStats: (minutes: number) => void;
  isOnline: boolean;
}

const defaultPreferences: UserPreferences = {
  theme: 'light',
  language: 'english',
  notifications: true,
  meditationReminders: true,
  location: 'New Delhi, India',
};

const defaultMeditationStats: MeditationStats = {
  totalSessions: 0,
  totalMinutes: 0,
  currentStreak: 0,
  longestStreak: 0,
  lastSessionDate: null,
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [userPreferences, setUserPreferences] = useState<UserPreferences>(defaultPreferences);
  const [meditationStats, setMeditationStats] = useState<MeditationStats>(defaultMeditationStats);
  const [isOnline, setIsOnline] = useState<boolean>(true);

  // Check network status
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      toast({
        title: "You're back online",
        description: "Connected to the network",
      });
    };
    
    const handleOffline = () => {
      setIsOnline(false);
      toast({
        title: "You're offline",
        description: "Using cached data",
        variant: "destructive",
      });
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Load data from localStorage on mount
  useEffect(() => {
    try {
      const savedPreferences = localStorage.getItem('userPreferences');
      const savedMeditationStats = localStorage.getItem('meditationStats');

      if (savedPreferences) {
        setUserPreferences(JSON.parse(savedPreferences));
      }
      
      if (savedMeditationStats) {
        setMeditationStats(JSON.parse(savedMeditationStats));
      }
    } catch (error) {
      console.error('Failed to load from localStorage:', error);
    }
  }, []);

  const updatePreference = <K extends keyof UserPreferences>(
    key: K, 
    value: UserPreferences[K]
  ) => {
    const newPreferences = { ...userPreferences, [key]: value };
    setUserPreferences(newPreferences);
    
    // Save to localStorage
    try {
      localStorage.setItem('userPreferences', JSON.stringify(newPreferences));
    } catch (error) {
      console.error('Failed to save preferences:', error);
    }
  };

  const updateMeditationStats = (minutes: number) => {
    const today = new Date().toISOString().split('T')[0];
    const lastSession = meditationStats.lastSessionDate;
    
    // Calculate streak
    let { currentStreak, longestStreak } = meditationStats;
    
    if (!lastSession) {
      // First session
      currentStreak = 1;
      longestStreak = 1;
    } else {
      const lastSessionDate = new Date(lastSession);
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (lastSessionDate.toISOString().split('T')[0] === yesterday.toISOString().split('T')[0]) {
        // Consecutive day
        currentStreak += 1;
        longestStreak = Math.max(currentStreak, longestStreak);
      } else if (lastSessionDate.toISOString().split('T')[0] !== today) {
        // Streak broken
        currentStreak = 1;
      }
    }
    
    const newStats = {
      totalSessions: meditationStats.totalSessions + 1,
      totalMinutes: meditationStats.totalMinutes + minutes,
      currentStreak,
      longestStreak,
      lastSessionDate: today,
    };
    
    setMeditationStats(newStats);
    
    // Save to localStorage
    try {
      localStorage.setItem('meditationStats', JSON.stringify(newStats));
    } catch (error) {
      console.error('Failed to save meditation stats:', error);
    }
  };

  return (
    <AppContext.Provider 
      value={{ 
        userPreferences, 
        meditationStats, 
        updatePreference, 
        updateMeditationStats,
        isOnline
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}
