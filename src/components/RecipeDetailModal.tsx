import { X, Heart, Bookmark, Share2, Clock, ChefHat, Users } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface RecipeDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipe: {
    title: string;
    author: string;
    authorAvatar: string;
    image: string;
    prepTime: string;
    difficulty: string;
    servings: number;
    ingredients: string[];
    steps: string[];
    likes: number;
  };
}

export const RecipeDetailModal = ({ isOpen, onClose, recipe }: RecipeDetailModalProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen pb-20">
        {/* Header */}
        <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-10 px-4 py-3 flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
          <h2 className="font-bold text-lg">{recipe.title}</h2>
          <div className="w-10" />
        </div>

        <div className="max-w-lg mx-auto px-4">
          {/* Recipe Image */}
          <div className="relative w-full aspect-[16/10] overflow-hidden rounded-2xl mt-4">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Author Info */}
          <div className="py-4 flex items-center justify-between border-b border-border">
            <div className="flex items-center gap-3">
              <img 
                src={recipe.authorAvatar}
                alt={recipe.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold">{recipe.author}</p>
                <p className="text-xs text-muted-foreground">Food Creator</p>
              </div>
            </div>
            <Button variant="gradient" size="sm">
              Follow
            </Button>
          </div>

          {/* Stats */}
          <div className="py-4 grid grid-cols-4 gap-4 border-b border-border">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-1">
                <Heart className="w-4 h-4" />
              </div>
              <p className="text-xs text-muted-foreground">Likes</p>
              <p className="text-sm font-semibold">{recipe.likes}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-1">
                <Clock className="w-4 h-4" />
              </div>
              <p className="text-xs text-muted-foreground">Prep Time</p>
              <p className="text-sm font-semibold">{recipe.prepTime}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-1">
                <ChefHat className="w-4 h-4" />
              </div>
              <p className="text-xs text-muted-foreground">Difficulty</p>
              <p className="text-sm font-semibold">{recipe.difficulty}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-primary mb-1">
                <Users className="w-4 h-4" />
              </div>
              <p className="text-xs text-muted-foreground">Servings</p>
              <p className="text-sm font-semibold">{recipe.servings}</p>
            </div>
          </div>

          {/* Ingredients */}
          <div className="py-6">
            <h3 className="font-bold text-lg mb-4">Ingredients</h3>
            <ul className="space-y-3">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-semibold flex items-center justify-center mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-sm">{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Steps */}
          <div className="py-6 border-t border-border">
            <h3 className="font-bold text-lg mb-4">Instructions</h3>
            <ol className="space-y-4">
              {recipe.steps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full gradient-bg text-white text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </span>
                  <p className="text-sm pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Action Buttons */}
          <div className="sticky bottom-20 py-4 bg-background flex items-center gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsLiked(!isLiked)}
              className="flex-shrink-0"
            >
              <Heart 
                className={cn(
                  "w-5 h-5",
                  isLiked && "fill-primary text-primary"
                )}
              />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsSaved(!isSaved)}
              className="flex-shrink-0"
            >
              <Bookmark 
                className={cn(
                  "w-5 h-5",
                  isSaved && "fill-primary text-primary"
                )}
              />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="flex-shrink-0"
            >
              <Share2 className="w-5 h-5" />
            </Button>
            <Button className="flex-1 gradient-bg text-white font-semibold">
              Start Cooking
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
