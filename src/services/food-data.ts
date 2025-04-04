
// Types for food data
export interface FoodItem {
  id: string;
  name: string;
  category: 'sattvic' | 'rajasic' | 'tamasic';
  subcategory: string[];
  season?: string[];
  description: string;
  benefits: string[];
  image?: string;
}

export interface Recipe {
  id: string;
  name: string;
  description: string;
  ingredients: {
    name: string;
    amount: string;
    category: 'sattvic' | 'rajasic' | 'tamasic';
  }[];
  steps: string[];
  prepTime: number; // in minutes
  cookTime: number; // in minutes
  servings: number;
  category: 'sattvic' | 'rajasic' | 'tamasic';
  mealType: string[];
  image?: string;
}

// Food categories information
export const foodCategories = [
  {
    id: 'sattvic',
    name: 'Sattvic',
    description: 'Sattvic food is pure, light, and promotes clarity of mind. These foods increase energy, happiness, calmness, and mental clarity.',
    examples: ['Fresh fruits', 'Vegetables', 'Whole grains', 'Legumes', 'Nuts', 'Seeds', 'Honey', 'Herbal teas'],
    color: 'bg-vedic-sage text-white'
  },
  {
    id: 'rajasic',
    name: 'Rajasic',
    description: 'Rajasic food stimulates the body and mind, creating activity and restlessness. These foods can create emotional disturbances when consumed in excess.',
    examples: ['Coffee', 'Tea', 'Chocolate', 'Spicy foods', 'Salt', 'Eggs', 'Most condiments'],
    color: 'bg-vedic-ochre text-white'
  },
  {
    id: 'tamasic',
    name: 'Tamasic',
    description: 'Tamasic food is dull and heavy, promoting laziness and clouding the mind. These foods are often stale, processed, or overcooked.',
    examples: ['Meat', 'Fish', 'Alcohol', 'Fermented foods', 'Onions', 'Garlic', 'Processed foods', 'Deep-fried foods'],
    color: 'bg-vedic-spiritual text-white'
  }
];

// Mock food data
export const foodItems: FoodItem[] = [
  {
    id: 'ghee',
    name: 'Ghee (Clarified Butter)',
    category: 'sattvic',
    subcategory: ['dairy', 'cooking oil'],
    season: ['all'],
    description: 'Clarified butter that has been traditionally used in Ayurvedic cooking and medicine.',
    benefits: [
      'Enhances digestion and absorption',
      'Nourishes the body tissues',
      'Improves memory and intelligence',
      'Strengthens the immune system',
      'Balances all three doshas (especially Vata and Pitta)'
    ],
    image: '/img/ghee.svg'
  },
  {
    id: 'basmati_rice',
    name: 'Basmati Rice',
    category: 'sattvic',
    subcategory: ['grain'],
    season: ['all'],
    description: 'Long-grain aromatic rice that is light and easy to digest.',
    benefits: [
      'Easy to digest',
      'Provides sustainable energy',
      'Balances all three doshas',
      'Calms the mind',
      'Supports healthy digestion'
    ],
    image: '/img/basmati_rice.svg'
  },
  {
    id: 'chili_pepper',
    name: 'Chili Pepper',
    category: 'rajasic',
    subcategory: ['spice', 'vegetable'],
    season: ['summer', 'autumn'],
    description: 'Hot peppers that stimulate the metabolism and senses.',
    benefits: [
      'Increases circulation',
      'Stimulates metabolism',
      'Enhances appetite',
      'Provides temporary energy boost',
      'Can help clear congestion'
    ],
    image: '/img/chili_pepper.svg'
  },
  {
    id: 'red_meat',
    name: 'Red Meat',
    category: 'tamasic',
    subcategory: ['protein', 'animal product'],
    season: ['all'],
    description: 'Heavy animal protein that requires significant digestive energy.',
    benefits: [
      'High in protein and iron',
      'Provides long-lasting feeling of fullness',
      'Contains vitamin B12'
    ],
    image: '/img/red_meat.svg'
  }
];

// Mock recipe data
export const recipes: Recipe[] = [
  {
    id: 'kitchari',
    name: 'Simple Kitchari',
    description: 'A balanced, easy-to-digest meal that cleanses the system while providing complete nourishment.',
    ingredients: [
      { name: 'Split Mung Beans', amount: '1 cup', category: 'sattvic' },
      { name: 'Basmati Rice', amount: '1 cup', category: 'sattvic' },
      { name: 'Ghee', amount: '2 tbsp', category: 'sattvic' },
      { name: 'Cumin Seeds', amount: '1 tsp', category: 'sattvic' },
      { name: 'Turmeric', amount: '1/2 tsp', category: 'sattvic' },
      { name: 'Salt', amount: 'to taste', category: 'rajasic' }
    ],
    steps: [
      'Rinse the mung beans and rice until the water runs clear',
      'Heat ghee in a pot and add cumin seeds until they sizzle',
      'Add mung beans, rice, turmeric and 6 cups of water',
      'Bring to a boil, then simmer covered for 20-25 minutes',
      'Add salt to taste and let rest covered for 5 minutes before serving'
    ],
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    category: 'sattvic',
    mealType: ['lunch', 'dinner', 'cleansing'],
    image: '/img/kitchari.svg'
  },
  {
    id: 'spicy_curry',
    name: 'Spicy Vegetable Curry',
    description: 'A flavorful, energizing curry with mixed vegetables and aromatic spices.',
    ingredients: [
      { name: 'Mixed Vegetables', amount: '4 cups', category: 'sattvic' },
      { name: 'Onion', amount: '1 medium', category: 'tamasic' },
      { name: 'Garlic', amount: '3 cloves', category: 'tamasic' },
      { name: 'Ginger', amount: '1 inch piece', category: 'sattvic' },
      { name: 'Chili Powder', amount: '1 tsp', category: 'rajasic' },
      { name: 'Coconut Milk', amount: '1 cup', category: 'sattvic' },
      { name: 'Vegetable Oil', amount: '2 tbsp', category: 'rajasic' }
    ],
    steps: [
      'Heat oil in a large pan and sauté onions until translucent',
      'Add minced garlic and ginger, cook for 1 minute',
      'Add vegetables and spices, stir for 2-3 minutes',
      'Pour in coconut milk and simmer for 15-20 minutes',
      'Adjust seasonings and serve hot with rice or bread'
    ],
    prepTime: 15,
    cookTime: 25,
    servings: 4,
    category: 'rajasic',
    mealType: ['lunch', 'dinner'],
    image: '/img/spicy_curry.svg'
  }
];

// Helper functions
export function getFoodByCategory(category: 'sattvic' | 'rajasic' | 'tamasic'): FoodItem[] {
  return foodItems.filter(item => item.category === category);
}

export function getRecipesByCategory(category: 'sattvic' | 'rajasic' | 'tamasic'): Recipe[] {
  return recipes.filter(recipe => recipe.category === category);
}

export function getSeasonalFood(season: string): FoodItem[] {
  return foodItems.filter(item => item.season?.includes(season) || item.season?.includes('all'));
}
