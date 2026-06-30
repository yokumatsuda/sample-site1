// app\_components\SearchPagination\index.tsx
import Link from "next/link";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

type Props = {
  totalCount: number;
  current?: number;
  q?: string;
  category?: string;
};

export default function SearchPagination({
  totalCount,
  current = 1,
  q,
  category,
}: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1,
  );

  const buildHref = (page: number) => {
    const params = new URLSearchParams();

    if (q) params.set("q", q);
    if (category) params.set("category", category);
    if (page > 1) params.set("page", String(page));

    const queryString = params.toString();

    return queryString ? `/news/search?${queryString}` : "/news";
  };

  if (pages.length <= 1) {
    return null;
  }

  const itemClass =
    "flex h-9 w-9 items-center justify-center rounded-[var(--border-radius)]";

  const currentClass =
    "bg-[var(--color-button-primary)] text-[var(--color-text-unpainted)]";

  return (
    <nav>
      <ul className="mt-6 flex items-center justify-center p-6">
        {pages.map((p) => (
          <li className="mx-1" key={p}>
            {current !== p ? (
              <Link href={buildHref(p)} className={itemClass}>
                {p}
              </Link>
            ) : (
              <span className={`${itemClass} ${currentClass}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
