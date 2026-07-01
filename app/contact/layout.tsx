// app\contact\layout.tsx
import type { Metadata } from "next";
import Hero from "../_components/Hero";
import Sheet from "../_components/Sheet";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "Web制作、Next.js開発、microCMS構築に関するお問い合わせはこちらから。",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "お問い合わせ | Yoku Web Design",
    description:
      "Web制作、Next.js開発、microCMS構築に関するお問い合わせはこちらから。",
    url: "/contact",
    type: "website",
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="Contact" sub="お問い合わせ" />
      <Sheet>{children}</Sheet>
    </>
  );
}
