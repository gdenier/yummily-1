import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, useState } from "react";
import routes from "../utils/data/routes";
import { trpc } from "../utils/trpc";

export default function SignupPage(): ReactElement {
  const router = useRouter();

  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const [error, setError] = useState<string | undefined>();

  const [isLoading, setIsLoading] = useState(false);

  const register = trpc.useMutation("auth.register", {
    onError(error, variables, context) {
      setError(error.message);
    },
    onSuccess() {
      router.push(routes("signin"));
    },
  });
  const submit = async () => {
    if (!email || !password) return;
    setIsLoading(true);
    await register.mutate({ email, password });
    setIsLoading(false);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-8 w-full max-w-xs">
        <i className="emoji-hugging-face block w-24 h-24" />
        <h1 className="text-4xl font-medium">Sign up</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit();
          }}
          className="flex flex-col w-full  gap-4"
        >
          <div className="flex flex-col w-full">
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
                  className="stroke-current flex-shrink-0 h-6 w-6"
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
            Sign Up
          </button>
        </form>
        <div className="flex gap-2">
          <p>Already have an account ?</p>
          <Link href={routes("signin")}>
            <a className="text-primary font-medium">Sign in</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
