interface ActivityProps {
  date: string;
  title: string;
}
export const Activity = () => {
  const activities: ActivityProps[] = [
    {
      date: "2022/2/19",
      title:
        "松江オープンソースビジネスプランコンテスト2022に参加. 奨励賞,IIJ賞を受賞.",
    },
    {
      date: "2023/10/14~10/15",
      title: "高専プロコンに参加. 発表を担当し特別賞/トヨタシステムズ賞を受賞.",
    },
    {
      date: "2023/11/9",
      title: "RubyWorldConferenceに初参加.",
    },
    {
      date: "2023/11/26",
      title: "ICPCに出場.",
    },
    { date: "2024/1/6", title: "第1回Matz葉がにロボコンの大会運営として参加." },
    {
      date: "2024/2/17",
      title:
        "松江オープンソースビジネスプランコンテスト2024に参加. 奨励賞,IIJ賞を受賞.",
    },
    { date: "2024/12/5~12/6", title: "RubyWorldConferenceに参加." },
    {
      date: "2025/1/12",
      title: "第2回Matz葉がにロボコンの大会運営として参加.",
    },
    {
      date: "2025/10/12",
      title: "第3回Matz葉がにロボコンの大会運営として参加.",
    },
    {
      date: "2025/11/2",
      title: "第2回どじょうすくいロボコンの大会運営として参加.",
    },
  ];
  return (
    <>
      <h2 className="my-3.5 text-3xl text-center font-semibold text-gray-900 dark:text-white">
        主な活動
      </h2>
      <ul className="list-disc pl-5">
        {activities.map((activity, index) => (
          <li key={index} className="mb-1">
            <strong>{activity.date}:</strong> {activity.title}
          </li>
        ))}
      </ul>
    </>
  );
};
