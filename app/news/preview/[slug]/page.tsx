// app\news\preview\[slug]\page.tsx
// これはmicroCMS画面プレビュー用のプログラムです。
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getNewsDetail } from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";

type Props = {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{
    dk?: string;
  }>;
};

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function PreviewPage({ params, searchParams }: Props) {
  const { slug } = await params;
  const { dk } = await searchParams;

  if (!dk) {
    notFound();
  }

  const data = await getNewsDetail(slug, {
    draftKey: dk,
  }).catch(() => notFound());

  return (
    <>
      <Article data={data} />
      <div className="mt-20 flex justify-end border-t border-[var(--color-border)] pt-10">
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
