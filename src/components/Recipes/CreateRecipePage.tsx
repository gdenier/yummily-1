import { ReactElement } from "react";
import routes from "../../utils/data/routes";
import { TitleLayout } from "../layout/TitleLayout";
import { RecipeForm } from "./CreateRecipePage/RecipeForm";

export const CreateRecipePage = (): ReactElement => {
  return (
    <TitleLayout
      title="Recettes"
      parts={[
        { body: "Recettes", href: routes("recipes.index") },
        {
          body: "Ajout",
          href: routes("recipes.create"),
        },
      ]}
    >
      <RecipeForm />
    </TitleLayout>
  );
};
