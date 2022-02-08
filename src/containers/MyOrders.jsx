import React from 'react';
import { useContext } from 'react'; import AppContext from "@context/AppContext";
import OrderItem from '@components/OrderItem';
import arrow from "@icons/flechita.svg"; import '@styles/MyOrder.scss'; /**@styles*/ //! (@) => @styles

const MyOrder =()=> { 
const { state } = useContext(AppContext);

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
  {state.cart.map( (product, index) => (
    <OrderItem product={product} key={index} index={index}  />
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