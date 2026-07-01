// app\news\category\[id]\page.tsx
import type { Metadata } from "next";
import {
  getCategoryDetail,
  getCategoryList,
  getNewsList,
} from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import NewsList from "@/app/_components/NewsList";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import CategoryFilter from "@/app/_components/CategoryFilter";
import SearchField from "@/app/_components/SearchField";
import Pagination from "@/app/_components/Pagination";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export const revalidate = 1;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const category = await getCategoryDetail(id).catch(() => notFound());

  return {
    title: `${category.name}の記事一覧`,
    description: `${category.name}に関するニュース・制作事例の一覧です。`,
    alternates: {
      canonical: `/news/category/${category.id}`,
    },
    openGraph: {
      title: `${category.name}の記事一覧 | Yoku Web Design`,
      description: `${category.name}に関するニュース・制作事例の一覧です。`,
      url: `/news/category/${category.id}`,
      type: "website",
      images: [
        {
          url: "/ogp.png",
          width: 1200,
          height: 630,
          alt: `${category.name}の記事一覧 | Yoku Web Design`,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const { contents } = await getCategoryList({
    fields: ["id"],
    limit: 100,
  });

  return contents.map((category) => ({
    id: category.id,
  }));
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  const category = await getCategoryDetail(id).catch(() => notFound());

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });

  return (
    <>
      <SearchField category={category.id} />
      <CategoryFilter current={category.id} />
      <NewsList news={news} />
      <Pagination
        totalCount={totalCount}
        basePath={`/news/category/${category.id}`}
      />
    </>
  );
}
