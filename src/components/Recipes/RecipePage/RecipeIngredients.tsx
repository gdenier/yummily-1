import { ReactElement } from "react";

export const RecipeIngredients = (): ReactElement => {
  return (
    <section>
      <h3 className="text-2xl font-semibold mb-2">Ingrédients</h3>
      <ul className="flex flex-col gap-2">
        <li>20g Beurre</li>
        <li>200g Salade</li>
        <li>140g Viandes</li>
        <li>138g sel</li>
        <li>3kg farines</li>
      </ul>
    </section>
  );
};
