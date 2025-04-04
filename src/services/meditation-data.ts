
// Types for meditation data
export interface MeditationSession {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  category: string[];
  backgroundSound?: string;
  guideScript?: string[];
  image?: string;
}

export interface MeditationCategory {
  id: string;
  name: string;
  description: string;
  image?: string;
  color: string;
}

// Mock meditation sessions
export const meditationSessions: MeditationSession[] = [
  {
    id: 'mindful_breathing',
    name: 'Mindful Breathing',
    description: 'A simple meditation focusing on the breath to anchor your awareness to the present moment.',
    duration: 5,
    category: ['beginner', 'mindfulness', 'stress relief'],
    backgroundSound: 'gentle_river',
    guideScript: [
      'Find a comfortable seated position with your back straight.',
      'Close your eyes and bring your attention to your breath.',
      'Notice the sensation of air entering and leaving your nostrils.',
      'When your mind wanders, gently bring your attention back to your breath.',
      'Continue focusing on each inhale and exhale without trying to control the breath.',
      'Simply observe the natural rhythm of your breathing.'
    ],
    image: '/img/meditation_breath.svg'
  },
  {
    id: 'body_scan',
    name: 'Body Scan',
    description: 'A practice to develop awareness of bodily sensations and release tension.',
    duration: 10,
    category: ['relaxation', 'mindfulness', 'sleep'],
    backgroundSound: 'soft_bells',
    guideScript: [
      'Lie down in a comfortable position or sit with your back supported.',
      'Close your eyes and bring your awareness to your body.',
      'Begin by focusing on your feet, noticing any sensations.',
      'Slowly move your attention up through your legs, torso, arms, and head.',
      'For any areas of tension, breathe into them and allow them to soften.',
      'Complete the scan by becoming aware of your body as a whole.'
    ],
    image: '/img/meditation_body_scan.svg'
  },
  {
    id: 'loving_kindness',
    name: 'Loving-Kindness',
    description: 'A heart-centered practice to develop compassion for yourself and others.',
    duration: 15,
    category: ['compassion', 'emotional health', 'intermediate'],
    backgroundSound: 'gentle_chimes',
    guideScript: [
      'Sit comfortably and bring your awareness to your heart center.',
      'Begin by directing loving-kindness to yourself: "May I be happy, may I be healthy, may I be safe, may I live with ease."',
      'Next, bring to mind someone you care about and extend these wishes to them.',
      'Continue to expand your circle to include neutral people, difficult people, and eventually all beings.',
      'Return to your heart center and rest in the feelings of loving-kindness you\'ve generated.'
    ],
    image: '/img/meditation_loving_kindness.svg'
  },
  {
    id: 'deep_relaxation',
    name: 'Deep Relaxation',
    description: 'A guided practice for complete physical and mental relaxation.',
    duration: 30,
    category: ['relaxation', 'sleep', 'stress relief'],
    backgroundSound: 'ocean_waves',
    guideScript: [
      'Lie down in a comfortable position with your arms at your sides.',
      'Close your eyes and take several deep breaths.',
      'Consciously relax each part of your body from your toes to the crown of your head.',
      'Feel yourself becoming heavier and more relaxed with each exhale.',
      'Allow all tension to drain away as you sink deeper into relaxation.',
      'Remain in this state of deep rest for the duration of the practice.'
    ],
    image: '/img/meditation_deep_relaxation.svg'
  }
];

// Meditation categories
export const meditationCategories: MeditationCategory[] = [
  {
    id: 'mindfulness',
    name: 'Mindfulness',
    description: 'Practices that develop present moment awareness and attention.',
    image: '/img/category_mindfulness.svg',
    color: 'bg-vedic-sage'
  },
  {
    id: 'relaxation',
    name: 'Relaxation',
    description: 'Techniques to calm the nervous system and release tension.',
    image: '/img/category_relaxation.svg',
    color: 'bg-vedic-sandstone'
  },
  {
    id: 'compassion',
    name: 'Compassion',
    description: 'Heart-centered practices to develop kindness and empathy.',
    image: '/img/category_compassion.svg',
    color: 'bg-vedic-lotus'
  },
  {
    id: 'sleep',
    name: 'Sleep',
    description: 'Meditations designed to prepare the mind and body for restful sleep.',
    image: '/img/category_sleep.svg',
    color: 'bg-vedic-purple'
  }
];

// Mock background sounds
export const backgroundSounds = [
  { id: 'gentle_river', name: 'Gentle River', file: '/sounds/gentle_river.mp3' },
  { id: 'soft_bells', name: 'Soft Bells', file: '/sounds/soft_bells.mp3' },
  { id: 'gentle_chimes', name: 'Gentle Chimes', file: '/sounds/gentle_chimes.mp3' },
  { id: 'ocean_waves', name: 'Ocean Waves', file: '/sounds/ocean_waves.mp3' },
  { id: 'forest_ambience', name: 'Forest Ambience', file: '/sounds/forest_ambience.mp3' },
  { id: 'om_chanting', name: 'Om Chanting', file: '/sounds/om_chanting.mp3' }
];

// Helper functions
export function getMeditationsByCategory(category: string): MeditationSession[] {
  return meditationSessions.filter(session => session.category.includes(category));
}

export function getMeditationsByDuration(duration: number): MeditationSession[] {
  return meditationSessions.filter(session => session.duration <= duration);
}

export function getMeditationById(id: string): MeditationSession | undefined {
  return meditationSessions.find(session => session.id === id);
}
