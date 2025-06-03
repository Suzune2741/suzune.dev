import { Outlet, Link } from "react-router";
import { useMenuItems } from "../utils/useMenuItems";

export default function Header() {
  const menuItems = useMenuItems();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex justify-end">
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
      </header>
      <main className="flex-grow flex justify-center">
        <Outlet />
      </main>
      <footer className="flex justify-center p-2 text-gray-500 dark:text-gray-400">
        <p className="text-sm">© 2025 Suzune</p>
      </footer>
    </div>
  );
}
