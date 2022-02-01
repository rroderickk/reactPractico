import { useContext } from 'react'; import AppContext from "@context/AppContext";
import '@styles/OrderItem.scss';                  /**@styles*/ //! (@) => @styles
import xIconSlice from '@icons/icon_close.png';

const OrderItem = ({product, index}) => { const {removeFromCart} = useContext(AppContext);

/* util */
const handleRemove = (product) => removeFromCart(product, index);

return (
<div className="OrderItem">
  <figure> <img src={product.images[0]} alt={product.title}/> </figure>
  <p>{product.title}</p> <p>${product.price} </p>
  <img 
    src={xIconSlice}
    className="Pointer"
    alt="close" 
    onClick={()=>handleRemove(product)}
  />
</div>
); }; export default OrderItem;