// app\_components\NewsList\index.tsx
import Image from "next/image";
import Link from "next/link";
import { News } from "@/app/_libs/microcms";
import Date from "../Date";
import Category from "../Category";

type Props = {
  news: News[];
};

export default function NewsList({ news }: Props) {
  if (news.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul>
      {news.map((article) => (
        <li
          key={article.id}
          className="border-b border-[var(--color-border-light)] last:border-b-0"
        >
          <Link
            href={`/news/${article.id}`}
            className="flex items-start gap-10 py-6 max-sm:block max-sm:py-4"
          >
            {article.thumbnail ? (
              <Image
                src={article.thumbnail.url}
                alt=""
                className="h-auto w-[200px] rounded-[var(--border-radius)] max-sm:hidden"
                width={article.thumbnail.width}
                height={article.thumbnail.height}
              />
            ) : (
              <Image
                className="h-auto w-[200px] rounded-[var(--border-radius)] max-sm:hidden"
                src="/ogp.png"
                alt="No Image"
                width={1200}
                height={630}
              />
            )}

            <dl>
              <dt className="mb-2 text-[1.1rem] font-bold max-sm:mb-[0.4rem] max-sm:text-base">
                {article.title}
              </dt>
              <dd className="flex items-center gap-4">
                <Category category={article.category} />
                <Date date={article.publishedAt ?? article.createdAt} />
              </dd>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
