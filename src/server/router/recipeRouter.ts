import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { createRecipeValidationSchema } from "../../components/Recipes/CreateRecipePage/RecipeForm";
import { createProtectedRouter } from "./protected-router";

export const recipeRouter = createProtectedRouter()
  .query("getAll", {
    async resolve({ ctx }) {
      return await ctx.prisma.recipe.findMany({
        select: {
          id: true,
          title: true,
          description: true,
          createdAt: true,
          cover: true,
        },
        where: { userId: ctx.session.user.id },
        orderBy: { createdAt: "desc" },
      });
    },
  })
  .query("getOne", {
    input: z.object({ id: z.string() }),
    async resolve({ ctx, input: { id } }) {
      const recipe = await ctx.prisma.recipe.findUnique({
        where: { id },
        include: { steps: true },
      });

      if (recipe) return recipe;

      throw new TRPCError({
        code: "NOT_FOUND",
        message: "No recipe with the id " + id,
      });
    },
  })
  .mutation("create", {
    input: createRecipeValidationSchema,
    async resolve({ ctx, input }) {
      console.log("received");
      try {
        await ctx.prisma.recipe.create({
          data: input,
        });
      } catch (e) {
        console.error(e);
      }
    },
  });
