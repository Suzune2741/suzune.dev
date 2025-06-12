interface ActivityProps {
  date: string;
  title: string;
}
export default function Activity() {
  const activities: ActivityProps[] = [
    {
      date: "2023/10/14~10/15",
      title:
        "高専プロコンに参加. 発表を担当し特別賞/トヨタシステムズ賞を受賞しました.",
    },
    {
      date: "2023/11/9",
      title: "RubyWorldConfarenceに初参加.",
    },
    {
      date: "2023/11/26",
      title: "ICPCに出場. ",
    },
    { date: "2024/1/6", title: "第1回Matz葉がにロボコンの大会運営として参加." },
    {
      date: "2024/2/17",
      title:
        "松江オープンソースビジネスプランコンテストに参加. 奨励賞を受賞しました.",
    },
    { date: "2024/12/5~12/6", title: "RubyWorldConfarenceに参加." },
    {
      date: "2025/1/12",
      title: "第2回Matz葉がにロボコンの大会運営として参加.",
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
}
