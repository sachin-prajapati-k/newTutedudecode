import ProductCard from "./ProductCard";
import Products from "../../Data/data";
function ProductList() {
  return (
    <div className="product-list">
      {Products.map((p: any) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}

export default ProductList;
