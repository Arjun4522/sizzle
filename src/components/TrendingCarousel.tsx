import { Clock, ChefHat } from "lucide-react";

interface TrendingRecipe {
  id: number;
  title: string;
  image: string;
  prepTime: string;
  difficulty: string;
}

interface TrendingCarouselProps {
  recipes: TrendingRecipe[];
}

export const TrendingCarousel = ({ recipes }: TrendingCarouselProps) => {
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4 px-4">Trending Now 🔥</h2>
      <div className="flex gap-4 overflow-x-auto px-4 pb-2 hide-scrollbar">
        {recipes.map((recipe) => (
          <div 
            key={recipe.id}
            className="flex-shrink-0 w-64 rounded-2xl overflow-hidden card-hover cursor-pointer"
            style={{ boxShadow: 'var(--shadow-card)' }}
          >
            <div className="relative h-40 overflow-hidden">
              <img 
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-overlay" />
            </div>
            <div className="bg-card p-4">
              <h3 className="font-semibold text-sm mb-2 line-clamp-2">{recipe.title}</h3>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{recipe.prepTime}</span>
                </div>
                <div className="flex items-center gap-1">
                  <ChefHat className="w-3 h-3" />
                  <span>{recipe.difficulty}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};
