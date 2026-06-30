// app\news\page.tsx
import { getNewsList } from "../_libs/microcms";
import NewsList from "../_components/NewsList";
import { NEWS_LIST_LIMIT } from "../_constants";
import SearchField from "../_components/SearchField";
import CategoryFilter from "../_components/CategoryFilter";
import Pagination from "../_components/Pagination";

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
