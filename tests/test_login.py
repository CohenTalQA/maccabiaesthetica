from pages.login_page import LoginPage
from pages.home_page import HomePage


def test_login(page, login_data):
	home = HomePage(page)
	home.go_to_login()
	login = LoginPage(page)
	login.insert_login_details(login_data)
	login.submit()
	login.wait_for_otp_and_submit()


