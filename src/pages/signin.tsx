import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import routes from "../utils/data/routes";

export default function SigninPage(): ReactElement {
  const router = useRouter();

  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const [error, setError] = useState<string | undefined>();

  const [isLoading, setIsLoading] = useState(false);

  const submit = async () => {
    setError(undefined);
    setIsLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (result?.error) {
      setError(result?.error);
      setIsLoading(false);
      return;
    }
    router.push(routes("dashboard"));
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex w-full max-w-xs flex-col items-center gap-8">
        <i className="emoji-waving-hand block h-24 w-24" />
        <h1 className="text-4xl font-medium">Sign in</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
          className="flex w-full flex-col gap-4"
        >
          <div className="flex w-full flex-col">
            <div className="form-control w-full">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full">
              <label htmlFor="password" className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="password"
                className="input input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          {error && (
            <div className="alert alert-error">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 flex-shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{error}</span>
              </div>
            </div>
          )}
          <button
            type="submit"
            className={"btn btn-primary " + (isLoading ? "loading" : "")}
          >
            Sign in
          </button>
        </form>
        <div className="flex gap-2">
          <p>Don&apos;t have an account ?</p>
          <Link href={routes("signup")}>
            <a className="font-medium text-primary">Sign up for free</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
