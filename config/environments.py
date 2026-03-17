import os

ENV = os.getenv("ENV", "test")

BASE_URLS = {
    "test": "https://dev.maccabiaesthetica.co.il/",
    "prod": "https://www.maccabiaesthetica.co.il/"
}

BASE_URL = BASE_URLS[ENV]