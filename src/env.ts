import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.url("Invalid database URL"),
    PAYLOAD_SECRET: z.string().min(1, "Payload secret is required"),
  },
  client: {
    NEXT_PUBLIC_SITE_NAME: z.string().min(1, "Site name is required"),
  },
  experimental__runtimeEnv: {
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
  },
});
