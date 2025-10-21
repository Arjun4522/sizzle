import { Settings, Users, Heart, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ProfileViewProps {
  recipes: any[];
}

export const ProfileView = ({ recipes }: ProfileViewProps) => {
  return (
    <div className="pb-24 px-4 max-w-lg mx-auto">
      {/* Profile Header */}
      <div className="flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold gradient-text">Profile</h1>
        <Button variant="ghost" size="icon">
          <Settings className="w-5 h-5" />
        </Button>
      </div>

      {/* Profile Info */}
      <div className="flex flex-col items-center py-6">
        <div className="w-24 h-24 rounded-full bg-gradient-primary mb-4"></div>
        <h2 className="text-xl font-bold mb-1">Chef Emma</h2>
        <p className="text-sm text-muted-foreground mb-4">Food enthusiast & recipe creator</p>
        
        {/* Stats */}
        <div className="flex items-center gap-8 mb-6">
          <div className="text-center">
            <p className="text-xl font-bold">{recipes.length}</p>
            <p className="text-xs text-muted-foreground">Recipes</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">2.5K</p>
            <p className="text-xs text-muted-foreground">Followers</p>
          </div>
          <div className="text-center">
            <p className="text-xl font-bold">456</p>
            <p className="text-xs text-muted-foreground">Following</p>
          </div>
        </div>

        <Button variant="gradient" className="w-full max-w-xs">
          Edit Profile
        </Button>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="recipes" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="recipes" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            My Recipes
          </TabsTrigger>
          <TabsTrigger value="saved" className="flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Saved
          </TabsTrigger>
        </TabsList>

        <TabsContent value="recipes" className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {recipes.slice(0, 6).map((recipe) => (
              <div 
                key={recipe.id}
                className="rounded-2xl overflow-hidden card-hover cursor-pointer"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <div className="aspect-square relative">
                  <img 
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-overlay flex items-end p-3">
                    <h3 className="text-white font-semibold text-sm line-clamp-2">
                      {recipe.title}
                    </h3>
                  </div>
                </div>
                <div className="p-3 bg-card">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Heart className="w-3 h-3" />
                    <span>{recipe.likes}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="saved" className="space-y-4">
          <div className="text-center py-12">
            <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No saved recipes yet</p>
            <p className="text-sm text-muted-foreground mt-2">
              Start saving recipes you love!
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
