import os
from copy import deepcopy


ENV = os.getenv("ENV", "test")

ENVIRONMENTS = {
    "test": {
        "base_url": "https://dev.maccabiaesthetica.co.il/",
        "login": {
            "birth_date": "17/11/1988",
            "id_number": "200430833",
            "verification_code": "616616",
            "first_name": "טל",
            "last_name": "כהן",
            "phone_number": "0526740745",
        },
    },
    "prod": {
        "base_url": "https://www.maccabiaesthetica.co.il/",
        "login": {
            "birth_date": "17/11/1988",
            "id_number": "200430833",
            "verification_code": "616616",
            "first_name": "טל",
            "last_name": "כהן",
            "phone_number": "0526740745",
        },
    },
}

BASE_URLS = {
    env_name: env_config["base_url"]
    for env_name, env_config in ENVIRONMENTS.items()
}

LOGIN_DATA = {
    env_name: deepcopy(env_config["login"])
    for env_name, env_config in ENVIRONMENTS.items()
}


def get_environment_config(env_name=None):
    selected_env = env_name or ENV
    if selected_env not in ENVIRONMENTS:
        available = ", ".join(ENVIRONMENTS.keys())
        raise ValueError(f"Unknown environment '{selected_env}'. Available environments: {available}")

    return deepcopy(ENVIRONMENTS[selected_env])


BASE_URL = get_environment_config()["base_url"]
