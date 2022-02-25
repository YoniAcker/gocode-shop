import Product from "../Product/Product";
import "./Products.css";
const Products = (list) => (
  <section className="products">
    {list.map((product) => (
      <h1 key={product.id}>
      <Product 
        title={product.title}
        price={product.price}
        description={product.description}
        category={product.category}
        rate={product.rating.rate}
        count={product.rating.count}
      />
      </h1>
    ))}
  </section>
);
export default Products;
