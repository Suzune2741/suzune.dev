import { Link } from "react-router";
import { useMenuItems } from "../utils/useMenuItems";
export const Welcome = () => {
  const menuItems = useMenuItems();
  return (
    <>
      <div className="flex justify-center h-screen w-screen items-center">
        <div>
          <h1 className="text-7xl">Welcome to Suzune.dev</h1>
          <div className="flex justify-center">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block mt-4 text-blue-white hover:underline p-2"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
