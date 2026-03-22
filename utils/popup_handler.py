
def close_popup_if_exists(page):
    popup = page.locator("#modal-intro-content")
    close_button = page.get_by_role("button", name="סגירה")

    try:
        popup.first.wait_for(state="visible", timeout=3000)

        if close_button.count() > 0:
            close_button.first.click()

    except:
        pass