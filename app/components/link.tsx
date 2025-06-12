import { FaGithub, FaTwitter } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
interface profileLink {
  title: string;
  displayName: string;
  href?: string;
  icon?: React.ReactNode;
}
const myLinks: profileLink[] = [
  {
    title: "GitHub",
    displayName: "@Suzune2741",
    href: "https://github.com/Suzune2741",
    icon: <FaGithub className="icon mx-2" size="1.5rem" />,
  },
  {
    title: "Twitter",
    displayName: "@Suzune2741",
    href: "https://twitter.com/Suzune2741",
    icon: <FaTwitter className="icon mx-2" size="1.5rem" />,
  },
  {
    title: "Mail",
    displayName: "suzune2741[at]gmail.com",
    icon: <IoMail className="icon mx-2" size="1.5rem" />,
  },
  {
    title: "Hatena Blog",
    displayName: "suzune2741.hatenablog.com",
    href: "https://suzune2741.hatenablog.com",
  },
];
export const LinkComponent = () => {
  return (
    <>
      <h2 className="my-3.5 text-3xl text-center font-semibold text-gray-900 dark:text-white">
        Links
      </h2>
      <ul>
        {myLinks.map((link) => (
          <li key={link.title} className="flex mb-1">
            {link.title} {link.icon}:
            {link.href ? (
              <a
                href={link.href}
                className="text-white-500 hover:underline hover:text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.displayName}
              </a>
            ) : (
              <>{link.displayName}</>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
