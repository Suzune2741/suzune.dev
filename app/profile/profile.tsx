import { Activity } from "~/components/activity";
import { LinkComponent } from "~/components/link";

export function Profile() {
  const date = new Date();
  const age = date.getFullYear() - 2005;
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
      <ul className="list-disc pl-5">
        <li>
          <strong>Name:</strong> Suzune
        </li>
        <li>
          <strong>Age:</strong> {age}
        </li>
        <li>
          <strong>Location:</strong> 島根県松江市(Matsue/Shimane)
        </li>
        <li>
          <strong>belong to:</strong> NITMC,Poporon Network
        </li>
        <li>
          <strong>Hobbies:</strong> プログラミング, 音楽鑑賞, ゲーム,
          スポーツ観戦
        </li>
      </ul>
      <Activity />
      <LinkComponent />
    </div>
  );
}
