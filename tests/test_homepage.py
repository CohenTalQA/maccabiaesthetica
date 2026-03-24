from pages.home_page import HomePage
from pages.about_page import AboutPage
from pages.contact_page import ContactPage


def test_navigation_to_about(page):
    home = HomePage(page)
    about = AboutPage(page)

    home.go_to_about()
    about.verify_loaded()


def test_navigation_to_contact(page):
    home = HomePage(page)
    contact = ContactPage(page)

    home.go_to_contact()
    contact.verify_loaded()


def test_login_to_account(page):
    home = HomePage(page)
