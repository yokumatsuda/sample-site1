// app\_components\Footer\index.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-20 bg-[var(--color-bg-sub)] px-6 py-4 text-center text-[0.8rem] text-[var(--color-text-main)]">
      <nav className="mb-4">
        <ul className="flex justify-center gap-10 whitespace-nowrap text-base max-sm:flex-wrap max-sm:gap-y-2 max-sm:gap-x-0">
          <li className="max-sm:w-1/2">
            <Link href="/news">ニュース</Link>
          </li>
          <li className="max-sm:w-1/2">
            <Link href="/about">私たちについて</Link>
          </li>
          <li className="max-sm:w-1/2">
            <Link href="/contact">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
      <p>© YWD. ALL Rights Reserved 2026</p>
    </footer>
  );
}
