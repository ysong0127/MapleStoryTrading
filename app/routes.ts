import { type RouteConfig, route, index } from "@react-router/dev/routes";


export default [
  route("", "routes/MainLayout.tsx",  [
    index("routes/home.tsx"),
    route("submit", "routes/SubmitItem.tsx"),
    route("inventory", "routes/Inventory.tsx"),
    route("MonsterInfo", "routes/MonsterInfo.tsx"),
  ])
] satisfies RouteConfig;
