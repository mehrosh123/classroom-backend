import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config(); // Ye line zaroor add karein taaki .env load ho sake

export default defineConfig({
  // Path ko array mein dein aur verify karein ke 'schema' folder ka naam sahi hai
  schema: "./src/db/schema/app.ts", 
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});