
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  description?: string;
  className?: string;
}

const SectionTitle = ({ title, description, className }: SectionTitleProps) => {
  return (
    <div className={cn("mb-4", className)}>
      <h2 className="text-xl font-semibold">{title}</h2>
      {description && (
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      )}
    </div>
  );
};

export default SectionTitle;
