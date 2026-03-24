import { defineConfig } from "@playwright/test";
import ENVIRONMENTS from "./config/environments";


export default defineConfig({
  testDir: "./tests",

  projects: Object.entries(ENVIRONMENTS).map(([name, env]) => ({
    name,
    use: {
      baseURL: env.base_url,
      envName: name,
      headless: process.env.HEADLESS === "false",
    },
  })),
});
