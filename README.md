# Maccabi Aesthetica - Automation Tests

Automation framework for web testing using **Playwright + Pytest**.
Designed to support **multiple environments (test / prod)** and run in **CI/CD (AWS CodeBuild & CodePipeline)**.

---

## 🚀 Tech Stack

* Python 3.12
* Playwright
* Pytest
* Page Object Model (POM)

---

## 📁 Project Structure

```
.
├── tests/              # Test cases
├── pages/              # Page Object classes
├── config/             # Environment configuration
├── conftest.py         # Fixtures and setup
├── requirements.txt
├── pytest.ini
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

### 2. Create virtual environment

```bash
python -m venv venv
```

### Activate (PowerShell):

```powershell
 ```

---

### 3. Install dependencies

```bash
pip install -r requirements.txt
playwright install
```

---

## ▶️ Running Tests


## Run tests in test environment

```bash

pytest --env=test  

## 

```bash

pytest --env=prod
```

### Run all tests

```bash
pytest -s
```

---

### Run specific test

```bash
pytest tests/test_homepage.py -s
```

---

## 🌍 Environments

The framework supports multiple environments:

* **test** → https://dev.maccabiaesthetica.co.il/
* **prod** → https://www.maccabiaesthetica.co.il/

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
