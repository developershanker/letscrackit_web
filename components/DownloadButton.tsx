"use client";

import { useCallback, useState } from "react";
import { track } from "@vercel/analytics/react";
import { APK_URL, APK_FILE_NAME, APP_VERSION } from "@/lib/config";
import { DownloadIcon, AndroidIcon } from "./Icons";

type Variant = "primary" | "outline";

interface DownloadButtonProps {
  variant?: Variant;
  className?: string;
  label?: string;
  /**
   * Where on the page this button lives (e.g. "nav", "hero", "footer").
   * Surfaced as an identifier in the Vercel Analytics dashboard so we can
   * see which CTA drives the most downloads.
   */
  location?: string;
}

export default function DownloadButton({
  variant = "primary",
  className = "",
  label = "Download for Android",
  location = "unknown",
}: DownloadButtonProps) {
  const [started, setStarted] = useState(false);

  const handleDownload = useCallback(() => {
    // Fire a custom Vercel Analytics event so APK downloads show up in the
    // dashboard, tagged with which CTA was used, its label and the version.
    track("apk_download", {
      location,
      label,
      version: APP_VERSION,
      platform: "android",
    });

    // Programmatically trigger the APK download on click.
    const link = document.createElement("a");
    link.href = APK_URL;
    link.setAttribute("download", APK_FILE_NAME);
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setStarted(true);
    window.setTimeout(() => setStarted(false), 4000);
  }, [location, label]);

  const baseClasses =
    "group inline-flex items-center justify-center gap-3 rounded-2xl px-7 py-4 text-base font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950";

  const variantClasses =
    variant === "primary"
      ? "bg-gold text-navy-950 shadow-glow hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-[0_0_70px_-8px_rgba(245,197,24,0.55)]"
      : "border border-white/15 bg-white/5 text-white backdrop-blur hover:border-gold/50 hover:bg-white/10";

  return (
    <button
      type="button"
      onClick={handleDownload}
      aria-label={`${label} — APK download`}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {started ? (
        <DownloadIcon className="h-5 w-5 animate-bounce" />
      ) : (
        <AndroidIcon className="h-5 w-5 transition-transform group-hover:scale-110" />
      )}
      <span>{started ? "Starting download…" : label}</span>
    </button>
  );
}
