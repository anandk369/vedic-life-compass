
import { toast } from '@/components/ui/use-toast';

// Interface for Panchang data
export interface PanchangData {
  date: string;
  tithi: string;
  nakshatra: string;
  yoga: string;
  karana: string;
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  auspiciousPeriods: {
    name: string;
    start: string;
    end: string;
  }[];
  inauspiciousPeriods: {
    name: string;
    start: string;
    end: string;
  }[];
}

// Mock data for offline mode
const MOCK_PANCHANG_DATA: Record<string, PanchangData> = {
  '2025-04-04': {
    date: '2025-04-04',
    tithi: 'Shukla Ekadashi',
    nakshatra: 'Uttara Phalguni',
    yoga: 'Shubha',
    karana: 'Vishti',
    sunrise: '06:15',
    sunset: '18:45',
    moonrise: '14:20',
    moonset: '02:35',
    auspiciousPeriods: [
      { name: 'Abhijit Muhurta', start: '12:15', end: '13:00' },
      { name: 'Amrit Kaal', start: '15:30', end: '17:15' }
    ],
    inauspiciousPeriods: [
      { name: 'Rahu Kaal', start: '10:30', end: '12:00' },
      { name: 'Yamaganda', start: '15:00', end: '16:30' }
    ]
  },
  '2025-04-05': {
    date: '2025-04-05',
    tithi: 'Shukla Dwadashi',
    nakshatra: 'Hasta',
    yoga: 'Shukla',
    karana: 'Bava',
    sunrise: '06:14',
    sunset: '18:46',
    moonrise: '15:10',
    moonset: '03:05',
    auspiciousPeriods: [
      { name: 'Abhijit Muhurta', start: '12:15', end: '13:00' },
      { name: 'Brahma Muhurta', start: '04:30', end: '05:30' }
    ],
    inauspiciousPeriods: [
      { name: 'Rahu Kaal', start: '09:00', end: '10:30' },
      { name: 'Gulika', start: '13:30', end: '15:00' }
    ]
  }
};

// Cache for API responses
const apiCache: Record<string, { data: PanchangData; timestamp: number }> = {};
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// Function to get Panchang data for a specific date and location
export async function getPanchangData(date: Date, location: string): Promise<PanchangData> {
  const dateString = date.toISOString().split('T')[0];
  const cacheKey = `${dateString}-${location}`;
  
  // Check if we have a non-expired cached response
  if (apiCache[cacheKey] && Date.now() - apiCache[cacheKey].timestamp < CACHE_DURATION) {
    return apiCache[cacheKey].data;
  }

  // Check if the browser is online
  if (!navigator.onLine) {
    console.log('Offline mode: Using mock data');
    if (MOCK_PANCHANG_DATA[dateString]) {
      return MOCK_PANCHANG_DATA[dateString];
    } else {
      // Return today's mock data if the requested date isn't available
      const today = new Date().toISOString().split('T')[0];
      return MOCK_PANCHANG_DATA[today] || MOCK_PANCHANG_DATA['2025-04-04'];
    }
  }

  try {
    // Here we would make a real API call
    // For the sake of this implementation, we're using mock data for all cases
    // In a real implementation, you would use fetch or axios to call an API
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // For the demo, we'll return mock data
    const responseData = MOCK_PANCHANG_DATA[dateString] || MOCK_PANCHANG_DATA['2025-04-04'];
    
    // Cache the response
    apiCache[cacheKey] = {
      data: responseData,
      timestamp: Date.now()
    };
    
    return responseData;
  } catch (error) {
    console.error('Failed to fetch Panchang data:', error);
    toast({
      title: 'Error fetching Panchang data',
      description: 'Using cached or mock data instead',
      variant: 'destructive',
    });
    
    // Return mock data in case of error
    if (MOCK_PANCHANG_DATA[dateString]) {
      return MOCK_PANCHANG_DATA[dateString];
    } else {
      return MOCK_PANCHANG_DATA['2025-04-04'];
    }
  }
}

// In a real implementation, you would add more functions for week view, month view, etc.
