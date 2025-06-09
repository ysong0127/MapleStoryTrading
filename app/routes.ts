import { type RouteConfig, route, index } from "@react-router/dev/routes";


// routers.ts
export default [
  route("/", "routes/MainLayout.tsx", [
    index("routes/index.tsx"),  // <- 預設首頁
    route("submit", "routes/SubmitItem.tsx"),
    route("inventory", "routes/Inventory.tsx"),
    route("MonsterInfo", "routes/MonsterInfo.tsx"),
  ])
] satisfies RouteConfig;

