// app\news\search\page.tsx
import type { Metadata } from "next";
import { getNewsList } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import NewsList from "@/app/_components/NewsList";
import SearchField from "@/app/_components/SearchField";
import CategoryFilter from "@/app/_components/CategoryFilter";
import SearchPagination from "@/app/_components/SearchPagination";

type Props = {
  searchParams: Promise<{
    q?: string;
    category?: string;
    page?: string;
  }>;
};

export const dynamic = "force-dynamic";

export async function generateMetadata({
  searchParams,
}: Props): Promise<Metadata> {
  const { q, category } = await searchParams;

  const title = q ? `「${q}」の検索結果` : "ニュース検索";

  return {
    title,
    description:
      "Yoku Web Designのニュース記事をキーワードやカテゴリで検索できます。",
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: `${title} | Yoku Web Design`,
      description:
        "Yoku Web Designのニュース記事をキーワードやカテゴリで検索できます。",
      url: category
        ? `/news/search?q=${encodeURIComponent(q ?? "")}&category=${encodeURIComponent(category)}`
        : q
          ? `/news/search?q=${encodeURIComponent(q)}`
          : "/news/search",
      type: "website",
    },
  };
}

export default async function Page({ searchParams }: Props) {
  const { q, category, page } = await searchParams;
  const currentPage = Number(page ?? "1");

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (currentPage - 1),
    q,
    filters: category ? `category[equals]${category}` : undefined,
  });

  return (
    <>
      <SearchField category={category} />
      <CategoryFilter current={category} q={q} />
      <NewsList news={news} />
      <SearchPagination
        totalCount={totalCount}
        current={currentPage}
        q={q}
        category={category}
      />
    </>
  );
}
