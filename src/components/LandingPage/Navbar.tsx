import Link from "next/link";
import { ReactElement } from "react";
import { useDisclosure } from "../../hooks/ui/useDisclosure";
import routes from "../../utils/data/routes";

export const Navbar = (): ReactElement => {
  const { isOpen, toggle } = useDisclosure();

  return (
    <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center">
      <div className="flex items-center justify-between">
        <div>
          <Link href={routes("index")}>
            <a className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300">
              Yummily
            </a>
          </Link>
        </div>

        {/* <!-- Mobile menu button --> */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
            aria-label="toggle menu"
            onClick={toggle}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
              <path
                fillRule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
      <div
        className={
          (isOpen ? "flex" : "hidden") +
          " flex-col mt-4 space-y-2 lg:flex lg:mt-0 lg:flex-row lg:items-center  lg:-px-8 lg:space-y-0"
        }
      >
        <Link href={routes("signin")}>
          <a
            className="text-gray-700 transition-colors duration-200 transform lg:mx-8 dark:text-gray-200 dark:hover:text-primary hover:text-primary"
            href="#"
          >
            Se connecter
          </a>
        </Link>
        {/* px-5 py-2 mt-4 font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg lg:block lg:mt-0 hover:bg-blue-500 lg:w-auto */}
        <Link href={routes("signup")}>
          <a
            className={
              (isOpen ? "flex" : "hidden") + " btn btn-primary lg:flex"
            }
            href="#"
          >
            S&apos;inscrire
          </a>
        </Link>
      </div>
    </nav>
  );
};
