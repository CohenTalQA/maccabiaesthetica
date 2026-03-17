from pages.home_page import HomePage


def test_open_homepage(page, base_url):
    page.goto(base_url, wait_until="domcontentloaded")
    assert page.title() != ""