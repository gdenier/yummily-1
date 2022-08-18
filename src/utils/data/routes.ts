const routesMap = {
  index: {
    pathname: "/",
  },
  "recipes.index": {
    pathname: "/dashboard/recipes",
  },
  "recipes.create": {
    pathname: "/dashboard/recipes/create",
  },
  "recipes.view": {
    pathname: "/dashboard/recipes/:id",
  },
} as const;

export type Routes = keyof typeof routesMap;

export type RouteOptions = {
  params?: string[] | string;
};

export default function routes(route: Routes, routeOptions?: RouteOptions) {
  let pathname = routesMap[route].pathname as string;

  if (routeOptions?.params && pathname.includes("/:")) {
    const regex = /:[A-Za-z]*/;
    if (typeof routeOptions?.params === "string") {
      pathname = pathname.replace(regex, routeOptions?.params);
    } else {
      routeOptions?.params.forEach((param) => {
        pathname = pathname.replace(regex, param);
      });
    }
  }
  console.log(pathname);
  return pathname;
}
