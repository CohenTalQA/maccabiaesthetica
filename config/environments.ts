export interface LoginData {
  birth_date: string;
  id_number: string;
  verification_code: string;
  first_name: string;
  last_name: string;
  phone_number: string;
}

export interface EnvironmentConfig {
  base_url: string;
  login: LoginData;
}

const ENVIRONMENTS: Record<string, EnvironmentConfig> = {
  test: {
    base_url: "https://dev.maccabiaesthetica.co.il/",
    login: {
      birth_date: "17/11/1988",
      id_number: "200430833",
      verification_code: "616616",
      first_name: "טל",
      last_name: "כהן",
      phone_number: "0526740745",
    },
  },
  prod: {
    base_url: "https://www.maccabiaesthetica.co.il/",
    login: {
      birth_date: "17/11/1988",
      id_number: "200430833",
      verification_code: "616616",
      first_name: "טל",
      last_name: "כהן",
      phone_number: "0526740745",
    },
  },
};

export function getEnvironmentConfig(envName?: string): EnvironmentConfig {
  const selectedEnv = envName || process.env.ENV || "test";
  const config = ENVIRONMENTS[selectedEnv];

  if (!config) {
    const available = Object.keys(ENVIRONMENTS).join(", ");
    throw new Error(`Unknown environment '${selectedEnv}'. Available environments: ${available}`);
  }

  return structuredClone(config);
}

export default ENVIRONMENTS;
