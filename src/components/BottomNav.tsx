import { Home, Search, PlusCircle, Bookmark, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface BottomNavProps {
  currentView: string;
  onViewChange: (view: string) => void;
}

export const BottomNav = ({ currentView, onViewChange }: BottomNavProps) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'explore', icon: Search, label: 'Explore' },
    { id: 'add', icon: PlusCircle, label: 'Add' },
    { id: 'saved', icon: Bookmark, label: 'Saved' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="max-w-lg mx-auto flex items-center justify-around py-3 px-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          const isAdd = item.id === 'add';

          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={cn(
                "flex flex-col items-center gap-1 transition-all",
                isAdd && "relative -top-4"
              )}
            >
              <div
                className={cn(
                  "p-3 rounded-full transition-all",
                  isAdd && "gradient-bg shadow-lg scale-110",
                  isActive && !isAdd && "text-primary",
                  !isActive && !isAdd && "text-muted-foreground hover:text-foreground"
                )}
              >
                <Icon 
                  className={cn(
                    "w-6 h-6",
                    isAdd && "text-white"
                  )}
                />
              </div>
              {!isAdd && (
                <span 
                  className={cn(
                    "text-xs font-medium",
                    isActive ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {item.label}
                </span>
              )}
              {isActive && !isAdd && (
                <div className="w-1 h-1 rounded-full gradient-bg" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
