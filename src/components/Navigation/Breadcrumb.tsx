import Link from "next/link";
import { ReactElement, ReactNode } from "react";
import routes, { Routes } from "../../utils/data/routes";
import { ActiveLink } from "./ActiveLink";

export type BreadcrumbPart = {
  icon?: ReactNode;
  body: string;
  href: string;
};

export type BreadcrumbProps = {
  parts: BreadcrumbPart[];
};

export const Breadcrumb = ({ parts }: BreadcrumbProps): ReactElement => {
  return (
    <div className="flex items-center gap-4">
      <Link href={routes("dashboard")}>
        <a className="text-gray-600 dark:text-gray-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        </a>
      </Link>
      <span className="text-gray-500 dark:text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
      {parts.map((part, index) => (
        <div
          key={`breadcrumb-part-${index}`}
          className="flex items-center gap-4"
        >
          <ActiveLink
            href={part.href}
            activeClassName="!text-primary dark:!text-indigo-300 rounded-lg hover:underline"
          >
            <a className="flex items-center text-gray-600 -px-2 dark:text-gray-200 hover:underline">
              {part.icon}
              <span className={part.icon ? "mx-2" : ""}>{part.body}</span>
            </a>
          </ActiveLink>
          {index + 1 < parts.length && (
            <span className=" text-gray-500 dark:text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
