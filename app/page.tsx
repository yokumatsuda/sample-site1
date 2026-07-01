// app/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import { getNewsList } from "./_libs/microcms";
import { TOP_NEWS_LIMIT } from "./_constants";
import NewsList from "./_components/NewsList";
import ButtonLink from "./_components/ButtonLink";

export const metadata: Metadata = {
  title: "トップページ",
  description:
    "Yoku Web Designのトップページです。Next.js、TypeScript、microCMSを活用したWeb制作・Webアプリ開発の情報を掲載しています。",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Yoku Web Design",
    description:
      "Next.js、TypeScript、microCMSを活用したWeb制作・Webアプリ開発のポートフォリオサイトです。",
    url: "/",
    type: "website",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "Yoku Web Design",
      },
    ],
  },
};

export const revalidate = 1;

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });

  return (
    <>
      <section className="relative flex items-center justify-center overflow-hidden bg-black/50 py-[200px] text-white max-sm:px-4 max-sm:py-[120px]">
        <div>
          <h1 className="mb-4 text-center text-[3rem] font-bold leading-[1.45] max-sm:text-left max-sm:text-[1.8rem] max-sm:leading-[1.6]">
            企業の価値を伝える、
            <br className="hidden max-sm:block" />
            信頼性の高い
            <span className="whitespace-nowrap">Webサイト制作</span>
          </h1>

          <p className="text-center max-sm:text-left max-sm:text-[0.9rem]">
            Next.jsとmicroCMSを活用し、更新性・表示速度・運用のしやすさを兼ね備えたコーポレートサイトを構築します。
          </p>
        </div>
        <Image
          className="absolute top-0 right-0 z-[-1] h-[600px] w-full object-cover object-right max-sm:w-auto"
          src="/top_pageimg14.jpg"
          alt=""
          width={4000}
          height={1200}
          // preloadかloading="eager"のいずれかを使う
          preload
          // loading="eager"
          // sizes="100vw"
          sizes="(max-width: 1200px) 100vw, 1200px"
        />
      </section>

      <section
        className="relative mx-auto -mt-10 w-[840px] rounded-[var(--border-radius)] bg-white px-10 py-6 shadow-lg max-[1000px]:w-[calc(100%-160px)] max-sm:w-[calc(100%-32px)]
      max-sm:px-6 max-sm:py-4"
      >
        <h2 className="text-2xl">News</h2>
        <NewsList news={data.contents} />
        <div className="mt-6 flex justify-end">
          <ButtonLink href="/news">もっと見る</ButtonLink>
        </div>
      </section>
    </>
  );
}
