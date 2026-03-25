# Maccabi Aesthetica - Automation Tests

Automation framework for web testing using **Playwright Test + TypeScript**.
Designed to support **multiple environments (test / prod)** and run in **CI/CD (AWS CodeBuild & CodePipeline)**.

---

## 🚀 Tech Stack

* TypeScript
* Playwright Test
* Page Object Model (POM)

---

## 📁 Project Structure

```
.
├── tests/                # Test cases (.spec.ts)
├── pages/                # Page Object classes (BasePage, HomePage, LoginPage, AboutPage, ContactPage)
├── fixtures/             # Custom test fixtures (loginData, page objects)
├── config/               # Environment configuration (environments.ts)
├── utils/                # Utility functions (popup-handler)
├── screenshots/          # Test screenshots
├── playwright.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Setup

### 1. Clone the repository

```bash
git clone <repo-url>
cd maccabiaesthetica
```

### 2. Install dependencies

```bash
npm install
npx playwright install
```

---

## ▶️ Running Tests

### Run tests in test environment

```bash
npm run test:test
```

### Run tests in prod environment

```bash
npm run test:prod
```

### Run in headed mode (with browser UI)

```bash
npm run test:prod:headed
npm run test:test:headed
```

### Run specific test (e.g. login only)

```bash
npm run test:login:prod
npm run test:login:test
```

### Run a specific test file

```bash
npx playwright test tests/test-homepage.spec.ts
```

### Debug mode

```bash
npm run test:prod:debug
```

### Open last HTML report

```bash
npm run report
```

---

## 🌍 Environments

The framework supports multiple environments, configured in `config/environments.ts`:

* **test** → https://dev.maccabiaesthetica.co.il/
* **prod** → https://www.maccabiaesthetica.co.il/

Each environment provides its own test data (login details, personal info) defined in `config/environments.ts`.

The active project/environment is selected via the `--project` flag in `playwright.config.ts`.

### Available custom fixtures

* `envName` → the selected environment/project name
* `loginData` → login details (`LoginData`) for the current environment
* `homePage` → `HomePage` page object instance
* `loginPage` → `LoginPage` page object instance
* `aboutPage` → `AboutPage` page object instance
* `contactPage` → `ContactPage` page object instance

Example usage in a test:

```typescript
import { test, expect } from "../fixtures";

test("login_account_success", async ({ homePage, loginData, loginPage }) => {
  await homePage.navigate();
  await homePage.goToLogin();
  await loginPage.login(loginData);
});
```

### Set environment via env variable (PowerShell)

```powershell
$env:ENV="test"
npx playwright test
```

```powershell
$env:ENV="prod"
npx playwright test
```

---

## 🧪 Example Test

```typescript
import { test, expect } from "../fixtures";

test("navigation_to_about", async ({ homePage, aboutPage }) => {
  await homePage.goToAbout();
  await aboutPage.verifyLoaded();
});
```

---

## 🧱 Page Object Example

```typescript
import { Page } from "@playwright/test";
import { BasePage } from "./base-page";

export class HomePage extends BasePage {
  private readonly aboutLink = this.page.getByRole("link", { name: "אודות" });
  private readonly contactLink = this.page.getByRole("link", { name: "צור קשר" });

  async navigate(): Promise<void> {
    await super.navigate("/");
  }

  async goToAbout(): Promise<void> {
    await this.aboutLink.click();
  }

  async goToContact(): Promise<void> {
    await this.contactLink.click();
  }
}
```

---

## 🛠️ Playwright Codegen (Inspector)

Generate locators and actions:

```bash
npm run codegen
```

---

## ☁️ CI/CD (AWS - Planned)

The project is designed to run in AWS:

* CodeBuild
* CodePipeline

Example build steps:

```bash
npm ci
npx playwright install --with-deps
npx playwright test --project=prod
```

---

## 🧠 Best Practices

* Do not hardcode URLs — use `baseURL` from the project config
* Use Page Object Model for maintainability
* Keep tests independent
* Use custom fixtures for shared setup (page objects, login data)
* Use environment variables for flexibility

---

## 📌 TODO

* [ ] Add smoke test suite
* [ ] Add reporting (Allure / HTML)
* [ ] Integrate with AWS CodePipeline
* [ ] Add screenshots on failure
* [ ] Add parallel execution

---

## 👨‍💻 Author

Tal - QA Automation @ MaccabiDent
