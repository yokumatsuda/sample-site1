import Image from "next/image";
import styles from "./page.module.css";
import { getNewsList } from "./_libs/microcms";
import { TOP_NEWS_LIMIT } from "./constants";
import NewsList from "./_components/NewsList";

export default async function Home() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>
            企業の価値を伝える、信頼性の高いWebサイト制作
          </h1>
          <p className={styles.description}>
            Next.jsとmicroCMSを活用し、更新性・表示速度・運用のしやすさを兼ね備えたコーポレートサイトを構築します。
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt="test画像1"
          width={4000}
          height={1200}
          // preloadかloading="eager"のいずれかを使う
          preload
          // loading="eager"
          // sizes="100vw"
          sizes="(max-width: 1200px) 100vw, 1200px"
        ></Image>
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
      </section>
    </>
  );
}
