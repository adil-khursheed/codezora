import type { NextConfig } from "next";

import { withPayload } from "@payloadcms/next/withPayload";

import "./src/env";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  transpilePackages: ["three"],
};

export default withPayload(nextConfig);
