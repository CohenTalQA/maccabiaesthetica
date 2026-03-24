import { Page } from "@playwright/test";

export class HomePage {
  private readonly page: Page;
  private readonly aboutLink;
  private readonly contactLink;

  constructor(page: Page) {
    this.page = page;
    this.aboutLink = page.getByRole("link", { name: "אודות" });
    this.contactLink = page.getByRole("link", { name: "צור קשר" });
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
