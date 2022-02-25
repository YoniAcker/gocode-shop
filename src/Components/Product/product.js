import './Product.css';
const Product = (props) => (
    <div className="product-card">
      <div className="product-image">
        <img src={props.image}/>
      </div>
      <div className="product-info">
        <h5>{props.title}</h5>
        <h6>{props.price}</h6>
        <h6>{props.description}</h6>
        <h6>{props.category}</h6>
        <h6>{props.rate}</h6>
        <h6>{props.count}</h6>
      </div>
    </div>
  );
  export default Product;