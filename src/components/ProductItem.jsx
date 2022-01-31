import '@styles/ProductItem.scss';                      /*@styles*/ //! (@) => @styles
import addToCard from "@icons/bt_add_to_cart.svg";

const ProductItem = ({product}) => {
return (
<div className="ProductItem">
  <img src={product.images[0]} alt={product.title}/>
  <div className="productItem-info">
    <div> <p>${product.price}</p> <p>{product.title}</p> </div>
    <figure > <img src={addToCard} alt="img" /> </figure>
  </div>
</div>
);  };  export default ProductItem;