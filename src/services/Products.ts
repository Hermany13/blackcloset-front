import api from './api';

// Interfaces
import Product, { ProductsRequest } from 'models/Product';

export const getLatestProducts = async (): Promise<Product[]> => {
  const { data: response } = await api.get<ProductsRequest>(
    `/api/v1/products/latest`,
  );

  return response.data;
};
