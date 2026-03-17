class HomePage:

    def __init__(self, page, base_url):
        self.page = page
        self.base_url = base_url

    def open(self):
        self.page.goto(self.base_url)

    def click_contact(self):
        self.page.locator("text=צור קשר").click()