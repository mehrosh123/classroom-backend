import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "../db/index.js";
import * as schema from "../db/schema/auth.js";

export const auth = betterAuth({
  secret: process.env.AUTH_SECRET!,
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:8000",
  trustedOrigins: [process.env.FRONT_END_URL!],
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "student",
        input: false,
      },
      imageCldPublicId: {
        type: "string",
        required: false,
      },
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg",
    schema,
  }),
  emailAndPassword: {
    enabled: true,
  },
});