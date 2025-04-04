
import React from 'react';
import PageLayout from '@/components/common/PageLayout';
import VedicCard from '@/components/common/VedicCard';
import SectionTitle from '@/components/common/SectionTitle';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <PageLayout title="Vedic Lifestyle" hideNav={false}>
      <div className="space-y-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-vedic-saffron/20 to-vedic-spiritual/20 rounded-lg p-6 text-center">
          <div className="w-20 h-20 mx-auto mb-4 bg-vedic-saffron/10 rounded-full flex items-center justify-center">
            <span className="text-2xl">ॐ</span>
          </div>
          <h1 className="text-2xl font-semibold mb-2">Welcome to Vedic Lifestyle</h1>
          <p className="text-muted-foreground">
            Embrace ancient wisdom for modern wellbeing
          </p>
        </div>

        {/* Quick Access Section */}
        <section>
          <SectionTitle 
            title="Explore" 
            description="Discover Vedic practices for holistic living"
          />
          
          <div className="grid grid-cols-2 gap-3">
            <VedicCard
              title="Panchang"
              description="Daily Vedic calendar"
              icon="calendar"
              iconColor="text-vedic-sky"
              to="/panchang"
            />
            <VedicCard
              title="Yoga"
              description="Postures & sequences"
              icon="yoga"
              iconColor="text-vedic-sage"
              to="/yoga"
            />
            <VedicCard
              title="Dhyan"
              description="Meditation practices"
              icon="lotus"
              iconColor="text-vedic-purple"
              to="/meditation"
            />
            <VedicCard
              title="Aahar"
              description="Vedic nutrition"
              icon="utensils"
              iconColor="text-vedic-ochre"
              to="/nutrition"
            />
          </div>
        </section>

        {/* Vedic Wisdom Section */}
        <section>
          <SectionTitle 
            title="Vedic Wisdom" 
            description="Ancient principles for modern life"
          />
          
          <div className="space-y-3">
            <div className="p-4 bg-gradient-to-r from-vedic-sage/10 to-vedic-saffron/10 rounded-lg">
              <h3 className="font-medium mb-1">Dinacharya (Daily Routine)</h3>
              <p className="text-sm text-muted-foreground">
                A balanced daily routine aligned with nature's rhythms brings harmony to mind, body, and spirit.
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-vedic-purple/10 to-vedic-lotus/10 rounded-lg">
              <h3 className="font-medium mb-1">Triguna (Three Qualities)</h3>
              <p className="text-sm text-muted-foreground">
                Sattva (harmony), Rajas (activity), and Tamas (inertia) are the three fundamental energies that compose all of existence.
              </p>
            </div>
            
            <div className="p-4 bg-gradient-to-r from-vedic-sandstone/10 to-vedic-ochre/10 rounded-lg">
              <h3 className="font-medium mb-1">Ritusandhi (Seasonal Transitions)</h3>
              <p className="text-sm text-muted-foreground">
                Special care during seasonal changes helps maintain balance and prevent seasonal ailments.
              </p>
            </div>
          </div>
        </section>

        {/* Get Started Button */}
        <div className="text-center pt-4">
          <Button className="bg-vedic-saffron hover:bg-vedic-saffron/90 text-white">
            Begin Your Vedic Journey
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Index;
