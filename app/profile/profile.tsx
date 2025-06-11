import { FaGithub, FaTwitter } from "react-icons/fa";
import { ImBlog } from "react-icons/im";
interface profileLink {
  title: string;
  displayName: string;
  href: string;
  icon?: React.ReactNode;
}

export function Profile() {
  const date = new Date();
  const age = date.getFullYear() - 2005;
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
      title: "Hatena Blog",
      displayName: "suzune2741.hatenablog.com",
      href: "https://suzune2741.hatenablog.com",
    },
  ];
  return (
    <div>
      <h2 className="mb-10 text-center text-gray-900 text-3xl md:text-5xl lg:text-6xl dark:text-white">
        Hi, I'm Suzune!
      </h2>
      <img
        className="mx-auto mb-10 h-64 w-64 rounded-full border-4 border-gray-300 dark:border-gray-700"
        src="/profile.jpg"
      />
      <h2 className="my-3.5 text-3xl text-center font-semibold text-gray-900 dark:text-white">
        Profile
      </h2>
      <ul className="list-disc pl-5 ">
        <li>
          <strong>Name:</strong> Suzune
        </li>
        <li>
          <strong>Age:</strong> {age}
        </li>
        <li>
          <strong>Location:</strong> Shimane/Japan
        </li>
        <li>
          <strong>belong to:</strong> NITMC,Poporon Network
        </li>
        <li>
          <strong>Hobbies:</strong> Programming, Gaming, Anime
        </li>
      </ul>
      <h2 className="my-3.5 text-3xl text-center font-semibold text-gray-900 dark:text-white">
        Links
      </h2>
      <ul>
        {myLinks.map((link) => (
          <li key={link.title} className="flex mb-2">
            {link.title} {link.icon && link.icon}:
            <a
              href={link.href}
              className="text-white-500 hover:underline hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.displayName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
