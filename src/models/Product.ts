import Category from './Category';
import Request from './Requests';
export default interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  offerPrice: number;
  status: number;
  parcels: number;
  description: string;
  image: string;
  isOffer: number;
  created_at: string;
  updated_at: string;
  categories: Category[];
}

export interface ProductsRequest extends Request {
  data: Product[];
}
