// 1.development
// 2.uat --> testing if it fails it will send to development.
// 3.qa
//4. prod --> final url we get if all success
// prod means  i think production

export const BASE_PROD_URL = 'https://fakestoreapi.com';
export const BASE_QA_URL = 'https://fakestoreapi.com/Qa';
export const BASE_UAT_URL = 'https://fakestoreapi.com/uat';
export const BASE_DEV_URL = 'https://fakestoreapi.com/dev';

export const endPoints = {
  products: '/products',
  categories: '/products/categories',
};
