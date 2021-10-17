import axios, { AxiosResponse } from 'axios';

import { BaseService } from '@base/base-service';
import { CategoriesQueries } from '@type/categoreis/categories-queries';
import { envUrl } from '@integration/config';

export class CategoriesServices extends BaseService {

  // https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false

  getCategoriesDetailsById(options: {
    categoreyId: number, query: CategoriesQueries
  }): Promise<AxiosResponse<any>> {
    return axios.get(
      `${envUrl.categories}/Categories/${options.categoreyId}/Details.json`,
      { params: options.query }
    );
  }
}
