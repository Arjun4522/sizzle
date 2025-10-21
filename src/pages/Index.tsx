import { useState } from "react";
import { Search, Filter, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RecipeCard } from "@/components/RecipeCard";
import { TrendingCarousel } from "@/components/TrendingCarousel";
import { BottomNav } from "@/components/BottomNav";
import { RecipeDetailModal } from "@/components/RecipeDetailModal";
import { ProfileView } from "@/components/ProfileView";
import { AddRecipeModal } from "@/components/AddRecipeModal";

import heroPasta from "@/assets/hero-pasta.jpg";
import bowlFood from "@/assets/bowl-food.jpg";
import dessert from "@/assets/dessert.jpg";
import sushi from "@/assets/sushi.jpg";
import burger from "@/assets/burger.jpg";
import smoothie from "@/assets/smoothie.jpg";

const Index = () => {
  const [currentView, setCurrentView] = useState('home');
  const [selectedRecipe, setSelectedRecipe] = useState<any>(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Mock data
  const trendingRecipes = [
    { id: 1, title: "Classic Carbonara", image: heroPasta, prepTime: "30 min", difficulty: "Medium" },
    { id: 2, title: "Buddha Bowl", image: bowlFood, prepTime: "20 min", difficulty: "Easy" },
    { id: 3, title: "Chocolate Lava Cake", image: dessert, prepTime: "45 min", difficulty: "Hard" },
  ];

  const recipes = [
    {
      id: 1,
      title: "Classic Italian Carbonara",
      author: "Chef Emma",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      image: heroPasta,
      cuisine: "Italian",
      prepTime: "30 min",
      difficulty: "Medium",
      servings: 4,
      likes: 342,
      ingredients: [
        "400g spaghetti",
        "200g pancetta or guanciale",
        "4 large eggs",
        "100g Pecorino Romano cheese",
        "Black pepper to taste",
        "Salt for pasta water"
      ],
      steps: [
        "Bring a large pot of salted water to boil and cook spaghetti according to package directions.",
        "Meanwhile, cut pancetta into small cubes and cook in a large pan until crispy.",
        "In a bowl, whisk together eggs and grated Pecorino Romano cheese.",
        "Drain pasta, reserving 1 cup of pasta water.",
        "Add hot pasta to the pan with pancetta, remove from heat.",
        "Quickly stir in egg mixture, adding pasta water to create a creamy sauce.",
        "Season with black pepper and serve immediately."
      ]
    },
    {
      id: 2,
      title: "Healthy Buddha Bowl",
      author: "Sarah Green",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      image: bowlFood,
      cuisine: "Healthy",
      prepTime: "20 min",
      difficulty: "Easy",
      servings: 2,
      likes: 289,
      ingredients: [
        "1 cup quinoa",
        "1 avocado",
        "1 cup roasted chickpeas",
        "Mixed vegetables",
        "Tahini dressing",
        "Fresh herbs"
      ],
      steps: [
        "Cook quinoa according to package instructions.",
        "Roast chickpeas in oven at 400°F for 20 minutes.",
        "Chop and prepare all vegetables.",
        "Arrange quinoa, vegetables, and chickpeas in a bowl.",
        "Drizzle with tahini dressing and garnish with herbs."
      ]
    },
    {
      id: 3,
      title: "Molten Chocolate Lava Cake",
      author: "Baker Mike",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
      image: dessert,
      cuisine: "Dessert",
      prepTime: "45 min",
      difficulty: "Hard",
      servings: 4,
      likes: 567,
      ingredients: [
        "200g dark chocolate",
        "100g butter",
        "2 eggs + 2 egg yolks",
        "50g sugar",
        "30g flour",
        "Vanilla ice cream"
      ],
      steps: [
        "Preheat oven to 425°F and butter 4 ramekins.",
        "Melt chocolate and butter together.",
        "Whisk eggs, yolks, and sugar until thick.",
        "Fold in melted chocolate mixture and flour.",
        "Pour into ramekins and bake for 12-14 minutes.",
        "Let cool for 1 minute, invert onto plates, serve with ice cream."
      ]
    },
    {
      id: 4,
      title: "Fresh Sushi Platter",
      author: "Chef Kenji",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kenji",
      image: sushi,
      cuisine: "Japanese",
      prepTime: "60 min",
      difficulty: "Hard",
      servings: 4,
      likes: 421,
      ingredients: [
        "Sushi rice",
        "Nori sheets",
        "Fresh salmon",
        "Tuna",
        "Avocado",
        "Cucumber",
        "Wasabi and ginger"
      ],
      steps: [
        "Cook and season sushi rice properly.",
        "Prepare all ingredients by slicing thinly.",
        "Roll sushi using bamboo mat.",
        "Slice rolls with sharp knife.",
        "Arrange beautifully on platter with garnishes."
      ]
    },
    {
      id: 5,
      title: "Gourmet Burger",
      author: "Grill Master Tom",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tom",
      image: burger,
      cuisine: "American",
      prepTime: "25 min",
      difficulty: "Easy",
      servings: 4,
      likes: 512,
      ingredients: [
        "Ground beef",
        "Brioche buns",
        "Cheddar cheese",
        "Lettuce, tomato, onion",
        "Special sauce",
        "French fries"
      ],
      steps: [
        "Form beef into patties and season well.",
        "Grill burgers to desired doneness.",
        "Toast buns on grill.",
        "Layer burger with cheese, vegetables, and sauce.",
        "Serve with crispy fries."
      ]
    },
    {
      id: 6,
      title: "Berry Smoothie Bowl",
      author: "Wellness Coach Lisa",
      authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      image: smoothie,
      cuisine: "Breakfast",
      prepTime: "10 min",
      difficulty: "Easy",
      servings: 1,
      likes: 234,
      ingredients: [
        "Frozen berries",
        "Banana",
        "Greek yogurt",
        "Granola",
        "Chia seeds",
        "Fresh fruits"
      ],
      steps: [
        "Blend frozen berries, banana, and yogurt until smooth.",
        "Pour into bowl.",
        "Top with granola, chia seeds, and fresh fruits.",
        "Serve immediately."
      ]
    },
  ];

  const handleViewChange = (view: string) => {
    if (view === 'add') {
      setIsAddModalOpen(true);
    } else {
      setCurrentView(view);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-background pb-20">
        {/* Top Bar */}
        <header className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-40 px-4 py-3 flex items-center justify-between">
          <h1 className="text-2xl font-bold gradient-text">Sizzle</h1>
          <Button variant="ghost" size="icon">
            <Star className="w-5 h-5" />
          </Button>
        </header>

        {/* Main Content */}
        {currentView === 'profile' ? (
          <ProfileView recipes={recipes} />
        ) : (
          <main className="max-w-lg mx-auto animate-fade-in">
            {/* Search Bar */}
            <div className="px-4 py-4 space-y-4">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input 
                    placeholder="Search recipes..."
                    className="pl-10 h-12 rounded-full bg-muted/50 border-0"
                  />
                </div>
                <Button 
                  variant="outline" 
                  size="icon"
                  className="h-12 w-12 rounded-full"
                >
                  <Filter className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Trending Carousel */}
            <div className="py-4">
              <TrendingCarousel recipes={trendingRecipes} />
            </div>

            {/* Recipe Feed */}
            <div className="px-4 py-6 space-y-6">
              <h2 className="text-xl font-bold">Discover Recipes</h2>
              <div className="space-y-6">
                {recipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    {...recipe}
                    onClick={() => setSelectedRecipe(recipe)}
                  />
                ))}
              </div>
            </div>
          </main>
        )}

        {/* Bottom Navigation */}
        <BottomNav currentView={currentView} onViewChange={handleViewChange} />
      </div>

      {/* Recipe Detail Modal */}
      {selectedRecipe && (
        <RecipeDetailModal
          isOpen={!!selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
          recipe={selectedRecipe}
        />
      )}

      {/* Add Recipe Modal */}
      <AddRecipeModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
      />
    </>
  );
};

export default Index;
