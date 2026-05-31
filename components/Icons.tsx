import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const DownloadIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3v12" />
    <path d="m7 11 5 5 5-5" />
    <path d="M5 21h14" />
  </svg>
);

export const AndroidIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M6 18V11a6 6 0 0 1 12 0v7" />
    <path d="M4 18h16" />
    <path d="M9 22v-2" />
    <path d="M15 22v-2" />
    <path d="m6 6-1.5-2" />
    <path d="m18 6 1.5-2" />
    <circle cx="9.5" cy="11" r=".6" fill="currentColor" />
    <circle cx="14.5" cy="11" r=".6" fill="currentColor" />
  </svg>
);

export const SparkleIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3v4" />
    <path d="M12 17v4" />
    <path d="M3 12h4" />
    <path d="M17 12h4" />
    <path d="M5.6 5.6 8 8" />
    <path d="m16 16 2.4 2.4" />
    <path d="M18.4 5.6 16 8" />
    <path d="M8 16l-2.4 2.4" />
  </svg>
);

export const ScaleIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="4" y="3" width="16" height="18" rx="3" />
    <path d="M9 8h6" />
    <path d="M12 8v-1" />
  </svg>
);

export const HeartIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A3.5 3.5 0 0 0 18.5 5c-1.74 0-3 .5-4.5 2.5C12.5 5.5 11.24 5 9.5 5A3.5 3.5 0 0 0 6 8.5c0 2.29 1.51 4.04 3 5.5l5 5z" />
  </svg>
);

export const PlayIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="m10 9 5 3-5 3z" fill="currentColor" />
  </svg>
);

export const StepsIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M6 16c-1.5 0-2.5-1-2.5-3S4 8.5 6 8.5 8 10 8 12s-.5 4-2 4z" />
    <path d="M6 16v3a1.5 1.5 0 0 0 3 0v-2" />
    <path d="M16 13c-1.5 0-2.5-1-2.5-3S15 7 17 7s2 1.5 2 3.5-.5 2.5-3 2.5z" />
    <path d="M16 13v3a1.5 1.5 0 0 0 3 0v-2" />
  </svg>
);

export const MoonIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />
  </svg>
);

export const BookIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 5a2 2 0 0 1 2-2h11a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6a2 2 0 0 0-2 2z" />
    <path d="M4 19a2 2 0 0 1 2-2h12" />
  </svg>
);

export const ShieldIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const HomeIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m3 11 9-7 9 7" />
    <path d="M5 10v10h14V10" />
  </svg>
);

export const TargetIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const UserIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

export const ClockIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const TrendIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M21 7v5h-5" />
  </svg>
);

export const ArrowRightIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);
