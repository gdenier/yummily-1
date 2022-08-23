import Link from "next/link";
import { useRouter } from "next/router";
import { cloneElement, JSXElementConstructor, ReactElement } from "react";
import React from "react";

export type ActiveLinkProps = {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  href: string;
  as?: string;
  activeClassName?: string;
};

export const ActiveLink = ({
  children,
  href,
  as,
  activeClassName,
}: ActiveLinkProps): ReactElement => {
  const router = useRouter();

  return (
    <Link href={href}>
      {cloneElement(children, {
        className:
          router.asPath === href || (as && router.asPath.includes(as))
            ? `${children.props.className} ${activeClassName ?? "!btn-primary"}`
            : children.props.className,
      })}
    </Link>
  );
};
