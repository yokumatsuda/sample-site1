// app\news\category\[id]\p\[current]\page.tsx
import { notFound } from "next/navigation";
import {
  getCategoryDetail,
  getCategoryList,
  getNewsList,
} from "@/app/_libs/microcms";
import NewsList from "@/app/_components/NewsList";
import Pagination from "@/app/_components/Pagination";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import CategoryFilter from "@/app/_components/CategoryFilter";
import SearchField from "@/app/_components/SearchField";

type Props = {
  params: Promise<{
    current: string;
    id: string;
  }>;
};

export const revalidate = 1;

export async function generateStaticParams() {
  const { contents: categories } = await getCategoryList({
    fields: ["id"],
    limit: 100,
  });

  const staticParams: { id: string; current: string }[] = [];

  for (const category of categories) {
    const { totalCount } = await getNewsList({
      limit: 1,
      fields: ["id"],
      filters: `category[equals]${category.id}`,
    });

    const pageCount = Math.ceil(totalCount / NEWS_LIST_LIMIT);

    for (let page = 2; page <= pageCount; page++) {
      staticParams.push({
        id: category.id,
        current: String(page),
      });
    }
  }

  return staticParams;
}

export default async function Page({ params }: Props) {
  const { current } = await params;
  const { id } = await params;

  const currentPage = parseInt(current, 10);

  if (Number.isNaN(currentPage) || currentPage < 1) {
    notFound();
  }

  const category = await getCategoryDetail(id).catch(() => notFound());

  const { contents: news, totalCount } = await getNewsList({
    filters: `category[equals]${category.id}`,
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (currentPage - 1),
  });

  if (news.length === 0) {
    notFound();
  }

  return (
    <>
      <SearchField category={category.id} />
      <CategoryFilter current={category.id} />
      <NewsList news={news} />
      <Pagination
        totalCount={totalCount}
        current={currentPage}
        basePath={`/news/category/${category.id}`}
      />
    </>
  );
}
