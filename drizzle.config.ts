import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config(); // Ye line zaroor add karein taaki .env load ho sake

export default defineConfig({
  // Path ko array mein dein aur verify karein ke 'schema' folder ka naam sahi hai
  schema: "./src/db/schema/app.ts", 
  out: "./drizzle",
  dialect: "postgresql",
const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error("DATABASE_URL environment variable is required");
}

export default defineConfig({
  schema: "./src/db/schema/app.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: databaseUrl,
  },
});
});