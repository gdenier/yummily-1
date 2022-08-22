import { useRouter } from "next/router";
import { ReactElement, ReactNode } from "react";
import { Sidebar } from "./DashboardLayout/Sidebar";

const publicRoutes = ["/", "/signin", "/signup"];

export const DashboardLayout = ({
  children,
}: {
  children: ReactNode;
}): ReactElement => {
  const { pathname } = useRouter();

  if (publicRoutes.includes(pathname)) return <>{children}</>;

  return (
    <div className="flex h-screen w-screen overflow-x-hidden">
      <Sidebar />
      <main className="px-4 py-2 w-full h-full overflow-y-auto bg-gray-100 dark:bg-neutral">
        {children}
      </main>
    </div>
  );
};
