import { CategoriesDetails } from '@integration/types/categoreis/categories-details';
import { CategoriesServices } from '@services/categories/categories-services';
import { HttpResponseExpectations } from '@services/http-response-expectations';
import categoreisDetailsAC from '@ac/categories/categories-details.json';

describe('TM Sandbox Categories service', () => {

  const categoriesServices = new CategoriesServices();
  const httpAssertions = new HttpResponseExpectations();

  let categoriesDetails: CategoriesDetails;
  const defaultCategoreyId = 6327;

  test('search categories should match the AC', async () => {
    await categoriesServices.getCategoriesDetailsById({
      categoreyId: defaultCategoreyId,
      query: {
        catalogue: false
      }
    })
      .then(async response => {
        httpAssertions.httpResponseStatusOK(response);
        categoriesDetails = response.data;

        expect(categoriesDetails.Name).toBe(categoreisDetailsAC['Name']);
        console.log(`Category Name: ========== ${categoriesDetails.Name} ==========`);
        expect(categoriesDetails.CanRelist).toBe(categoreisDetailsAC['CanRelist']);
        console.log(`Category CanRelist: ========== ${categoriesDetails.CanRelist} ==========`);
        categoriesDetails.Promotions.forEach((promotion) => {
          if (promotion.Name === 'Gallery') {
            console.log(`Promotion Description: ========== ${promotion.Description} ==========`);
            expect(promotion.Name).toBe(categoreisDetailsAC['Promotions'][0]['Name']);
            expect(promotion.Description).toContain(categoreisDetailsAC['Promotions'][0]['Description']);
          }
        });
      }

      )
      .catch(error => categoriesServices.errorHandler(error));
  });

});
