import { Prisma } from "@prisma/client";
import create from "zustand";

export type RecipeWithStep = Prisma.RecipeGetPayload<{
  include: { steps: true };
}>;

export interface RecipeState {
  recipe: RecipeWithStep | undefined;
  setRecipe: (recipe: RecipeWithStep) => void;
}

export const useRecipeStore = create<RecipeState>((set) => ({
  recipe: undefined,
  setRecipe: (recipe) => set(() => ({ recipe })),
}));
