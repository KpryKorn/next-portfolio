interface HeroTitleProps {
  title: string;
  subtitle: string;
}

export default function HeroTitle({ title, subtitle }: HeroTitleProps) {
  return (
    <div className="pt-6">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="text-gray-light">{subtitle}</p>
    </div>
  );
}
