import { TRPCError } from "@trpc/server";
import { z } from "zod";
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
        },
        where: { userId: ctx.session.user.id },
        orderBy: { createdAt: "desc" },
      });
    },
  })
  .query("getOne", {
    input: z.object({ id: z.string() }),
    async resolve({ ctx, input: { id } }) {
      const recipe = await ctx.prisma.recipe.findUnique({ where: { id } });

      if (recipe) return recipe;

      throw new TRPCError({
        code: "NOT_FOUND",
        message: "No recipe with the id " + id,
      });
    },
  })
  .mutation("create", {
    input: z.object({ title: z.string(), description: z.string() }),
    async resolve({ ctx, input: { title, description } }) {
      return await ctx.prisma.recipe
        .create({
          data: { title, description, userId: ctx.session.user.id },
        })
        .catch((e) => console.error(e));
    },
  });
