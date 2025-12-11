interface Product {
  product_name: string;
  product_price: number;
  sale_price: number;
  product_description: string;
  product_rating: number;
  product_discount_per: string;
  in_stock: number;
  product_img: string;
}

declare const Products: Product[];

export default Products;

