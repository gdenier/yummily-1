import Link from "next/link";
import { Fragment, ReactElement, ReactNode } from "react";
import { Breadcrumb, BreadcrumbProps } from "../Navigation/Breadcrumb";

export type ActionClick = {
  body: string;
  onClick: () => void;
};
export interface ActionLink {
  body: string;
  href: string;
}

export type TitleLayoutProps = {
  title: string;
  actions?: (ActionClick | ActionLink)[];
  children: ReactNode;
} & Partial<Pick<BreadcrumbProps, "parts">>;

export const TitleLayout = ({
  parts,
  title,
  actions,
  children,
}: TitleLayoutProps): ReactElement => {
  return (
    <div className="grid grid-rows-[auto_auto_1fr] h-full">
      <div className="flex w-full justify-between items-center mb-2">
        <h1 className="text-2xl">{title}</h1>
        <div className="flex gap-2 h-12">
          {actions?.map((action, index) => (
            <Fragment key={`title-layout-action-${index}`}>
              {"href" in action ? (
                <Link href={action.href}>
                  <a className="btn btn-primary">{action.body}</a>
                </Link>
              ) : (
                <button onClick={action.onClick} className="btn btn-primary">
                  {action.body}
                </button>
              )}
            </Fragment>
          ))}
        </div>
      </div>
      {parts && <Breadcrumb parts={parts} />}
      <div className="mt-6">{children}</div>
    </div>
  );
};
