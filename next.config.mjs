import { withSentryConfig } from '@sentry/nextjs';

const nextConfig = {
  // Enabling TypeScript support and export option
  output: 'export',
  typescript: {
    // Ignore build errors
    ignoreBuildErrors: true,
  },

};

// Keep the Sentry configuration as it is
export default withSentryConfig(nextConfig, {
  org: "ascension-wave",
  project: "javascript-nextjs",
  silent: !process.env.CI, // Only print logs for uploading source maps in CI
  widenClientFileUpload: true, // Upload larger set of source maps for prettier stack traces
  hideSourceMaps: true, // Hides source maps from generated client bundles
  disableLogger: true, // Automatically tree-shake Sentry logger statements to reduce bundle size
  automaticVercelMonitors: true, // Enable automatic instrumentation of Vercel Cron Monitors
});
