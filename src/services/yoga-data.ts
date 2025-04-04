
// Types for yoga data
export interface YogaAsana {
  id: string;
  name: string;
  sanskritName: string;
  category: string[];
  image: string;
  description: string;
  benefits: string[];
  instructions: string[];
  contraindications: string[];
  level: 'beginner' | 'intermediate' | 'advanced';
}

export interface YogaSequence {
  id: string;
  name: string;
  description: string;
  duration: number; // in minutes
  category: string[];
  asanas: {
    asanaId: string;
    duration: number; // in seconds
    notes?: string;
  }[];
}

// Mock yoga asanas data
export const yogaAsanas: YogaAsana[] = [
  {
    id: 'tadasana',
    name: 'Mountain Pose',
    sanskritName: 'Tadasana',
    category: ['standing', 'beginner', 'core'],
    image: '/img/tadasana.svg',
    description: 'A foundational standing pose that improves posture, balance, and body awareness.',
    benefits: [
      'Improves posture',
      'Strengthens thighs, knees, and ankles',
      'Firms abdomen and buttocks',
      'Relieves sciatica',
      'Reduces flat feet'
    ],
    instructions: [
      'Stand with feet together or hip-width apart',
      'Ground down through all four corners of your feet',
      'Engage your thigh muscles and lift your kneecaps',
      'Tuck your tailbone slightly and engage your core',
      'Broaden your collarbones and relax your shoulders down and back',
      'Keep your arms alongside your body with palms facing inward',
      'Hold your head straight with chin parallel to the floor',
      'Breathe deeply and hold for 30-60 seconds'
    ],
    contraindications: [
      'Headache',
      'Low blood pressure',
      'Insomnia'
    ],
    level: 'beginner'
  },
  {
    id: 'adho_mukha_svanasana',
    name: 'Downward-Facing Dog Pose',
    sanskritName: 'Adho Mukha Svanasana',
    category: ['inversion', 'beginner', 'strength'],
    image: '/img/adho_mukha_svanasana.svg',
    description: 'An inversion pose that strengthens the arms and legs while stretching the entire back.',
    benefits: [
      'Strengthens the arms, shoulders, and legs',
      'Stretches the hamstrings, calves, and spine',
      'Energizes the body',
      'Improves digestion',
      'Relieves headache, insomnia, back pain, and fatigue'
    ],
    instructions: [
      'Start on hands and knees with wrists under shoulders and knees under hips',
      'Spread your fingers wide and press palms firmly into the mat',
      'Tuck your toes and lift your hips up and back',
      'Straighten your legs as much as possible while keeping your spine long',
      'Let your head hang freely, and gaze toward your navel',
      'Keep weight distributed equally between hands and feet',
      'Hold for 1-3 minutes while breathing deeply'
    ],
    contraindications: [
      'Carpal tunnel syndrome',
      'High blood pressure',
      'Late-term pregnancy',
      'Detached retina',
      'Severe wrist pain'
    ],
    level: 'beginner'
  },
  {
    id: 'virabhadrasana_1',
    name: 'Warrior I Pose',
    sanskritName: 'Virabhadrasana I',
    category: ['standing', 'strength', 'hip opener'],
    image: '/img/virabhadrasana_1.svg',
    description: 'A powerful standing pose that strengthens the legs and opens the chest and shoulders.',
    benefits: [
      'Strengthens legs, arms, shoulders, and back',
      'Opens the chest, shoulders, and hip flexors',
      'Improves balance and stability',
      'Increases mental focus and concentration',
      'Energizes the entire body'
    ],
    instructions: [
      'Start in Mountain Pose, then step one foot back about 3-4 feet',
      'Turn the back foot out at a 45-degree angle',
      'Bend the front knee to a 90-degree angle, keeping it aligned over the ankle',
      'Square your hips and shoulders to face the front of the mat',
      'Raise your arms overhead, palms facing each other or touching',
      'Gently arch your back and look up toward your hands',
      'Hold for 5-10 breaths, then repeat on the other side'
    ],
    contraindications: [
      'High blood pressure',
      'Heart problems',
      'Knee or shoulder injuries'
    ],
    level: 'intermediate'
  },
  {
    id: 'savasana',
    name: 'Corpse Pose',
    sanskritName: 'Savasana',
    category: ['relaxation', 'beginner'],
    image: '/img/savasana.svg',
    description: 'A relaxation pose typically practiced at the end of a yoga session to promote deep rest.',
    benefits: [
      'Deeply relaxes the body',
      'Calms the mind',
      'Reduces stress, anxiety, and fatigue',
      'Lowers blood pressure',
      'Improves concentration',
      'Helps with insomnia'
    ],
    instructions: [
      'Lie flat on your back with legs extended and arms at your sides',
      'Allow your feet to fall open to the sides',
      'Place your arms slightly away from your torso with palms facing up',
      'Close your eyes and relax your whole body',
      'Breathe naturally and focus on your breath',
      'Stay in this pose for 5-15 minutes',
      'To exit, first deepen your breath, then wiggle your fingers and toes',
      'Roll to one side and rest there for a moment before sitting up'
    ],
    contraindications: [
      'There are no contraindications, but those who are uncomfortable lying flat may use props like bolsters or blankets for support'
    ],
    level: 'beginner'
  }
];

// Mock yoga sequences
export const yogaSequences: YogaSequence[] = [
  {
    id: 'morning_energize',
    name: 'Morning Energizer',
    description: 'A rejuvenating sequence to wake up your body and prepare for the day.',
    duration: 20,
    category: ['morning', 'energizing', 'all levels'],
    asanas: [
      { asanaId: 'tadasana', duration: 60 },
      { asanaId: 'adho_mukha_svanasana', duration: 120 },
      { asanaId: 'virabhadrasana_1', duration: 90 },
      { asanaId: 'savasana', duration: 180 }
    ]
  },
  {
    id: 'evening_wind_down',
    name: 'Evening Wind Down',
    description: 'A gentle sequence to release tension and prepare for restful sleep.',
    duration: 15,
    category: ['evening', 'relaxation', 'beginner'],
    asanas: [
      { asanaId: 'tadasana', duration: 60 },
      { asanaId: 'adho_mukha_svanasana', duration: 90 },
      { asanaId: 'savasana', duration: 300 }
    ]
  },
  {
    id: 'stress_relief',
    name: 'Stress Relief',
    description: 'A balancing sequence to calm the mind and release physical tension.',
    duration: 25,
    category: ['stress relief', 'balance', 'all levels'],
    asanas: [
      { asanaId: 'tadasana', duration: 60 },
      { asanaId: 'adho_mukha_svanasana', duration: 120 },
      { asanaId: 'virabhadrasana_1', duration: 90, notes: 'Focus on deep breathing here' },
      { asanaId: 'savasana', duration: 300 }
    ]
  }
];

// Helper function to get asana by id
export function getAsanaById(id: string): YogaAsana | undefined {
  return yogaAsanas.find(asana => asana.id === id);
}

// Helper function to get sequence by id
export function getSequenceById(id: string): YogaSequence | undefined {
  return yogaSequences.find(sequence => sequence.id === id);
}

// Helper function to get asanas by category
export function getAsanasByCategory(category: string): YogaAsana[] {
  return yogaAsanas.filter(asana => asana.category.includes(category));
}

// Helper function to get sequences by category
export function getSequencesByCategory(category: string): YogaSequence[] {
  return yogaSequences.filter(sequence => sequence.category.includes(category));
}
