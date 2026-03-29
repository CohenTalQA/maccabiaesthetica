import { Page, Locator, expect } from "@playwright/test";
import { LoginData } from "../config/environments";
import { BasePage } from "./base-page";


export class LoginPage extends BasePage {
  private readonly birthDateInput = this.page.getByRole("textbox", { name: "תאריך לידה" });
  private readonly idInput = this.page.getByRole("textbox", { name: "תעודת זהות" });
  private readonly submitButton = this.page.getByRole("button", { name: "קבלו קוד אימות" });
  private readonly otpInput = this.page.getByRole("textbox", { name: "קוד קוד קוד" });
  private readonly loginButton = this.page.getByRole("button", { name: "התחברות" });

  async verifyLoaded(): Promise<void> {
    await expect(this.birthDateInput).toBeVisible();
  }

  async fillCredentials(loginData: LoginData): Promise<void> {
    await this.birthDateInput.click();
    await this.birthDateInput.press('Escape');
    await this.birthDateInput.fill(loginData.birthDate);
    await this.idInput.fill(loginData.idNumber);
    // timeout to ensure the inputs are registered before proceeding
    await this.page.waitForTimeout(500);
  }

  async requestOtp(): Promise<void> {
    await this.submitButton.click();
    // add timeout to wait for OTP input to appear
    await this.page.waitForTimeout(1000);
    await expect(this.otpInput).toBeVisible();
  }

  async waitForOtpValue(): Promise<void> {
    await expect(this.otpInput).toHaveValue(/^\d{6}$/, {
      timeout: 200000,
    });
  }

  async submitLogin(): Promise<void> {
    await this.loginButton.click();

  }
  async verifyLoginSuccess(loginData: LoginData): Promise<void> {
    await expect(this.page.getByRole('link', { name: /הי,/ })).toBeVisible();
  }
  async login(loginData: LoginData): Promise<void> {
    await this.fillCredentials(loginData);
    await this.requestOtp();
    await this.waitForOtpValue();
    await this.submitLogin();
    

  }
}
