// app\news\category\[id]\page.tsx
import {
  getCategoryDetail,
  getCategoryList,
  getNewsList,
} from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import NewsList from "@/app/_components/NewsList";
import { NEWS_LIST_LIMIT } from "@/app/constants";
import CategoryFilter from "@/app/_components/CategoryFilter";
import SearchField from "@/app/_components/SearchField";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

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

  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    filters: `category[equals]${category.id}`,
  });

  return (
    <>
      <SearchField category={category.id} />
      <CategoryFilter current={category.id} />
      <NewsList news={news} />
    </>
  );
}
