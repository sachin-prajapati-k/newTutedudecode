export interface Product {
  product_name: string;
  product_price: number;
  sale_price: number;
  product_description: string;
  product_rating: number;
  product_discount_per: string;
  in_stock: number;
  product_img: string;
}

const Products: Product[] = [
  {
    product_name: "laptop",
    product_price: 250,
    sale_price: 200,
    product_description: "loremslkdjf sldfjskldj gslkdjfkls f",
    product_rating: 3.5,
    product_discount_per: "1.5",
    in_stock: 0,
    product_img:
      "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTExL3JtNTUxLTExLW1hY2Jvb2stMTFhLnBuZw.png",
  },
];

export default Products;

