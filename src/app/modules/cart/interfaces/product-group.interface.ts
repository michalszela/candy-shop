import { Product } from '../../products/interfaces/product.interface';

interface ProductGroup {
  product: Product;
  quantity: number;
  totalPrice: number;
}

export type ProductGroups = ProductGroup[];
