//統一できるかも
interface nazotokiProp {
  date: string;
  title: string;
}
interface productProp {
  title: string;
  link: {
    href: string;
    text: string;
  }[];
  intoroduction: string;
  image?: React.ReactNode;
}
const GalleryList = ({ datas }: { datas: productProp[] }) => {
  return (
    <ul>
      {datas.map((data) => (
        <li key={data.title} className="my-2">
          <div className="rounded bg-[#2d3543] px-3.5 py-1 text-[#f8ffff] dark:text-black  dark:bg-gray-200">
            <p className="text-lg lg:text-xl">{data.title}</p>
            <div className="ml-2">
              {data.intoroduction}
              <br />
              Link:&nbsp;
              {data.link.map((link) => (
                <span key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-blue-700 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.text}
                  </a>
                  &nbsp;
                </span>
              ))}
            </div>
            {data.image && (
              <div className="mt-2 flex justify-center-safe">{data.image}</div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default function Gallery() {
  const nazotoki: nazotokiProp[] = [
    { date: "2024/06/30", title: "監獄アルバトロスからの脱出" },
    { date: "2025/05/31", title: "謎のタワーマンションからの脱出" },
  ];
  const products: productProp[] = [
    {
      title: "ポートフォリオ",
      link: [
        {
          href: "https://github.com/Suzune2741/suzune.net",
          text: "GitHub",
        },
      ],
      intoroduction: "このサイト.react, typescript, tailwindcssで作成",
      image: (
        <img
          src="/home_image.png"
          alt="ポートフォリオ"
          className="max-w-64 max-h-64 rounded-lg shadow-lg mb-3"
        />
      ),
    },
  ];
  const others: productProp[] = [
    {
      title: "WashBoard",
      link: [
        {
          href: "https://github.com/mct-joken/WashBoard",
          text: "GitHub",
        },
      ],
      intoroduction: "2023年度の高専プロコンで開発",
    },
    {
      title: "kcmsx",
      link: [
        {
          href: "https://github.com/poporonnet/kcmsx",
          text: "GitHub",
        },
      ],
      intoroduction: "Matz葉がにロボコンの大会運営補助システム",
    },
    {
      title: "kaniwriter",
      link: [
        {
          href: "https://github.com/poporonnet/kaniwriter",
          text: "GitHub",
        },
        {
          href: "https://ceres.epi.it.matsue-ct.ac.jp/writer/?id=undefined",
          text: "サイト",
        },
      ],
      intoroduction: "mruby/c ブラウザ用書き込みツール",
    },
  ];
  return (
    <div className="space-y-3">
      <div className="mb-10 text-center text-gray-900 text-4xl md:text-5xl lg:text-6xl dark:text-white">
        Gallery
      </div>
      <div className="border-b-2 border-grey-300 dark:border-gray-700">
        <h2 className="text-xl md:text-2xl">謎解き/リアル脱出ゲーム</h2>
        <ul>
          {nazotoki.map((item) => (
            <div key={item.title}>
              <li key={item.title + item.date}>
                {item.date}:{item.title}
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl">制作物</h2>
        <GalleryList datas={products} />
      </div>
      <div>
        <h2 className="text-2xl my-2">その他</h2>
        <GalleryList datas={others} />
      </div>
    </div>
  );
}
