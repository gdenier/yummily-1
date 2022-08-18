import { createRouter } from "./context";
import { z } from "zod";
import bcrypt from "bcryptjs";

export const authRouter = createRouter().mutation("register", {
  input: z.object({ email: z.string().email(), password: z.string().min(8) }),
  async resolve({ ctx, input: { email, password } }) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = await ctx.prisma.user.create({
      data: { email, password: hash, name: email.split("@")[0] },
    });

    return user;
  },
});
