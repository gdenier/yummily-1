import { Recipe } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import routes from "../../../utils/data/routes";

export const RecipesList = ({
  recipes,
}: {
  recipes: Recipe[];
}): ReactElement => {
  return (
    <div className="grid grid-cols-3 gap-4 w-full">
      {recipes.map((recipe, index) => (
        <Link
          key={`recipe-list-row-${index}`}
          href={routes("recipes.view", { params: recipe.id })}
        >
          <div className="flex flex-col shadow-lg rounded-lg overflow-hidden hover:scale-[1.02] hover:z-10 transition ease-in-out cursor-pointer">
            <div className="relative w-full h-36 flex justify-center">
              {recipe.cover ? (
                <Image
                  src={recipe.cover}
                  layout="fill"
                  objectFit="cover"
                  alt="image de la recette"
                />
              ) : (
                <i className="emoji-pizza w-full h-36 bg-indigo-50 py-6 transform-none" />
              )}
            </div>
            <div className="bg-pink-700 px-6 py-3">
              <p className="text-neutral-content font-semibold text-lg">
                Entrée
              </p>
            </div>
            <div className="flex flex-col gap-3 bg-white dark:bg-gray-800 px-6 py-3">
              <h2 className="font-bold text-xl">{recipe.title}</h2>
              <p className="text-gray-700 dark:text-gray-400 mb-3">
                {recipe.description}
              </p>
              <ul className="flex flex-col gap-4">
                <li className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>35 min</p>
                </li>
                <li className="flex gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p>25 min</p>
                </li>
              </ul>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
