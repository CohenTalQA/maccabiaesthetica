import { Page, Locator, expect } from "@playwright/test";
import { LoginData } from "../config/environments";

export class LoginPage {
  private readonly page: Page;
  private readonly birthDateInput: Locator;
  private readonly idInput: Locator;
  private readonly submitButton: Locator;
  private readonly otpInput: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.birthDateInput = page.getByRole("textbox", { name: "תאריך לידה" });
    this.idInput = page.getByRole("textbox", { name: "תעודת זהות" });
    this.submitButton = page.getByRole("button", { name: "קבלו קוד אימות" });
    this.otpInput = page.getByRole("textbox", { name: "קוד קוד קוד" });
    this.loginButton = page.getByRole("button", { name: "התחברות" });
  }

  async fillCredentials(loginData: LoginData): Promise<void> {
    await this.birthDateInput.click();
    await this.birthDateInput.press('Escape');
    await this.birthDateInput.fill(loginData.birth_date);
    await this.idInput.fill(loginData.id_number);
    // timeout to ensure the inputs are registered before proceeding
  }

  async requestOtp(): Promise<void> {
    await this.submitButton.click();
    await expect(this.otpInput).toBeVisible();
  }

async waitForOtpValue(): Promise<void> {
  await expect(this.otpInput).toHaveValue(/^\d{6}$/, {
    timeout: 120000,
  });
}

  async submitLogin(): Promise<void> {
    await this.loginButton.click();

  }

   async verifyLoginSuccess(loginData: LoginData): Promise<void> {
    const userProfileLink = this.page.getByRole('link', { name: `הי, ${loginData.first_name}` });
    await expect(userProfileLink).toBeVisible();
    console.log(`Login successful for user: ${loginData.first_name} ${loginData.last_name}`);
    await this.page.pause();
  }


}