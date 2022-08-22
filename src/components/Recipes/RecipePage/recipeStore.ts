import { Recipe } from "@prisma/client";
import create from "zustand";

export interface RecipeState {
  recipe: Recipe | undefined;
  setRecipe: (recipe: Recipe) => void;
}

export const useRecipeStore = create<RecipeState>((set) => ({
  recipe: undefined,
  setRecipe: (recipe) => set(() => ({ recipe })),
}));
