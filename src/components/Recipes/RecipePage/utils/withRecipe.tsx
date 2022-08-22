import { Recipe } from "@prisma/client";
import { ReactElement } from "react";
import { useRecipeStore } from "../recipeStore";

type withRecipeChildren = ({ recipe }: { recipe: Recipe }) => ReactElement;

export default function WithRecipe(
  Component: withRecipeChildren
): () => JSX.Element | null {
  return function WithRecipe() {
    const recipe = useRecipeStore((state) => state.recipe);

    if (recipe) return <Component recipe={recipe} />;

    return null;
  };
}
