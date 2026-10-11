import { OrnamentalDivider } from './OrnamentalDivider';

interface SectionHeadingProps {
  scriptTag?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'center' | 'left';
}

export function SectionHeading({
  scriptTag,
  title,
  subtitle,
  className = '',
  align = 'center',
}: SectionHeadingProps) {
  const alignmentClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col mb-10 sm:mb-14 ${alignmentClass} ${className}`}>
      {scriptTag && (
        <span className="font-accent text-2xl sm:text-3xl text-amber-300/85 mb-1 tracking-wide">
          ~ {scriptTag} ~
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-ivory-100 uppercase">
        {title}
      </h2>
      <OrnamentalDivider />
      {subtitle && (
        <p className="max-w-xl text-lavender-300 text-sm sm:text-base font-light leading-relaxed px-4">
          {subtitle}
        </p>
      )}
    </div>
  );
}
