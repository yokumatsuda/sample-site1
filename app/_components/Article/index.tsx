// app\_components\Article\index.tsx
import Link from "next/link";
import Image from "next/image";
import sanitizeHtml from "sanitize-html";
import type { News } from "@/app/_libs/microcms";
import Date from "../Date";
import Category from "../Category";
import styles from "./index.module.css";

type Props = {
  data: News;
};

export default function Article({ data }: Props) {
  const sanitizedContent = sanitizeHtml(data.content, {
    allowedTags: [
      "h2",
      "h3",
      "h4",
      "p",
      "br",
      "ul",
      "ol",
      "li",
      "strong",
      "em",
      "a",
      "blockquote",
      "img",
      "table",
      "thead",
      "tbody",
      "tr",
      "th",
      "td",
    ],
    allowedAttributes: {
      a: ["href", "target", "rel"],
      img: ["src", "alt", "width", "height"],
    },
    allowedSchemes: ["http", "https", "mailto"],
    allowedSchemesByTag: {
      img: ["https"],
    },
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", {
        rel: "noopener noreferrer",
      }),
    },
  });

  return (
    <main>
      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.description}>{data.description}</p>

      <div className={styles.meta}>
        <Link
          href={`/news/category/${data.category.id}`}
          className={styles.categoryLink}
        >
          <Category category={data.category} />
        </Link>

        <Date date={data.publishedAt || data.createdAt} />
      </div>

      {data.thumbnail && (
        <Image
          src={data.thumbnail.url}
          alt=""
          className={styles.thumbnail}
          width={data.thumbnail.width}
          height={data.thumbnail.height}
        />
      )}
      <div
        className={styles.content}
        // dangerouslySetInnerHTML={{ __html: data.content }}
        dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      ></div>
    </main>
  );
}
