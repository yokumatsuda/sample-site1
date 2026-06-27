// app\_components\Date\index.tsx
import Image from "next/image";
import { formatDate } from "@/app/_libs/utils";

type Props = {
  date: string;
};

export default function Date({ date }: Props) {
  return (
    <span className="my-[0.8rem] flex items-center gap-2 text-base">
      <Image src="/clock.svg" alt="" width={16} height={16} loading="eager" />
      {formatDate(date)}
    </span>
  );
}
