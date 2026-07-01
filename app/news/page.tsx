// app\news\page.tsx
import type { Metadata } from "next";
import { getNewsList } from "../_libs/microcms";
import NewsList from "../_components/NewsList";
import { NEWS_LIST_LIMIT } from "../_constants";
import SearchField from "../_components/SearchField";
import CategoryFilter from "../_components/CategoryFilter";
import Pagination from "../_components/Pagination";

export const metadata: Metadata = {
  title: "ニュース",
  description:
    "Web制作、Next.js、TypeScript、microCMSに関するニュースや制作情報を掲載しています。",
  alternates: {
    canonical: "/news",
  },
  openGraph: {
    title: "ニュース | Yoku Web Design",
    description:
      "Web制作、Next.js、TypeScript、microCMSに関するニュースや制作情報を掲載しています。",
    url: "/news",
    type: "website",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "ニュース | Yoku Web Design",
      },
    ],
  },
};

export const revalidate = 1;

export default async function Page() {
  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
  });

  return (
    <>
      <SearchField />
      <CategoryFilter />
      <NewsList news={news} />
      <Pagination totalCount={totalCount} />
    </>
  );
}
