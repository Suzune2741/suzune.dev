import type { Route } from "../+types/root";
import { Profile } from "../profile/profile";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "ホーム" },
  ];
}

export default function Home() {
  return <Profile />;
}
