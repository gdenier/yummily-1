import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import routes from "../utils/data/routes";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data: session, status } = useSession();

  const submit = async () => {
    const result = await signIn("credentials", {
      redirect: false,
      email: "test@test.fr",
      password: "password",
    });
    console.log(result);
  };

  const register = trpc.useMutation(["auth.register"]);
  const addUser = () => {
    register.mutate({ email: "test@test.fr", password: "password" });
  };

  if (status === "loading") {
    return <main className="flex flex-col items-center pt-4">Loading...</main>;
  }

  return (
    <main className="flex flex-col items-center gap-6">
      <h1 className="text-4xl pt-4">Yummily</h1>

      {session ? (
        <div>
          <p>hi {session.user?.name}</p>

          <button onClick={() => signOut()}>Logout</button>
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
          className="flex flex-col gap-1"
        >
          login
          <input type="email" name="email" className="text-neutral-900" />
          password
          <input type="password" name="password" className="text-neutral-900" />
          <button type="submit">Login</button>
        </form>
      )}

      <Link href={routes("dashboard")}>Dashbaord</Link>
    </main>
  );
};

export default Home;
