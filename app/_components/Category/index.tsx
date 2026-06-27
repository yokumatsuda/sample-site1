//app\_components\Category\index.tsx
import type { Category as CategoryType } from "@/app/_libs/microcms";

type Props = {
  category: CategoryType;
};

export default function Category({ category }: Props) {
  return (
    <span className="whitespace-nowrap rounded-[var(--border-radius)] bg-[var(--color-bg-sub)] px-3 py-1 text-base">
      {category.name}
    </span>
  );
}
