import { Page } from "@playwright/test";
import { closePopupIfExists } from "../utils/popup-handler";
import { BasePage } from "./base-page";

export class HomePage extends BasePage {
  private readonly aboutLink;
  private readonly contactLink;

  constructor(page: Page) {
    super(page);
    this.aboutLink = page.getByRole("link", { name: "אודות" });
    this.contactLink = page.getByRole("link", { name: "צור קשר" });
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
    await this.page.getByRole("button", { name: "התחבר/י" }).click();
  }
}
