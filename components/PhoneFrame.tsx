import type { ReactNode } from "react";

interface PhoneFrameProps {
  children: ReactNode;
  /** Hide the inner scrollbar and disable scrolling for static screens. */
  className?: string;
  /** Extra classes for the floating glow behind the phone. */
  glowClassName?: string;
}

/**
 * Reusable phone shell used to frame every CSS-recreated app screen.
 * Pure markup — no image assets — so screens stay sharp on any display.
 */
export default function PhoneFrame({
  children,
  className = "",
  glowClassName = "bg-gold/10",
}: PhoneFrameProps) {
  return (
    <div className="relative mx-auto w-[290px] select-none">
      <div className="relative rounded-[2.8rem] border border-white/10 bg-navy-950 p-2.5 shadow-phone ring-1 ring-white/5">
        {/* Notch */}
        <div className="absolute left-1/2 top-2.5 z-20 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-navy-950" />
        <div
          className={`relative h-[600px] overflow-hidden rounded-[2.2rem] bg-navy-900 ${className}`}
        >
          {children}
        </div>
      </div>
      {/* Floating glow behind phone */}
      <div
        className={`absolute -inset-6 -z-10 rounded-[3rem] blur-3xl ${glowClassName}`}
      />
    </div>
  );
}
