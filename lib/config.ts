/**
 * Central place for app-level constants.
 *
 * APK download:
 *   When your AWS (S3 / CloudFront) bucket is ready, set the public URL of the
 *   .apk file here, or — preferably — provide it via the environment variable
 *   NEXT_PUBLIC_APK_URL (e.g. in .env.local or your hosting dashboard).
 *
 *   Example:
 *     NEXT_PUBLIC_APK_URL=https://downloads.letscrackit.app/letscrackit-v2.11.apk
 */
export const APK_URL =
  process.env.NEXT_PUBLIC_APK_URL ??
  "https://letscrackit-files.s3.ap-south-1.amazonaws.com/letscrackit-release.apk";

export const APP_VERSION = process.env.NEXT_PUBLIC_APP_VERSION ?? "2.11 (13)";

/** File name suggested to the browser when the APK is saved. */
export const APK_FILE_NAME = "letscrackit.apk";

/** Approximate download size shown in the UI (optional, cosmetic). */
export const APK_SIZE = process.env.NEXT_PUBLIC_APK_SIZE ?? "~24 MB";

export const APP_NAME = "Let's Crack It";
export const APP_TAGLINE = "Made for Healthy India";
