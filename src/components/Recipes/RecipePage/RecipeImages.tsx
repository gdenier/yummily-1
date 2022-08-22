import Image from "next/image";
import { ReactElement } from "react";
import withRecipe from "./utils/withRecipe";

export const RecipeImages = withRecipe(({ recipe }): ReactElement => {
  return (
    <div className="grid grid-cols-2 w-full h-96 gap-3 rounded-lg overflow-hidden">
      <div className="relative row-span-2 h-full w-full dark:bg-indigo-50 bg-indigo-300 flex items-center">
        {recipe.cover ? (
          <Image
            src={recipe.cover}
            layout="fill"
            objectFit="cover"
            alt="image de la recette"
          />
        ) : (
          <i className="emoji-pizza w-full h-56 py-6 transform-none" />
        )}
      </div>
      <div className="relative h-full w-full dark:bg-indigo-50 bg-indigo-300 flex items-center">
        <i className="emoji-pizza w-full h-36 py-6 transform-none" />
      </div>
      <div className="relative h-full w-full dark:bg-indigo-50 bg-indigo-300 flex items-center justify-center">
        <button className="btn btn-ghost">Ajouter une image</button>
      </div>
    </div>
  );
});
