// app\_components\Sheet\index.tsx
type Props = {
  children: React.ReactNode;
};

export default function Sheet({ children }: Props) {
  return (
    <div className="relative mx-auto -mt-10 w-[840px] rounded-[8px] bg-white p-20 shadow-lg max-sm:w-[calc(100%_-_32px)] max-sm:px-6 max-sm:py-4">
      {children}
    </div>
  );
}
