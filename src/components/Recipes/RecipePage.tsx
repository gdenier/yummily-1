import { ReactElement } from "react";
import routes from "../../utils/data/routes";
import { TitleLayout } from "../layout/TitleLayout";
import { RecipeCell } from "./RecipePage/RecipeCell";
import { RecipeImages } from "./RecipePage/RecipeImages";
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
          <div className="flex flex-col gap-2">
            <RecipeImages />
            <RecipeMeta />
            <RecipeSteps />
          </div>
          <button className="btn btn-primary w-full">Commencer</button>
        </TitleLayout>
      )}
    </RecipeCell>
  );
};
