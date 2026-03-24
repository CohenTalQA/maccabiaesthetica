class ContactPage:

    def __init__(self, page):
        self.page = page
        self.header = page.get_by_role("heading", name="צרו קשר")

    def verify_loaded(self):
        assert self.header.is_visible()