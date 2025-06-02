//統一できるかも
interface nazotokiProp {
  date: string;
  title: string;
  link?: string;
}
interface productProp {
  title: string;
  link?: string;
}
export default function Gallery() {
  const nazotoki: nazotokiProp[] = [
    { date: "2024/06/30", title: "監獄アルバトロスからの脱出" },
    { date: "2025/05/31", title: "謎のタワーマンションからの脱出" },
  ];
  const products: productProp[] = [
    { title: "ポートフォリオ" },
  ];
  return (
    <div>
      <div className="mb-10 text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
        Gallery
      </div>
      <div>
        <h2 className="text-2xl my-2">謎解き/リアル脱出ゲーム</h2>
        <ul>
          {nazotoki.map((item) => (
            <div>
              <li>
                {item.date}:{item.title}
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-2xl my-2">制作物</h2>
        <ul>
          <ul>
            {products.map((product) => (
              <li>{product.title}</li>
            ))}
          </ul>
        </ul>
      </div>
    </div>
  );
}
