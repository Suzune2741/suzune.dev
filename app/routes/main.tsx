import type { Route } from "../+types/root";
import { Welcome } from "../welcome/welcome";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Suzune.dev" },
  ];
}
export default function Main() {
  return <Welcome />;
}
