import { Recipe } from "@prisma/client";
import Head from "next/head";
import { useRouter } from "next/router";
import { ReactElement } from "react";
import { DefaultQueryCell } from "../../../utils/DefaultQueryCell";
import { trpc } from "../../../utils/trpc";
import { useRecipeStore } from "./recipeStore";

export const RecipeCell = ({
  children: Children,
}: {
  children: ({ recipe }: { recipe: Recipe }) => ReactElement;
}): ReactElement => {
  const id = useRouter().query.id as string;

  const setRecipe = useRecipeStore((state) => state.setRecipe);
  const getOneRecipe = trpc.useQuery(["recipe.getOne", { id }], {
    onSuccess(recipe) {
      setRecipe(recipe);
    },
  });

  return (
    <DefaultQueryCell
      query={getOneRecipe}
      success={({ data }) => (
        <>
          <Head>
            <title>{data.title}</title>
            <meta name="description" content={data.description} />
          </Head>

          <Children recipe={data} />
        </>
      )}
    />
  );
};
