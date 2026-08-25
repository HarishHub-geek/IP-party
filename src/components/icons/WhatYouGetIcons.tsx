type IconProps = { className?: string };

const common = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function LodgingIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className}>
      <path d="M2 18v-7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v7" />
      <path d="M2 18h20" />
      <path d="M4 11V7a2 2 0 0 1 2-2h5v4" />
      <circle cx="7" cy="12.5" r="1.3" />
    </svg>
  );
}

export function MealsIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className}>
      <path d="M6 2v7a2 2 0 0 0 4 0V2" />
      <path d="M8 9v13" />
      <path d="M17 2c-1.7 0-3 2-3 5s1.3 5 3 5v10" />
    </svg>
  );
}

export function ChildcareIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className}>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      <path d="M9.5 8.2c.6.5 1.4.5 2 0" />
    </svg>
  );
}

export function WorkshopIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className}>
      <rect x="2.5" y="4" width="19" height="12" rx="1.5" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
    </svg>
  );
}

export function PlanningIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className}>
      <rect x="5" y="3.5" width="14" height="17" rx="1.5" />
      <path d="M9 2.5h6a1 1 0 0 1 1 1V5H8V3.5a1 1 0 0 1 1-1Z" />
      <path d="M8.5 11h7M8.5 14.5h7M8.5 18h4" />
    </svg>
  );
}

export function TimerIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l3 2" />
      <path d="M9.5 2h5" />
      <path d="M19 5l1.2-1.2" />
    </svg>
  );
}

export function GroupIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5" />
      <circle cx="17.5" cy="9" r="2.4" />
      <path d="M15.7 13.6c2.6.4 4.6 2.6 4.8 5.4" />
    </svg>
  );
}

export function DemoIcon({ className }: IconProps) {
  return (
    <svg {...common} className={className}>
      <rect x="2.5" y="4" width="19" height="13" rx="1.5" />
      <path d="M9 20h6" />
      <path d="M12 17v3" />
      <path d="M10.2 8.3 14 10.5l-3.8 2.2Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PersonSilhouetteIcon({ className }: IconProps) {
  return (
    <svg width="200" height="160" viewBox="0 0 200 160" className={className} fill="currentColor">
      <circle cx="100" cy="55" r="32" opacity="0.55" />
      <path d="M40 160c0-38.7 26.9-70 60-70s60 31.3 60 70Z" opacity="0.55" />
    </svg>
  );
}
