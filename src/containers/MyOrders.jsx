import { useContext, useState} from 'react'; import AppContext     from "@context/AppContext"
import OrderItem      from '@components/OrderItem';
import arrow          from "@icons/flechita.svg"; import '@styles/MyOrder.scss'; /**@styles*/ //! (@) => @styles

const MyOrder =()=> { 
  const [statePrice,setPrice] = useState('0');
const { state } = useContext(AppContext);

// const priceStateInit = state.cart.map( (product) => parseInt(product.price))
// const handlePrice =  priceStateInit.reduce((current=0,productPrice) => current+productPrice);

const sumaTotal = () => {
  const reducer = (accumulator, currentValue) => accumulator+currentValue.price;
  const sum = state.cart.reduce(reducer, 0);
  return sum;
}


return (
<aside className  = "MyOrder">
<div   className  = "title-container">
  <img       src  = {arrow} alt="arrow" />
  <p className    = "title-myorders">My order</p>
</div>
<div className="my-order-content">
  {state.cart.map(    product => (
    <OrderItem product={product} key={ `orderItem-${product.id}` } />
  ))}
  <div className="order-myorders">
    <p> <span>Total</span> </p> 
    <p>$
      {sumaTotal()}
    </p>
  </div>
  <button className="primary-button-myorders"> Checkout </button>
</div>
</aside>
); }; export default MyOrder;