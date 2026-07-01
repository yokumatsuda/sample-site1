// app\_components\Hero\index.tsx
import Image from "next/image";

type Props = {
  title: string;
  sub: string;
};

export default function Hero({ title, sub }: Props) {
  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-black/50 py-[100px] text-white max-sm:pt-[100px] max-sm:pb-[60px]">
      <div>
        <h1 className="mb-4 text-center text-[3rem] font-bold max-sm:text-[2.4rem]">
          {title}
        </h1>

        <p className="mb-10 flex items-center justify-center gap-5 before:block before:h-px before:w-5 before:bg-[var(--color-text-unpainted)] before:content-[''] after:block after:h-px after:w-5 after:bg-[var(--color-text-unpainted)] after:content-['']">
          {sub}
        </p>
      </div>
      <Image
        className="absolute top-0 right-0 z-[-1] h-[600px] w-full object-cover object-right"
        src="/top_pageimg14.jpg"
        alt=""
        width={4000}
        height={1200}
        sizes="100vw"
      />
    </section>
  );
}
