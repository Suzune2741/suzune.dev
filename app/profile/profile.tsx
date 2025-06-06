import { FaGithub, FaTwitter} from "react-icons/fa";
import { ImBlog } from "react-icons/im";
interface profileLink {
  title: string;
  userName: string;
  link: string;
  icon: React.ReactNode;
}

export function Profile() {
  const date = new Date();
  const age = date.getFullYear() - 2005;
  const myLinks: profileLink[] = [
    {
      title: "GitHub",
      userName: "@Suzune2741",
      link: "https://github.com/Suzune2741",
      icon: <FaGithub className="icon mx-2" size="1.5rem" />,
    },
    {
      title: "Twitter",
      userName: "@Suzune2741",
      link: "https://twitter.com/Suzune2741",
      icon: <FaTwitter className="icon mx-2" size="1.5rem" />,
    },
    {
      title: "hatena blog",
      userName: "Suzune2741",
      link: "https://suzune2741.hatenablog.com/about",
      icon: <ImBlog className="icon mx-2" size="1.5rem" />,
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
              href={link.link}
              className="text-white-500 hover:underline hover:text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.userName}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
