import Head from "next/head";
import Link from "next/link";
import { DashboardLayout } from "../../../components/layout/DashboardLayout";
import routes from "../../../utils/data/routes";
import { DefaultQueryCell } from "../../../utils/DefaultQueryCell";
import { trpc } from "../../../utils/trpc";

export default function RecipesPage() {
  const getAllRecipe = trpc.useQuery(["recipe.getAll"]);

  return (
    <DefaultQueryCell
      query={getAllRecipe}
      success={({ data: recipes }) => (
        <>
          <Head>
            <title>Recipes</title>
            <meta name="description" content="Recipes of the user" />
          </Head>

          <main>
            {recipes?.map((recipe, index) => {
              return (
                <div key={index}>
                  <p>{recipe.title}</p>
                  <span>- {recipe.description}</span>
                  <span>- {recipe.createdAt.toISOString()}</span>
                  <Link href={routes("recipes.view", { params: recipe.id })}>
                    Voir
                  </Link>
                </div>
              );
            })}
          </main>
        </>
      )}
    />
  );
}
