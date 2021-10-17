import { inspect } from 'util';

export class BaseService {

  errorHandler(error: any): void {
    if (error.response) {
      fail(`Request failed. Status: ${error.response.status} - ${error.response.statusText}\n` +
        `Error: ${inspect(error.response.data)}`);
    } else {
      fail(`Request timeout. Error: ${error}`);
    }
  }

}
