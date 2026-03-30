import { Page } from "@playwright/test";
import { closePopupIfExists } from "../utils/popup-handler";
import { BasePage } from "./base-page";

export class HomePage extends BasePage {
  private readonly aboutLink = this.page.getByRole("link", { name: "אודות" });
  private readonly contactLink = this.page.getByRole("link", { name: "צור קשר" });
  private readonly loginButton = this.page.getByRole("button", { name: "התחבר/י" });
  private readonly profileLink = this.page.getByRole("link", { name: /הי/ });

  async navigate(): Promise<void> {
    await super.navigate("/");
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

  async goToCart(): Promise<void> {
    await this.page.getByRole("link", { name: "עגלת קניות" }).click();
  }

  async goToProfile(): Promise<void> {
    await this.profileLink.click();
  }
}
