// app\news\page.tsx
import { getNewsList } from "../_libs/microcms";
import NewsList from "../_components/NewsList";
import { NEWS_LIST_LIMIT } from "../constants";
import SearchField from "../_components/SearchField";
import CategoryFilter from "../_components/CategoryFilter";

export default async function Page() {
  const { contents: news } = await getNewsList();
  return (
    <>
      <SearchField />
      <CategoryFilter />
      <NewsList news={news} />
    </>
  );
}
