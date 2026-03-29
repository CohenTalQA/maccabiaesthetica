import { defineConfig } from "@playwright/test";
import ENVIRONMENTS from "./config/environments";


export default defineConfig({
  testDir: "./tests",

  projects: Object.entries(ENVIRONMENTS).map(([name, env]) => ({
    name,
    use: {
      baseURL: env.baseUrl,
      envName: name,
      headless: process.env.HEADLESS === "false",
    },
  })),
});
