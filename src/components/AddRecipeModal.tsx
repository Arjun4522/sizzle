import { X, Camera, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface AddRecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddRecipeModal = ({ isOpen, onClose }: AddRecipeModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen pb-20">
        {/* Header */}
        <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-10 px-4 py-3 flex items-center justify-between">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-5 h-5" />
          </Button>
          <h2 className="font-bold text-lg">New Recipe</h2>
          <div className="w-10" />
        </div>

        <div className="max-w-lg mx-auto px-4 py-6 space-y-6">
          {/* Image Upload */}
          <div className="space-y-2">
            <Label>Recipe Photo</Label>
            <div className="aspect-[16/10] rounded-2xl border-2 border-dashed border-border bg-muted/30 flex flex-col items-center justify-center gap-3 cursor-pointer hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                <Camera className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                <p className="text-sm font-medium">Add a photo</p>
                <p className="text-xs text-muted-foreground">or drag and drop</p>
              </div>
              <Button variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Choose file
              </Button>
            </div>
          </div>

          {/* Recipe Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Recipe Title</Label>
            <Input 
              id="title"
              placeholder="e.g., Creamy Pasta Carbonara"
              className="text-base"
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description"
              placeholder="Tell us about this recipe..."
              rows={3}
              className="resize-none text-base"
            />
          </div>

          {/* Recipe Details */}
          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="prepTime">Prep Time</Label>
              <Input 
                id="prepTime"
                placeholder="30 min"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="difficulty">Difficulty</Label>
              <Input 
                id="difficulty"
                placeholder="Easy"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="servings">Servings</Label>
              <Input 
                id="servings"
                type="number"
                placeholder="4"
              />
            </div>
          </div>

          {/* Ingredients */}
          <div className="space-y-2">
            <Label htmlFor="ingredients">Ingredients</Label>
            <Textarea 
              id="ingredients"
              placeholder="List ingredients (one per line)"
              rows={5}
              className="resize-none text-base"
            />
          </div>

          {/* Steps */}
          <div className="space-y-2">
            <Label htmlFor="steps">Instructions</Label>
            <Textarea 
              id="steps"
              placeholder="List cooking steps (one per line)"
              rows={8}
              className="resize-none text-base"
            />
          </div>

          {/* Tags */}
          <div className="space-y-2">
            <Label htmlFor="tags">Tags</Label>
            <Input 
              id="tags"
              placeholder="e.g., Italian, Pasta, Dinner"
            />
          </div>

          {/* Submit Button */}
          <div className="sticky bottom-20 pt-4">
            <Button className="w-full gradient-bg text-white font-semibold h-12">
              Publish Recipe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
