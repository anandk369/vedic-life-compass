
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '@/context/AppContext';
import { Icons } from './Icons';
import { cn } from '@/lib/utils';

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  hideNav?: boolean;
  showBackButton?: boolean;
  backPath?: string;
}

const PageLayout = ({
  children,
  title,
  hideNav = false,
  showBackButton = false,
  backPath = '/'
}: PageLayoutProps) => {
  const { isOnline } = useAppContext();
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            {showBackButton && (
              <Link to={backPath} className="mr-3">
                <Icons.chevronLeft className="h-5 w-5" />
              </Link>
            )}
            <h1 className="text-xl font-medium">{title}</h1>
          </div>
          {!isOnline && (
            <div className="flex items-center text-vedic-lotus">
              <Icons.wifiOff className="h-4 w-4 mr-1" />
              <span className="text-sm">Offline</span>
            </div>
          )}
        </div>
      </header>
      
      <main className="flex-1 container px-4 py-4 overflow-y-auto">
        {children}
      </main>
      
      {!hideNav && (
        <nav className="sticky bottom-0 z-50 bg-background border-t border-border">
          <div className="container px-4 py-2">
            <div className="flex justify-around">
              <NavItem to="/" icon="home" label="Home" />
              <NavItem to="/panchang" icon="calendar" label="Panchang" />
              <NavItem to="/yoga" icon="yoga" label="Yoga" />
              <NavItem to="/meditation" icon="lotus" label="Dhyan" />
              <NavItem to="/nutrition" icon="utensils" label="Aahar" />
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

interface NavItemProps {
  to: string;
  icon: keyof typeof Icons;
  label: string;
}

const NavItem = ({ to, icon, label }: NavItemProps) => {
  const isActive = window.location.pathname === to;
  const Icon = Icons[icon];
  
  return (
    <Link
      to={to}
      className={cn(
        "flex flex-col items-center py-1 px-2 rounded-md transition-colors",
        isActive
          ? "text-vedic-saffron"
          : "text-muted-foreground hover:text-foreground"
      )}
    >
      <Icon className="h-5 w-5 mb-1" />
      <span className="text-xs">{label}</span>
    </Link>
  );
};

export default PageLayout;
