import { ReactElement } from "react";
import withRecipe from "./utils/withRecipe";

export const RecipeSteps = withRecipe(({ recipe }): ReactElement => {
  return (
    <section>
      <h3 className="text-2xl font-semibold mb-2">Etapes de préparation</h3>
      <ul className="flex flex-col gap-2">
        {recipe.steps
          .sort((stepA, stepB) => stepA.index - stepB.index)
          .map((step, index) => (
            <li
              key={`recipe-step-${index}`}
              className="grid grid-cols-[auto_1fr] gap-12"
            >
              <span className="bg-primary text-primary-content w-12 h-12 flex justify-center items-center rounded-lg">
                {index + 1}
              </span>
              <p className="justify-self-start place-self-center">
                {step.body}
              </p>
            </li>
          ))}
      </ul>
    </section>
  );
});
