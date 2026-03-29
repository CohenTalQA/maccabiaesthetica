import { Page } from "@playwright/test";

export async function closePopupIfExists(page: Page): Promise<void> {
  const popup = page.locator("#modal-intro-content");
  const closeButton = page.getByRole("button", { name: "סגירה" });

  try {
    await popup.waitFor({ state: "visible", timeout: 3000 });
    await closeButton.click();
  } catch {
    // popup לא הופיע - ממשיכים
  }
}