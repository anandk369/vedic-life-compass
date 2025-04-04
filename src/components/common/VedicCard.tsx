
import React from 'react';
import { Link } from 'react-router-dom';
import { Icons } from './Icons';
import { cn } from '@/lib/utils';

interface VedicCardProps {
  className?: string;
  title: string;
  description?: string;
  icon?: keyof typeof Icons;
  iconColor?: string;
  to?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const VedicCard = ({
  className,
  title,
  description,
  icon,
  iconColor = 'text-vedic-saffron',
  to,
  onClick,
  children
}: VedicCardProps) => {
  const Icon = icon ? Icons[icon] : null;
  
  const content = (
    <div
      className={cn(
        "vedic-card hover:border-vedic-saffron/40 transition-colors", 
        className
      )}
    >
      <div className="flex items-start gap-3">
        {Icon && (
          <div className={cn("p-2 rounded-full bg-primary/10", iconColor)}>
            <Icon className="h-5 w-5" />
          </div>
        )}
        <div className="flex-1">
          <h3 className="vedic-card-header">{title}</h3>
          {description && <p className="text-muted-foreground text-sm">{description}</p>}
          {children}
        </div>
        {to && (
          <Icons.arrowRight className="h-5 w-5 text-muted-foreground self-center ml-2" />
        )}
      </div>
    </div>
  );
  
  if (to) {
    return <Link to={to}>{content}</Link>;
  }
  
  if (onClick) {
    return <button onClick={onClick} className="w-full text-left">{content}</button>;
  }
  
  return content;
};

export default VedicCard;
