// app\_components\SearchField\index.tsx
"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

type Props = {
  category?: string;
};

function SearchFieldComponent({ category }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const q = e.currentTarget.elements.namedItem("q");

    if (!(q instanceof HTMLInputElement)) {
      return;
    }

    const params = new URLSearchParams();
    const keyword = q.value.trim();
    const currentCategory = category ?? searchParams.get("category");

    if (keyword) {
      params.set("q", keyword);
    }

    if (currentCategory) {
      params.set("category", currentCategory);
    }

    const queryString = params.toString();

    router.push(queryString ? `/news/search?${queryString}` : "/news");
  };
  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <label className="flex w-full max-w-full items-center gap-3 rounded-[4px] border border-[#e6e6e6] px-4 py-3 focus-within:border-[#b3b3b3]">
        <Image
          src="/search.svg"
          alt="検索"
          width={16}
          height={16}
          loading="eager"
        />
        <input
          type="text"
          name="q"
          defaultValue={searchParams.get("q") ?? undefined}
          placeholder="キーワードを入力"
          className="block box-border w-full appearance-none border border-transparent bg-transparent p-0 outline-none [-webkit-tap-highlight-color:transparent]"
        />
      </label>
    </form>
  );
}

export default function SearchField({ category }: Props) {
  return (
    <Suspense>
      <SearchFieldComponent category={category} />
    </Suspense>
  );
}
