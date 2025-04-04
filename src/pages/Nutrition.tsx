
import React, { useState } from 'react';
import PageLayout from '@/components/common/PageLayout';
import SectionTitle from '@/components/common/SectionTitle';
import { Icons } from '@/components/common/Icons';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { foodCategories, foodItems, recipes } from '@/services/food-data';
import { cn } from '@/lib/utils';

const Nutrition = () => {
  return (
    <PageLayout title="Aahar (Nutrition)" showBackButton={true}>
      <Tabs defaultValue="principles">
        <TabsList className="grid grid-cols-3">
          <TabsTrigger value="principles">Principles</TabsTrigger>
          <TabsTrigger value="foods">Foods</TabsTrigger>
          <TabsTrigger value="recipes">Recipes</TabsTrigger>
        </TabsList>
        
        <TabsContent value="principles" className="space-y-6 mt-4">
          {/* Introduction */}
          <div>
            <SectionTitle 
              title="Vedic Nutrition Principles" 
              description="Understanding the ancient science of food"
            />
            
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm">
                  According to Ayurveda, food is not just nourishment for the body but also affects
                  the mind and consciousness. The Vedic approach to nutrition categorizes all foods based
                  on their qualities and effects on the body and mind.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Food Categories */}
          <div className="space-y-4">
            {foodCategories.map((category) => (
              <Card key={category.id} className="overflow-hidden">
                <div 
                  className={cn(
                    "py-2 px-4", 
                    category.color
                  )}
                >
                  <h3 className="font-medium text-lg">{category.name}</h3>
                </div>
                <CardContent className="pt-4">
                  <p className="text-sm mb-3">
                    {category.description}
                  </p>
                  
                  <div className="text-sm text-muted-foreground mb-2">Common examples:</div>
                  <div className="flex flex-wrap gap-1">
                    {category.examples.map((example, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-muted/50 px-2 py-0.5 rounded-full"
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Seasonal Eating */}
          <div>
            <SectionTitle title="Ritucharya (Seasonal Eating)" />
            
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm mb-4">
                  The Vedic tradition emphasizes eating according to the seasons (Ritucharya) to maintain 
                  balance and prevent disease. Each season has specific foods that help the body adapt to 
                  environmental changes.
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-vedic-saffron/10 rounded-lg">
                    <h4 className="font-medium mb-1">Summer (Grishma)</h4>
                    <p className="text-xs text-muted-foreground">
                      Favor cooling, light, sweet, and liquid foods. Reduce spicy, salty, and sour foods.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-vedic-sandstone/10 rounded-lg">
                    <h4 className="font-medium mb-1">Autumn (Sharad)</h4>
                    <p className="text-xs text-muted-foreground">
                      Favor sweet, bitter, and astringent tastes. Reduce pungent, salty, and sour foods.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-vedic-spiritual/10 rounded-lg">
                    <h4 className="font-medium mb-1">Winter (Hemanta)</h4>
                    <p className="text-xs text-muted-foreground">
                      Favor warming, nourishing, and mildly spicy foods. Include healthy fats.
                    </p>
                  </div>
                  
                  <div className="p-3 bg-vedic-sage/10 rounded-lg">
                    <h4 className="font-medium mb-1">Spring (Vasanta)</h4>
                    <p className="text-xs text-muted-foreground">
                      Favor light, dry, warm, and slightly bitter foods. Reduce heavy and sweet foods.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="foods" className="space-y-4 mt-4">
          <SectionTitle title="Vedic Food Directory" description="Learn about traditional Vedic foods" />
          
          <div className="space-y-4">
            {foodItems.map((food) => (
              <Card key={food.id}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-16 h-16 bg-muted rounded-md flex items-center justify-center">
                      <span className="text-2xl">🍲</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{food.name}</h3>
                        <span 
                          className={cn(
                            "text-xs px-2 py-0.5 rounded-full text-white",
                            food.category === 'sattvic' ? "bg-vedic-sage" : 
                            food.category === 'rajasic' ? "bg-vedic-ochre" : 
                            "bg-vedic-spiritual"
                          )}
                        >
                          {food.category}
                        </span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mt-1">
                        {food.description}
                      </p>
                      
                      <div className="mt-2">
                        <span className="text-xs text-muted-foreground">Benefits:</span>
                        <ul className="list-disc list-inside text-xs text-muted-foreground ml-1 mt-1">
                          {food.benefits.slice(0, 2).map((benefit, index) => (
                            <li key={index}>{benefit}</li>
                          ))}
                          {food.benefits.length > 2 && (
                            <li>+ {food.benefits.length - 2} more benefits</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="recipes" className="space-y-4 mt-4">
          <SectionTitle title="Sattvic Recipes" description="Nourishing recipes for clarity and balance" />
          
          <div className="space-y-4">
            {recipes.map((recipe) => (
              <Card key={recipe.id}>
                <CardContent className="p-4">
                  <h3 className="font-medium">{recipe.name}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {recipe.description}
                  </p>
                  
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <div className="flex items-center">
                      <Icons.clock className="h-4 w-4 text-muted-foreground mr-1" />
                      <span>{recipe.prepTime + recipe.cookTime} min</span>
                    </div>
                    
                    <span 
                      className={cn(
                        "text-xs px-2 py-0.5 rounded-full text-white",
                        recipe.category === 'sattvic' ? "bg-vedic-sage" : 
                        recipe.category === 'rajasic' ? "bg-vedic-ochre" : 
                        "bg-vedic-spiritual"
                      )}
                    >
                      {recipe.category}
                    </span>
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-3"
                  >
                    View Recipe
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default Nutrition;
