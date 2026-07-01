// app\layout.tsx
import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
// import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sample-site1-woad.vercel.app"),
  verification: {
    google: "rW9tRWfPprDcUQ6MM5i5CZ9wyXlWthyziR1bqJp98w8",
  },
  title: {
    template: "%s | Yoku Web Design",
    default: "Yoku Web Design",
  },
  description:
    "Yoku Web Designは、Next.js、TypeScript、microCMSを活用したWeb制作・Webアプリ開発のポートフォリオサイトです。",
  openGraph: {
    siteName: "Yoku Web Design",
    title: "Yoku Web Design",
    description:
      "Next.js、TypeScript、microCMSを活用したWeb制作・Webアプリ開発のポートフォリオサイトです。",
    images: [
      {
        url: "/ogp.png",
        width: 1200,
        height: 630,
        alt: "Yoku Web Design",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-T5WZGBWLV7" />
      {/* <GoogleTagManager gtmId="GTM-xxxxxxx" /> */}
    </html>
  );
}
