import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import routes from "../../../utils/data/routes";
import { ActiveLink } from "../../Navigation/ActiveLink";
import { Searchbar } from "../../ui/Searchbar";

export const Sidebar = (): ReactElement => {
  const { data } = useSession();

  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r dark:bg-gray-800 dark:border-gray-600">
      <span className="text-3xl font-semibold text-gray-800 dark:text-white">
        Yummily
      </span>
      <Searchbar />
      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <ActiveLink href={routes("dashboard")}>
            <a className="btn btn-ghost w-full justify-start normal-case hover:bg-gray-200">
              Dashboard
            </a>
          </ActiveLink>
          <ActiveLink
            href={routes("recipes.index")}
            as={routes("recipes.index")}
          >
            <a className="btn btn-ghost w-full justify-start normal-case hover:bg-gray-200">
              Recettes
            </a>
          </ActiveLink>

          <hr className="my-6 border-gray-200 dark:border-gray-600" />

          <ActiveLink href={routes("index")} as={routes("index")}>
            <a className="btn btn-ghost w-full justify-start normal-case hover:bg-gray-200">
              Options
            </a>
          </ActiveLink>
        </nav>
        <div className="flex items-center px-4 -mx-2">
          <Image
            className="object-cover mx-2 rounded-full h-9 w-9"
            src={
              data?.user?.image ??
              `https://ui-avatars.com/api/?name=${data?.user?.name}&background=570DF8&color=fff&size=36`
            }
            // layout="fill"
            width={36}
            height={36}
            alt="avatar"
          />
          <h4 className="mx-2 font-medium text-gray-800 dark:text-gray-200">
            {data?.user?.name}
          </h4>
        </div>
      </div>
    </div>
  );
};
