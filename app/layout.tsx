import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const SITE_URL = "https://letscrackit.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Let's Crack It — Your AI Health & Fitness Companion",
  description:
    "Track your BMI & body fat, get personalised AI health tips, follow guided yoga, strength & cardio workouts, and sync your daily steps, heart rate and sleep. Made for Healthy India ❤️",
  keywords: [
    "Lets Crack It",
    "health app",
    "fitness app",
    "BMI tracker",
    "AI health tips",
    "workout videos",
    "yoga",
    "strength training",
    "Healthy India",
  ],
  authors: [{ name: "Let's Crack It" }],
  openGraph: {
    title: "Let's Crack It — Your AI Health & Fitness Companion",
    description:
      "BMI tracking, AI health tips, guided workouts and daily health stats. Made for Healthy India ❤️",
    url: SITE_URL,
    siteName: "Let's Crack It",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Let's Crack It — Your AI Health & Fitness Companion",
    description:
      "BMI tracking, AI health tips, guided workouts and daily health stats. Made for Healthy India ❤️",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#060d1c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
