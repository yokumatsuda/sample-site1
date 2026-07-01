// app\news\[slug]\page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getNewsDetail, getNewsList } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const data = await getNewsDetail(slug).catch(() => notFound());

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: `/news/${data.id}`,
    },
    openGraph: {
      title: `${data.title} | Yoku Web Design`,
      description: data.description,
      url: `/news/${data.id}`,
      type: "article",
      publishedTime: data.publishedAt ?? data.createdAt,
      modifiedTime: data.revisedAt ?? data.updatedAt,
      images: data.thumbnail
        ? [
            {
              url: data.thumbnail.url,
              width: data.thumbnail.width,
              height: data.thumbnail.height,
              alt: data.title,
            },
          ]
        : [
            {
              url: "/ogp.png",
              width: 1200,
              height: 630,
              alt: "Yoku Web Design",
            },
          ],
    },
  };
}

export const revalidate = 1;

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
