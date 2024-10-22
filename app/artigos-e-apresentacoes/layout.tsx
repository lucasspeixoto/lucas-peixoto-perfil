export default function ArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full items-start py-4 md:py-5">
      {children}
    </section>
  );
}
