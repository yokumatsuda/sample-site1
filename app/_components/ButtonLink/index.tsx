// app\_components\ButtonLink\index.tsx
import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export default function ButtonLink({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="block w-full rounded-[var(--border-radius)] bg-[var(--color-button-primary)] bg-[url('/arrow-right.svg')] bg-no-repeat bg-[position:right_20px_center] px-6 py-4 text-[var(--color-text-unpainted)] hover:opacity-90 sm:w-[300px] sm:px-10 sm:py-5"
    >
      {children}
    </Link>
  );
}
