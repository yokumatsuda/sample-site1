// app\about\layout.tsx
import Hero from "../_components/Hero";
import Sheet from "../_components/Sheet";

export const metadata = {
  title: "私たちについて",
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
