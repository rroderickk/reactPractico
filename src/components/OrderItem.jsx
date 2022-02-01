import '@styles/OrderItem.scss';                  /**@styles*/ //! (@) => @styles
import xIconSlice from '@icons/icon_close.png';

const OrderItem = ({ product }) => { 
const handleSlice = (obj) => console.log(obj.price);

return (
<div className="OrderItem">
  <figure> <img src={ product.images[0] } alt={ product.title }/> </figure>
  <p>{ product.title }</p> <p>${ product.price } </p>
  <img 
    src={ xIconSlice }
    alt="close" 
    onClick={ () => handleSlice(product) } 
  />
</div>
); }; export default OrderItem;