# APK downloads

This folder is the **local fallback** location for the app's APK.

The download button on the site points at the URL defined by
`NEXT_PUBLIC_APK_URL` (see `.env.example`). When that variable is **not** set,
it falls back to `/downloads/letscrackit-latest.apk`.

## Recommended: host the APK on AWS

Large binaries shouldn't live in git (`*.apk` is gitignored). Instead:

1. Upload the APK to your S3 bucket (optionally behind CloudFront).
2. Make the object publicly readable.
3. Set the URL in your hosting environment:

   ```
   NEXT_PUBLIC_APK_URL=https://your-bucket.s3.amazonaws.com/letscrackit-latest.apk
   ```

## Local fallback (optional)

For quick local testing you can drop a file named `letscrackit-latest.apk`
right here. It will be served at `/downloads/letscrackit-latest.apk` but will
**not** be committed (see `.gitignore`).
