// app\news\p\[current]\page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import CategoryFilter from "@/app/_components/CategoryFilter";
import SearchField from "@/app/_components/SearchField";

type Props = {
  params: Promise<{
    current: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { current } = await params;

  return {
    title: `ニュース一覧 ${current}ページ目`,
    description: `Yoku Web Designのニュース一覧、${current}ページ目です。`,
    alternates: {
      canonical: `/news/p/${current}`,
    },
    robots: {
      index: false,
      follow: true,
    },
    openGraph: {
      title: `ニュース一覧 ${current}ページ目 | Yoku Web Design`,
      description: `Yoku Web Designのニュース一覧、${current}ページ目です。`,
      url: `/news/p/${current}`,
      type: "website",
    },
  };
}

export const revalidate = 1;

export async function generateStaticParams() {
  const { totalCount } = await getNewsList({
    limit: 1,
    fields: ["id"],
  });

  const pageCount = Math.ceil(totalCount / NEWS_LIST_LIMIT);

  return Array.from({ length: Math.max(pageCount - 1, 0) }, (_, i) => ({
    current: String(i + 2),
  }));
}

export default async function Page({ params }: Props) {
  const { current } = await params;

  const currentPage = parseInt(current, 10);

  if (Number.isNaN(currentPage) || currentPage < 1) {
    notFound();
  }

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (currentPage - 1),
  });

  if (news.length === 0) {
    notFound();
  }

  return (
    <>
      <SearchField />
      <CategoryFilter />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} current={currentPage} />
    </>
  );
}
