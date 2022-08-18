import Link from "next/link";
import { useRouter } from "next/router";
import { ReactElement, ReactNode } from "react";
import routes from "../../utils/data/routes";

const publicRoutes = ["/", "/signin", "/signup"];

export const DashboardLayout = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const { pathname } = useRouter();

  if (publicRoutes.includes(pathname)) return <>{children}</>;

  return (
    <div className="flex h-screen overflow-hidden">
      <aside className="w-40 bg-primary">
        <Link href={routes("dashboard")}>
          <a className="btn">Dashboard</a>
        </Link>
        <Link href={routes("recipes.index")}>
          <a className="btn">Recipes</a>
        </Link>
      </aside>
      <main>{children}</main>
    </div>
  );
};
