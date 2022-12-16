import "./style.css";

const Product = (props) => {
  const { product } = props;
  console.log(product);

  return (
    <>
      <div className="card">
        <img className="img" src={product.image} />
        <h3 className="title">{product.title}</h3>
        <div>{product.price}</div>
      </div>
    </>
  );
};

export default Product;
