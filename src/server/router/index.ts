// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { authRouter } from "./authRouter";
import { recipeRouter } from "./recipeRouter";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("auth.", authRouter)
  .merge("recipe.", recipeRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
