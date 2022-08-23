import { ReactElement } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { useZodForm } from "../../../features/forms/hooks/useZodForm";
import { trpc } from "../../../utils/trpc";
import { IngredientsForm } from "./IngredientsForm";
import { MetaForm } from "./MetaForm";
import { StepsForm } from "./StepsForm";

export const createRecipeValidationSchema = z.object({
  title: z.string(),
  description: z.string(),
  backing: z.number(),
  preparation: z.number(),
  nbPerson: z.number(),
  steps: z.object({
    create: z.array(z.object({ body: z.string(), index: z.number() })),
  }),
  ingredients: z.object({
    create: z.array(
      z.object({ name: z.string(), quantity: z.number(), unit: z.string() })
    ),
  }),
});

export type CreateRecipeFormValues = typeof createRecipeValidationSchema._type;

export const RecipeForm = (): ReactElement => {
  createRecipeValidationSchema._getType;
  const form = useZodForm({ schema: createRecipeValidationSchema });

  const trpcUtils = trpc.useContext();
  const createRecipe = trpc.useMutation("recipe.create", {
    async onSuccess() {
      await trpcUtils.invalidateQueries(["recipe.getAll"]);
    },
  });

  const onSubmit = (values: CreateRecipeFormValues) => {
    console.log("submitted", values);
    createRecipe.mutateAsync(values);
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-6 items-end"
        onSubmit={form.handleSubmit((values) => onSubmit(values))}
      >
        <MetaForm />
        <hr className="my-2 w-full border-gray-200 dark:border-gray-600" />
        <IngredientsForm />
        <hr className="my-2 w-full border-gray-200 dark:border-gray-600" />
        <StepsForm />
        <button className="btn btn-primary mt-8" type="submit">
          Valider cette recette
        </button>
      </form>
    </FormProvider>
  );
};
