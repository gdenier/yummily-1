import { useState } from "react";
import { trpc } from "../../../utils/trpc";

const RecipeForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const ctx = trpc.useContext();
  const createRecipe = trpc.useMutation(["recipe.create"], {
    onMutate: () => {
      ctx.cancelQuery(["recipe.getAll"]);

      const optimisticUpdate = ctx.getQueryData(["recipe.getAll"]);
      if (optimisticUpdate) {
        ctx.setQueryData(["recipe.getAll"], optimisticUpdate);
      }
    },
    onSettled: () => {
      ctx.invalidateQueries(["recipe.getAll"]);
    },
  });

  const onSubmit = () => {
    createRecipe.mutate({ title, description });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
      className="flex flex-col gap-1"
    >
      title
      <input
        type="text"
        name="title"
        className="text-neutral-900"
        onChange={(e) => setTitle(e.target.value)}
      />
      description
      <input
        type="text"
        name="description"
        className="text-neutral-900"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit" className="bg-gray-100 text-neutral-900">
        Create
      </button>
    </form>
  );
};

export default function CreateRecipePage() {
  return <RecipeForm />;
}
