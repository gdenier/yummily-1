import Head from "next/head";
import { useRouter } from "next/router";
import { DefaultQueryCell } from "../../../utils/DefaultQueryCell";
import { trpc } from "../../../utils/trpc";

export default function RecipePage() {
  const id = useRouter().query.id as string;

  const getOneRecipe = trpc.useQuery(["recipe.getOne", { id }]);

  return (
    <DefaultQueryCell
      query={getOneRecipe}
      success={({ data }) => (
        <>
          <Head>
            <title>{data.title}</title>
            <meta name="description" content={data.description} />
          </Head>

          <main>
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            <em>Created {data.createdAt.toLocaleDateString()}</em>
          </main>
        </>
      )}
    />
  );
}
