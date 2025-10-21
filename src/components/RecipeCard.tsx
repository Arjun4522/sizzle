import { Heart, Bookmark, Share2 } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RecipeCardProps {
  title: string;
  author: string;
  authorAvatar: string;
  image: string;
  cuisine: string;
  prepTime: string;
  difficulty: string;
  likes: number;
  onClick?: () => void;
}

export const RecipeCard = ({
  title,
  author,
  authorAvatar,
  image,
  cuisine,
  prepTime,
  difficulty,
  likes,
  onClick,
}: RecipeCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleSave = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSaved(!isSaved);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Share functionality
  };

  return (
    <div 
      className="bg-card rounded-3xl overflow-hidden card-hover cursor-pointer"
      style={{ boxShadow: 'var(--shadow-card)' }}
      onClick={onClick}
    >
      {/* Author Info */}
      <div className="p-4 flex items-center gap-3">
        <img 
          src={authorAvatar} 
          alt={author}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex-1">
          <p className="font-semibold text-sm">{author}</p>
          <p className="text-xs text-muted-foreground">{cuisine}</p>
        </div>
      </div>

      {/* Recipe Image */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0 bg-gradient-overlay flex items-end p-4"
        >
          <h3 className="text-white font-bold text-xl">{title}</h3>
        </div>
      </div>

      {/* Interaction Buttons */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className="flex items-center gap-2 hover:bg-transparent"
          >
            <Heart 
              className={cn(
                "w-5 h-5 transition-colors",
                isLiked ? "fill-primary text-primary" : "text-foreground"
              )}
            />
            <span className="text-sm font-medium">{likes + (isLiked ? 1 : 0)}</span>
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleSave}
            className="hover:bg-transparent"
          >
            <Bookmark 
              className={cn(
                "w-5 h-5 transition-colors",
                isSaved ? "fill-primary text-primary" : "text-foreground"
              )}
            />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleShare}
            className="hover:bg-transparent"
          >
            <Share2 className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{prepTime}</span>
          <span>•</span>
          <span>{difficulty}</span>
        </div>
      </div>
    </div>
  );
};
