class LoginPage:

    def __init__(self, page):
        self.page = page

        self.birth_date_input = page.get_by_role("textbox", name="תאריך לידה")
        self.id_input = page.get_by_role("textbox", name="תעודת זהות")
        self.submit_button = page.get_by_role("button", name="קבלו קוד אימות")

        self.otp_input = page.get_by_role("textbox", name="קוד קוד קוד")
        self.login_button = page.get_by_role("button", name="התחברות")

    def insert_login_details(self, login_data):
        self.birth_date_input.click()
        self.page.keyboard.press("Escape")
        self.birth_date_input.fill(login_data["birth_date"])
        self.page.keyboard.press("Tab")
        self.id_input.fill(login_data["id_number"])

    def submit(self):
        self.submit_button.click()

    def wait_for_otp_and_submit(self):
        loading = self.page.get_by_role("status", name="Loading")

        print("ממתין ל-loading...")

        # אם הוא מופיע - נחכה שייעלם
        try:
            loading.wait_for(state="visible", timeout=5000)
            loading.wait_for(state="hidden", timeout=30000)
        except:
            print("לא הופיע loading, ממשיך...")

        print("ממתין לשדה OTP...")

        self.otp_input.wait_for(state="visible", timeout=120000)

        otp_element = self.otp_input.element_handle()

        print("ממתין להזנת 6 ספרות...")

        self.page.wait_for_function(
            """(el) => /^[0-9]{6}$/.test(el.value)""",
            arg=otp_element,
            timeout=120000
        )

        print("לוחץ על התחברות")

        self.login_button.click()