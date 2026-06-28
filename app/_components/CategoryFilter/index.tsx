// app\_components\CategoryFilter\index.tsx
import Link from "next/link";
import styles from "./index.module.css";

const categories = [
  { id: "corporate", name: "コーポレートサイト" },
  { id: "recruit", name: "採用サイト" },
  { id: "landing-page", name: "ランディングページ" },
  { id: "service", name: "サービス" },
  { id: "web-app", name: "Webアプリ" },
  { id: "ui-design", name: "UIデザイン" },
  { id: "medical", name: "医療" },
  { id: "ec", name: "ECサイト" },
  { id: "portfolio", name: "ポートフォリオ" },
];

type Props = {
  current?: string;
  q?: string;
};

export default function CategoryFilter({ current, q }: Props) {
  const buildHref = (category?: string) => {
    if (!q) {
      return category ? `/news/category/${category}` : "/news";
    }

    const params = new URLSearchParams();
    params.set("q", q);

    if (category) {
      params.set("category", category);
    }

    return `/news/search?${params.toString()}`;
  };

  return (
    <nav className={styles.container} aria-label="ニュースカテゴリー">
      <Link
        href={buildHref()}
        className={`${styles.button} ${!current ? styles.current : ""}`}
      >
        すべて
      </Link>

      {categories.map((category) => (
        <Link
          key={category.id}
          href={buildHref(category.id)}
          className={`${styles.button} ${
            current === category.id ? styles.current : ""
          }`}
        >
          {category.name}
        </Link>
      ))}
    </nav>
  );
}
