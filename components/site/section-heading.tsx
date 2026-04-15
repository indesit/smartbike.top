type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <div className={alignment}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[var(--accent-strong)]">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl leading-tight tracking-[-0.04em] text-balance sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[var(--muted-foreground)] md:text-lg">
        {description}
      </p>
    </div>
  );
}
