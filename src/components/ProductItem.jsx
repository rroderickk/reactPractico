import React, { useState } from 'react';
import '../styles/ProductItem.scss';                      /*@styles*/ //! (@) => @styles
import tesla2 from '../../public/moneyIn/tesla_roadster.jpg';
import addToCard from "../../public/icons/bt_add_to_cart.svg";

const ProductItem = () => {
  const [cartName, setCartName] = useState([]);
  const [priceItem, setPriceItem] = useState([]);
  const handleClick = () => {
    setCartName([]);
    setPriceItem([]);
  };
return (
<div className="ProductItem">
  <img src={tesla2} alt="img"/>
  <div className="productItem-info">
    <div> <p>{priceItem}</p> <p>{cartName}</p> </div>
    <figure > <img onClick={handleClick} src={addToCard} alt="img" /> </figure>
  </div>
</div>
);  };  export default ProductItem;