import { Recipe } from "@prisma/client";
import { ReactElement } from "react";
import { DefaultQueryCell } from "../../../utils/DefaultQueryCell";
import { trpc } from "../../../utils/trpc";
import { RecipesList } from "./RecipesList";

export const RecipesCell = (): ReactElement => {
  const getAllRecipe = trpc.useQuery(["recipe.getAll"]);

  return (
    <DefaultQueryCell
      query={getAllRecipe}
      success={({ data: recipes }) => (
        <RecipesList recipes={recipes as Recipe[]} />
      )}
    />
  );
};
