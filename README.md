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
├── tests/              # Test cases (.spec.ts)
├── pages/              # Page Object classes
├── fixtures/           # Custom test fixtures
├── config/             # Environment configuration
├── utils/              # Utility functions
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

---

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

### Run all tests

```bash
npm test
```

---

### Run specific test

```bash
npx playwright test tests/test-homepage.spec.ts
```

---

## 🌍 Environments

The framework supports multiple environments:

* **test** → https://dev.maccabiaesthetica.co.il/
* **prod** → https://www.maccabiaesthetica.co.il/

Each environment can also provide its own test data under `config/environments.py`, for example login details and personal data.

### Available fixtures from configuration

* `env_name` → the selected environment name
* `env_config` → the full environment configuration dictionary
* `base_url` → `env_config["base_url"]`
* `login_data` → `env_config["login"]`

Example:

```python
def test_login_data_is_loaded(login_data):
    assert login_data["id_number"]
```

### Set environment (PowerShell)

```powershell
$env:ENV="test"
pytest -s
```

```powershell
$env:ENV="prod"
pytest -s
```

---

## 🧪 Example Test

```python
def test_open_homepage(page):
    page.goto(BASE_URL)
    assert page.title() != ""
```

---

## 🧱 Page Object Example

```python
class HomePage:

    def __init__(self, page):
        self.page = page
        self.contact_button = page.get_by_text("צור קשר")

    def open(self):
        self.page.goto(BASE_URL)

    def click_contact(self):
        self.contact_button.click()
```

---

## 🛠️ Playwright Codegen (Inspector)

Generate locators and actions:

```bash
playwright codegen https://dev.maccabiaesthetica.co.il/
```

---

## ☁️ CI/CD (AWS - Planned)

The project is designed to run in AWS:

* CodeBuild
* CodePipeline

Example build steps:

```bash
pip install -r requirements.txt
playwright install --with-deps
pytest
```

---

## 🧠 Best Practices

* Do not hardcode URLs - use `BASE_URL`
* Use Page Object Model for maintainability
* Keep tests independent
* Use environment variables for flexibility

---

## 📌 TODO

* [ ] Add smoke test suite
* [ ] Add reporting (pytest-html / Allure)
* [ ] Integrate with AWS CodePipeline
* [ ] Add screenshots on failure
* [ ] Add parallel execution

---

## 👨‍💻 Author

Tal - QA Automation @ MaccabiDent
