export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-4 md:py-5">
      <div className="inline-block w-auto text-start justify-start">
        {children}
      </div>
    </section>
  );
}
