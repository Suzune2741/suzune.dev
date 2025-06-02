import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("./routes/main.tsx"),
  layout("layouts/header.tsx", [
    route("/home", "routes/home.tsx"),
    route("/gallery", "routes/gallery.tsx"),
  ]),
] satisfies RouteConfig;
