import Link from "next/link";
import { useRouter, withRouter } from "next/router";
import {
  Children,
  cloneElement,
  JSXElementConstructor,
  ReactElement,
  ReactNode,
} from "react";
import React from "react";

export type ActiveLinkProps = {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  href: string;
  as?: string;
};

export const ActiveLink = ({
  children,
  href,
  as,
}: ActiveLinkProps): ReactElement => {
  const router = useRouter();

  return (
    <Link href={href}>
      {cloneElement(children, {
        className:
          router.asPath === href || router.asPath === as
            ? `${children.props.className} !btn-primary`
            : children.props.className,
      })}
    </Link>
  );
};
