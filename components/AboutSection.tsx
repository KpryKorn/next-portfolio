interface AboutSectionProps {
  title: string;
  children: React.ReactNode;
  index: number;
}

export default function AboutSection({
  title,
  children,
  index,
}: AboutSectionProps) {
  return (
    <div
      className="my-6 md:my-12 pt-6 md:pt-12 flex flex-col gap-16 md:gap-24 animate-in"
      style={{ "--index": index } as React.CSSProperties}
    >
      <article className="flex flex-col md:flex-row gap-2 md:gap-9 pb-6">
        <h2 className="md:w-32 text-gray-light dark:text-gray-dark shrink-0">
          {title}
        </h2>
        <div className="flex flex-col w-full gap-6">{children}</div>
      </article>
    </div>
  );
}
