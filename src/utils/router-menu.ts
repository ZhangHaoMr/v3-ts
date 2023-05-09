import { RouteRecordRaw } from "vue-router";

let filstMenu: any = null;

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
      console.log(menu);
      if (menu.type === 1) {
        routerAdd(menu.children);
      } else {
        const route = routesAll.find((item) => item.path === menu.url);
        console.log("route24", route);

        if (route) {
          routes.push(route);
        }
        if (!filstMenu) filstMenu = routesAll[0];
      }
    }
  }
  routerAdd(menus);
  console.log("routesAll", routesAll);
  return routes;
}

export { filstMenu };
