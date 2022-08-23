import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { TextInput } from "../../../features/forms/TextInput";
import { CreateRecipeFormValues } from "./RecipeForm";

export const MetaForm = (): ReactElement => {
  const form = useFormContext<CreateRecipeFormValues>();

  const { register } = form;

  return (
    <div className="w-full">
      <TextInput
        {...register("title")}
        placeholder="Saisie un titre sympathique"
        label="Titre"
      />
      <TextInput
        {...register("description")}
        placeholder="Décris ce que tu vas cuisiner"
        label="Description"
      />
      <div className="grid grid-cols-3 gap-2">
        <TextInput
          {...register("backing", { valueAsNumber: true })}
          type="number"
          placeholder="Combien de temps ça doit cuire ?"
          label="Temps de cuisson (min)"
        />
        <TextInput
          {...register("preparation", { valueAsNumber: true })}
          type="number"
          placeholder="Combien de temps tu dois cuisiner ?"
          label="Temps de préparation (min)"
        />
        <TextInput
          {...register("nbPerson", { valueAsNumber: true })}
          type="number"
          placeholder="Pour combien de personne ?"
          label="Nombre de couvert"
        />
      </div>
    </div>
  );
};
