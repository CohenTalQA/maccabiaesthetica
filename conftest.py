import os
import pytest
from playwright.sync_api import sync_playwright
from config.environments import BASE_URLS


def pytest_addoption(parser):
    parser.addoption(
        "--env",
        action="store",
        default="test",
        choices=["test", "prod"],
        help="Environment to run tests against: test or prod",
    )


@pytest.fixture(scope="session")
def base_url(request):
    env = request.config.getoption("--env")
    return BASE_URLS[env]


@pytest.fixture(scope="session")
def playwright_instance():
    with sync_playwright() as p:
        yield p


@pytest.fixture(scope="session")
def browser(playwright_instance):
    headless = os.getenv("HEADLESS", "true").lower() == "true"
    browser = playwright_instance.chromium.launch(
        headless=False,
        slow_mo=0
    )
    yield browser
    browser.close()


@pytest.fixture
def context(browser):
    context = browser.new_context(
        viewport={"width": 1920, "height": 1080},
        ignore_https_errors=True
    )
    yield context
    context.close()


@pytest.fixture
def page(context):
    page = context.new_page()
    page.set_default_timeout(10000)
    yield page

@pytest.hookimpl(hookwrapper=True)
def pytest_runtest_makereport(item):
    outcome = yield
    rep = outcome.get_result()

    if rep.when == "call" and rep.failed:
        page = item.funcargs.get("page")
        if page:
            page.screenshot(path=f"screenshots/{item.name}.png")