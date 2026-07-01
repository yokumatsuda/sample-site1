// app\news\layout.tsx
import type { Metadata } from "next";
import Hero from "../_components/Hero";
import Sheet from "../_components/Sheet";

export const metadata: Metadata = {
  title: "ニュース",
};

type Props = {
  children: React.ReactNode;
};

export default function NewsLayout({ children }: Props) {
  return (
    <>
      <Hero title="News" sub="ニュース" />
      <Sheet>{children}</Sheet>
    </>
  );
}
