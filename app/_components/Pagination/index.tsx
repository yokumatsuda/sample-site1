// app\_components\Pagination\index.tsx
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Link from "next/link";

type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default function Pagination({
  totalCount,
  current = 1,
  basePath = "/news",
}: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    (_, i) => i + 1,
  );

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
              <Link href={`${basePath}/p/${p}`} className={itemClass}>
                {p}
              </Link>
            ) : (
              <span
                className={`${itemClass} ${currentClass}`}
                aria-current="page"
              >
                {p}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
