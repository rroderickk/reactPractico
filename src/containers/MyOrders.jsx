import React from 'react';
import OrderItem from '../components/OrderItem';
import '../styles/MyOrder.scss';                  /*@styles*/ //! (@) => @styles

const MyOrder = () => { return (
<aside className="MyOrder">
<div className="title-container">
  <img src="./icons/flechita.svg" alt="arrow" />
  <p className="title-myorders">My order</p>
</div>
<div className="my-order-content">
  <OrderItem />
  <div className="order-myorders">
    <p> <span>Total</span> </p> <p>$560.00</p>
  </div>
  <button className="primary-button-myorders"> Checkout </button>
</div>
</aside>
); }; export default MyOrder;