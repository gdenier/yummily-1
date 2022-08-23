import { ReactElement } from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import { TextInput } from "../../../features/forms/TextInput";
import { CreateRecipeFormValues } from "./RecipeForm";

export const IngredientsForm = (): ReactElement => {
  const form = useFormContext<CreateRecipeFormValues>();

  const { control, register } = form;

  const { fields, append, remove } = useFieldArray({
    name: "ingredients.create",
    control,
  });

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center">
        <p className="text-xl">Ingrédients</p>
        <button
          className="btn btn-secondary btn-sm normal-case"
          type="button"
          onClick={() =>
            append({
              name: "",
              quantity: 0,
              unit: "",
            })
          }
        >
          Ajouter un ingrédient
        </button>
      </div>
      <ul className="-mt-4">
        {!fields.length && (
          <div className="h-12 w-full flex justify-center items-center mt-4">
            <p className="bg-neutral-focus p-4 rounded-lg">
              Pas d&apos;ingrédient
            </p>
          </div>
        )}
        {fields.map((field, index) => (
          <li key={`ingredient-input-${index}`}>
            <div className="grid grid-cols-[1fr_1fr_6fr_auto] gap-2 items-end">
              <TextInput
                label="Quantité"
                type="number"
                {...register(`ingredients.create.${index}.quantity` as const, {
                  valueAsNumber: true,
                })}
              />
              <TextInput
                label="Unité"
                placeholder="kg, ml..."
                {...register(`ingredients.create.${index}.unit` as const)}
              />
              <TextInput
                label="Nom"
                placeholder="Nom"
                {...register(`ingredients.create.${index}.name` as const)}
              />
              <button className="btn btn-error" onClick={() => remove(index)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
