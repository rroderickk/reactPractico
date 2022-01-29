import React from 'react';
import '../styles/OrderItem.scss';                  /*@styles*/ //! (@) => @styles
import tesla2 from '../../public/moneyIn/tesla_roadster.jpg';

const OrderItem = () => { return (
<div className="OrderItem">
  <figure> <img src={tesla2} alt="maquina"/> </figure>
  <p>Tesla Roadster</p> <p>$39000</p>
  <img src="./icons/icon_close.png" alt="close" />
</div>
); }; export default OrderItem;