import { Outlet, Link } from "react-router";
import { useMenuItems } from "../utils/useMenuItems";

export default function Header() {
  const menuItems = useMenuItems();
  return (
    <>
      <div className="flex justify-end">
        <nav className="flex flex-row p-4 gap-3 mr-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block hover:underline"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
      <div className="flex justify-center">
        <Outlet />
      </div>
    </>
  );
}
