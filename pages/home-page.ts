import { Page } from "@playwright/test";
import { closePopupIfExists } from "../utils/popup-handler";
import { BasePage } from "./base-page";
import { LoginData } from "../config/environments";

export class HomePage extends BasePage {
  private readonly aboutLink;
  private readonly contactLink;
  private readonly loginButton;

  constructor(page: Page) {
    super(page);
    this.aboutLink = page.getByRole("link", { name: "אודות" });
    this.contactLink = page.getByRole("link", { name: "צור קשר" });
    this.loginButton = page.getByRole("button", { name: "התחבר/י" });
  }

  async navigate(): Promise<void> {
    await super.navigate('/');
    await closePopupIfExists(this.page);
  }

  async goToAbout(): Promise<void> {
    await this.aboutLink.click();
  }

  async goToContact(): Promise<void> {
    await this.contactLink.click();
  }

  async goToLogin(): Promise<void> {
    await this.loginButton.click();
  }
  // await page.getByRole('link', { name: 'הי, טל' }).click();
  // ${name: '}
async goToProfile(): Promise<void> {
  await this.page.getByRole("link", { name: /היי/ }).click();
}
}
