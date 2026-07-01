// app\about\layout.tsx
import type { Metadata } from "next";
import Hero from "../_components/Hero";
import Sheet from "../_components/Sheet";

export const metadata: Metadata = {
  title: "私たちについて",
  description:
    "Yoku Web Designの運営者情報、制作体制、Web制作への考え方を紹介します。",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "私たちについて | Yoku Web Design",
    description:
      "Yoku Web Designの運営者情報、制作体制、Web制作への考え方を紹介します。",
    url: "/about",
    type: "website",
  },
};

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <>
      <Hero title="About" sub="私たちについて" />
      <Sheet>{children}</Sheet>
    </>
  );
}
