import { productsTypes } from "../../types";

function ProductCard({ product }: { product: productsTypes }) {
  return (
    <>
      <div className="product-card">
        <div className="product-img">
          <img
            src={product.product_img || "#"}
            alt={product.product_name}
            width={100}
            height={100}
          />
        </div>
        <div className="product-name">
          <h2>{product.product_name}</h2>
        </div>
        <div>
          <p>{product.product_description}</p>
        </div>

        <div>
          <p>
            {product.product_rating} {product.product_discount_per}
          </p>
        </div>
        <div>
          <p>
            <span>{product.product_price}</span>{" "}
            <span className="text-warning">{product.sale_price}</span>
          </p>
        </div>
        <div className="">in stock or not</div>
      </div>
    </>
  );
}

export default ProductCard;
