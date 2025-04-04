
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageLayout from '@/components/common/PageLayout';
import SectionTitle from '@/components/common/SectionTitle';
import { Icons } from '@/components/common/Icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { yogaAsanas, yogaSequences } from '@/services/yoga-data';
import { cn } from '@/lib/utils';

const Yoga = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const filteredAsanas = yogaAsanas.filter(asana => 
    (searchTerm === '' || 
     asana.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
     asana.sanskritName.toLowerCase().includes(searchTerm.toLowerCase())) &&
    (selectedCategory === null || asana.category.includes(selectedCategory))
  );
  
  const categories = [...new Set(yogaAsanas.flatMap(asana => asana.category))];
  
  return (
    <PageLayout title="Yoga" showBackButton={true}>
      <Tabs defaultValue="asanas">
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="asanas">Asanas</TabsTrigger>
          <TabsTrigger value="sequences">Sequences</TabsTrigger>
        </TabsList>
        
        <TabsContent value="asanas">
          {/* Search and Filter */}
          <div className="flex items-center gap-2 mb-4">
            <div className="relative flex-1">
              <Icons.search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search asanas..."
                className="pl-9"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(null)}
            >
              All
            </Button>
          </div>

          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
          
          {/* Asana Grid */}
          <div className="grid grid-cols-1 gap-4 mt-2">
            {filteredAsanas.length > 0 ? (
              filteredAsanas.map((asana) => (
                <Card key={asana.id} className="overflow-hidden">
                  <div className="flex">
                    <div className="flex-shrink-0 w-24 h-24 bg-muted flex items-center justify-center">
                      <div className="text-3xl opacity-70">🧘</div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium">{asana.name}</h3>
                      <p className="text-sm text-muted-foreground">{asana.sanskritName}</p>
                      
                      <div className="flex flex-wrap gap-1 mt-2">
                        {asana.category.slice(0, 2).map((cat) => (
                          <Badge key={cat} variant="outline" className="text-xs">
                            {cat}
                          </Badge>
                        ))}
                        {asana.category.length > 2 && (
                          <Badge variant="outline" className="text-xs">
                            +{asana.category.length - 2}
                          </Badge>
                        )}
                        
                        <Badge 
                          className={cn(
                            "ml-auto text-xs",
                            asana.level === 'beginner' ? "bg-vedic-sage text-white" :
                            asana.level === 'intermediate' ? "bg-vedic-ochre text-white" :
                            "bg-vedic-spiritual text-white"
                          )}
                        >
                          {asana.level}
                        </Badge>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))
            ) : (
              <div className="text-center py-8 text-muted-foreground">
                No asanas match your search criteria
              </div>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="sequences">
          <SectionTitle title="Yoga Sequences" description="Follow these guided practice sequences" />
          
          <div className="space-y-4">
            {yogaSequences.map((sequence) => (
              <Card key={sequence.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{sequence.name}</h3>
                      <p className="text-sm text-muted-foreground">{sequence.description}</p>
                      
                      <div className="flex items-center gap-2 mt-2">
                        <Icons.clock className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{sequence.duration} minutes</span>
                      </div>
                    </div>
                    
                    <Button size="sm" className="bg-vedic-sage hover:bg-vedic-sage/90">
                      Start
                    </Button>
                  </div>
                  
                  <Separator className="my-3" />
                  
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">Included asanas:</div>
                    <div className="flex flex-wrap gap-1">
                      {sequence.asanas.map((asanaRef, index) => {
                        const asana = yogaAsanas.find(a => a.id === asanaRef.asanaId);
                        return asana ? (
                          <Badge key={index} variant="outline" className="text-xs">
                            {asana.name}
                          </Badge>
                        ) : null;
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default Yoga;
