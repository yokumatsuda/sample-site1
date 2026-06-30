// app\news\search\page.tsx
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
