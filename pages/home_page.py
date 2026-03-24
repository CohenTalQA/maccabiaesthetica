class HomePage:

    def __init__(self, page):
        self.page = page

        # Locators
        self.about_link = page.get_by_role("link", name="אודות")
        self.contact_link = page.get_by_role("link", name="צור קשר")

    def go_to_about(self):
        self.about_link.click()

    def go_to_contact(self):
        self.contact_link.click()

    def go_to_login(self):
        self.page.get_by_role("button", name="התחבר/י").click()