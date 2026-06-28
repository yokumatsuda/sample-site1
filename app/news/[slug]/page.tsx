// app\news\[slug]\page.tsx
import { notFound } from "next/navigation";
import { getNewsDetail, getNewsList } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const { contents } = await getNewsList({
    fields: ["id"],
    limit: 100,
  });

  return contents.map((news) => ({
    slug: news.id,
  }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const data = await getNewsDetail(slug).catch(() => notFound());

  return (
    <>
      <Article data={data} />
      <div className="mt-20 flex justify-end border-t border-[var(--color-border)] pt-10">
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
