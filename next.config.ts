import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {},
  productionBrowserSourceMaps: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        source: "/(.*)\\.(svg|png|jpg|jpeg|webp|gif|ico)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default withSentryConfig(nextConfig, {
  org: process.env.GLITCHTIP_ORG,
  project: process.env.GLITCHTIP_PROJECT,
  // OTIMIZAÇÃO DE TEMPO: Não processa node_modules (Build rápido)
  widenClientFileUpload: false,
  authToken: process.env.GLITCHTIP_AUTH_TOKEN,
  sentryUrl: process.env.GLITCHTIP_URL,
  sourcemaps: {
    // OTIMIZAÇÃO DE ESPAÇO: Limpa os mapas do container após o upload
    deleteSourcemapsAfterUpload: true,
  },
});
