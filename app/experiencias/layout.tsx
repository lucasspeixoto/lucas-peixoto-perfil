export default function XpsLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="w-full items-start py-2">
      {children}
    </section>
  );
}
