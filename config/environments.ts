export interface LoginData {
  birthDate: string;
  idNumber: string;
  verificationCode: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}


export interface EnvironmentConfig {
  baseUrl: string;
  login: LoginData;
}

const ENVIRONMENTS: Record<string, EnvironmentConfig> = {
  test: {
    baseUrl: "https://dev.maccabiaesthetica.co.il/",
    login: {
      birthDate: "17/11/1988",
      idNumber: "200430833",
      verificationCode: "616616",
      firstName: "טל",
      lastName: "כהן",
      phoneNumber: "0526740745",
    },
  },
  prod: {
    baseUrl: "https://www.maccabiaesthetica.co.il/",
    login: {
      birthDate: "17/11/1988",
      idNumber: "200430833",
      verificationCode: "616616",
      firstName: "טל",
      lastName: "כהן",
      phoneNumber: "0526740745",
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
