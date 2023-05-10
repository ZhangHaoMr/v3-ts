import { IBreadcrumb } from "@/baseUI/Breadcrumb/types";
import { RouteRecordRaw } from "vue-router";

// let filstMenu: any = null;

// 动态添加路由
export function MenuRouterAdd(menus: RouteRecordRaw[]): RouteRecordRaw[] {
  // 匹配的路由
  const routes: RouteRecordRaw[] = [];
  // 所有的路由
  const routesAll: any[] = [];

  // 找出所有的路由
  const fileRoute = require.context("../router/main", true, /\.ts/);
  fileRoute.keys().forEach((item) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require("../router/main" + item.replace(".", ""));
    routesAll.push(route.default);
  });

  function routerAdd(menus: any[]) {
    for (const menu of menus) {
      // console.log(menu);
      if (menu.type === 1) {
        routerAdd(menu.children);
      } else {
        const route = routesAll.find((item) => item.path === menu.url);
        // console.log("route24", route);

        if (route) {
          routes.push(route);
        }
        // if (!filstMenu) filstMenu = routesAll[0];
      }
    }
  }
  routerAdd(menus);
  // console.log("routesAll", routesAll);
  return routes;
}

export function pathMapBreadcrumb(
  userMenus: any[],
  currentPath: string
): IBreadcrumb[] {
  const breadcrumbs: IBreadcrumb[] = [];
  pathMapMenu(userMenus, currentPath, breadcrumbs);
  return breadcrumbs;
}

function pathMapMenu(
  userMenus: any[],
  currentPath: string,
  breadcrumbs?: IBreadcrumb[]
): any {
  for (const menu of userMenus) {
    if (menu.type === 1) {
      const findMenu = pathMapMenu(menu.children ?? [], currentPath);
      // console.log(findMenu);

      if (findMenu) {
        breadcrumbs?.push({ name: menu.name, path: menu.url });
        breadcrumbs?.push({ name: findMenu.name });

        return findMenu;
      }
    } else if (menu.type === 2 && menu.url === currentPath) {
      return menu;
    }
  }
}

// export { filstMenu };
