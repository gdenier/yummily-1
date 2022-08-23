import { ReactElement } from "react";
import routes from "../../utils/data/routes";
import { TitleLayout } from "../layout/TitleLayout";
import { RecipeCell } from "./RecipePage/RecipeCell";
import { RecipeImages } from "./RecipePage/RecipeImages";
import { RecipeIngredients } from "./RecipePage/RecipeIngredients";
import RecipeMeta from "./RecipePage/RecipeMeta";
import { RecipeSteps } from "./RecipePage/RecipeSteps";

export const RecipePage = (): ReactElement => {
  return (
    <RecipeCell>
      {({ recipe }) => (
        <TitleLayout
          title="Recettes"
          parts={[
            { body: "Recettes", href: routes("recipes.index") },
            {
              body: recipe.title,
              href: routes("recipes.view", { params: recipe.id }),
            },
          ]}
        >
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col gap-4">
              <RecipeImages />
              <RecipeMeta />
              <hr className="my-2 border-gray-200 dark:border-gray-600" />
              <RecipeIngredients />
              <hr className="my-2 border-gray-200 dark:border-gray-600" />
              <RecipeSteps />
            </div>
            <button className="btn btn-primary w-full">Commencer</button>
          </div>
        </TitleLayout>
      )}
    </RecipeCell>
  );
};
