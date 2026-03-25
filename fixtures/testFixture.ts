import { test as base, expect } from "@playwright/test";
import { getEnvironmentConfig, LoginData } from "../config/environments";
import { LoginPage } from "../pages/login-page";
import { HomePage } from "../pages/home-page";
import { AboutPage } from "../pages/about-page";
import { ContactPage } from "../pages/contact-page";
import { closePopupIfExists } from "../utils/popup-handler";

type CustomFixtures = {
  loginData: LoginData;
  loginPage: LoginPage;
  homePage: HomePage;
  aboutPage: AboutPage;
  contactPage: ContactPage;
  envName: string;
};

export const test = base.extend<CustomFixtures>({
  envName: async ({}, use, testInfo) => {
    await use(testInfo.project.name);
  },

  loginData: async ({ envName }, use) => {
    const config = getEnvironmentConfig(envName);
    await use(config.login);
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  aboutPage: async ({ page }, use) => {
    await use(new AboutPage(page));
  },

  contactPage: async ({ page }, use) => {
    await use(new ContactPage(page));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
});

export { expect };