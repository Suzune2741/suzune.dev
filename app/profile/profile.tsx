export function Profile() {
  return (
    <div>
      <p className="mb-10 text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Hi, I'm Suzune!
      </p>
      <img
        className="mx-auto mb-10 h-64 w-64 rounded-full border-4 border-gray-300 dark:border-gray-700"
        src="../../profile.jpg"
      />
      <h2 className="my-3 text-lg font-semibold text-gray-900 dark:text-white">
        Profile
      </h2>

      <ul className="list-disc pl-5 ">
        <li>
          <strong>Name:</strong> Suzune
        </li>
        <li>
          <strong>Age:</strong> 20
        </li>
        <li>
          <strong>Location:</strong> Shimane/Japan
        </li>
        <li>
          <strong>Hobbies:</strong> Programming, Gaming, Anime
        </li>
      </ul>
    </div>
  );
}
