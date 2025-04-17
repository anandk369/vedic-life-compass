
import {
  Home,
  Calendar,
  Droplet,
  Settings,
  User,
  Clock,
  Sun,
  Moon,
  Star,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  ArrowLeft,
  Play,
  Pause,
  Timer,
  Bell,
  Utensils,
  WifiOff,
  Info,
  Locate,
  type Icon as IconType,
  Flame,
  Wind,
  Search,
  LucideIcon,
} from 'lucide-react';

// Custom lotus icon since it's not provided in lucide-react
const Lotus = ({ ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2c0 4.4-4.5 8-10 8 .5 4.5 2.5 8 5 10.5 1.5-2 4-3.5 5-3.5 1 0 3.5 1.5 5 3.5 2.5-2.5 4.5-6 5-10.5-5.5 0-10-3.6-10-8z" />
    <path d="M12 2c0 4.4 4.5 8 10 8-.5 4.5-2.5 8-5 10.5" />
  </svg>
);

// Custom yoga icon
const Yoga: LucideIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 4c1.11 0 2-.89 2-2s-.89-2-2-2-2 .89-2 2 .89 2 2 2zM19 14.9c0-.6-.43-1.4-1.28-1.4-.79 0-1.36.71-1.82 1.43l-2.7 4.6-2.7-4.6c-.46-.72-1.03-1.43-1.82-1.43-.85 0-1.28.8-1.28 1.4 0 .63.76 1.32 1.28 1.94l1.66 2.86-2.42 2.42c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 21.07l2.48 2.48c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-2.42-2.42 1.66-2.86c.52-.62 1.28-1.31 1.28-1.94z" />
  </svg>
);

export const Icons = {
  home: Home,
  calendar: Calendar,
  droplet: Droplet,
  lotus: Lotus,
  settings: Settings,
  user: User,
  clock: Clock,
  sun: Sun,
  moon: Moon,
  star: Star,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  chevronDown: ChevronDown,
  chevronUp: ChevronUp,
  arrowRight: ArrowRight,
  arrowLeft: ArrowLeft,
  play: Play,
  pause: Pause,
  timer: Timer,
  bell: Bell,
  utensils: Utensils,
  wifiOff: WifiOff,
  info: Info,
  locate: Locate,
  yoga: Yoga,
  flame: Flame,
  wind: Wind,
  search: Search,
};
