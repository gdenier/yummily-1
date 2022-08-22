import { ReactElement } from "react";
import routes from "../../utils/data/routes";
import { TitleLayout } from "../layout/TitleLayout";
import { RecipesCell } from "./RecipesPage/RecipesCell";

export const RecipesPage = (): ReactElement => {
  return (
    <TitleLayout
      title="Recettes"
      actions={[
        { body: "Ajouter une recette", href: routes("recipes.create") },
      ]}
      parts={[{ body: "Recettes", href: routes("recipes.index") }]}
    >
      <RecipesCell />
    </TitleLayout>
  );
};
