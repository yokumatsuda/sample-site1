// app\_components\Header\index.tsx
import Image from "next/image";
import Link from "next/link";
import Menu from "../Menu";

export default function Header() {
  return (
    <header
      className="absolute z-[1000] flex w-full items-center justify-between  bg-white/90 px-6 pt-4 pb-2 
    shadow-sm backdrop-blur max-sm:px-4 max-sm:pt-6"
    >
      <Link href="/" className="flex">
        <Image
          src="/YWD-LOGO-removebg.png"
          alt="YWD"
          className="h-6 w-auto"
          width={348}
          height={133}
          priority
        />
      </Link>
      <Menu />
    </header>
  );
}
