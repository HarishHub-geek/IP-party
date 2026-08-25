interface PhotoPlaceholderProps {
  className?: string;
  from: string;
  to: string;
}

/**
 * Stand-in for a Figma-sourced photo. This session couldn't reach figma.com
 * to download the original image bytes (blocked by network egress policy),
 * so sections render a soft gradient in the design's palette here instead.
 * Swap in the real photo by replacing this component's usage with an <img>.
 */
export default function PhotoPlaceholder({ className, from, to }: PhotoPlaceholderProps) {
  return (
    <div
      className={className}
      style={{
        background: `linear-gradient(135deg, ${from}, ${to})`,
      }}
    />
  );
}
