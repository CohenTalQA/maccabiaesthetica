import { Page } from "@playwright/test";

export async function closePopupIfExists(page: Page): Promise<void> {
  const popup = page.locator("#modal-intro-content");
  const closeButton = page.getByRole("button", { name: "סגירה" });

  try {
    await popup.first().waitFor({ state: "visible", timeout: 3000 });

    if ((await closeButton.count()) > 0) {
      await closeButton.first().click();
    }
  } catch {
    // popup not found, continue
  }
}
