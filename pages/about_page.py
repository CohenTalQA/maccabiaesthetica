class AboutPage:

    def __init__(self, page):
        self.page = page
        self.header = page.get_by_text("בית / אודות")

    def verify_loaded(self):
        assert "/about" in self.page.url
        assert self.header.is_visible()