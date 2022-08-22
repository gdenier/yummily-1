import Head from "next/head";
import { RecipesPage as RecipesPageLayout } from "../../../components/Recipes/RecipesPage";

export default function RecipesPage() {
  return (
    <>
      <Head>
        <title>Yummily - Recettes</title>
      </Head>
      <RecipesPageLayout />
    </>
  );
}
