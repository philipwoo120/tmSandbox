import { EnvUrls } from '@type/environments/env-urls';
import processEnv from 'dotenv';

const getAPIVersion = (): string => {
  if (process.env.API_VERSION) {
    return process.env.API_VERSION;
  } else {
    if (processEnv.config()) {
      if (process.env.API_VERSION) {
        return process.env.API_VERSION;
      }
      else {
        throw new Error('No API_VERSION was set for the tests. Add environment variable API_VERSION or use the .env');
      }
    } else {
      throw new Error('No API_VERSION was set for the tests. Add environment variable API_VERSION or use the .env');
    }
  }
};

const getEnvUrls = (): EnvUrls => {
  let baseUrl: string;
  const apiVersion = getAPIVersion();

  switch (apiVersion) {
    case 'v1':
      baseUrl = 'api.tmsandbox.co.nz';
      break;
    default:
      baseUrl = 'api.tmsandbox.co.nz';
      break;
  }

  return {
    categories: `https://${baseUrl}/${apiVersion}`,
  };
};

export const envUrl: EnvUrls = getEnvUrls();
