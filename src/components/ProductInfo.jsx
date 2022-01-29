import React from 'react';
import tesla2 from '../../public/moneyIn/tesla_roadster.jpg';
import '../styles/ProductInfo.scss';                          /*@styles*/ //! (@) => @

const ProductInfo = () => { return (
<div className="ProductInfo">
  <img src={tesla2} alt="maquina" className='img-product-info'/>
  <div className="ProductInfo">
    <p>$35000</p> <p>tesla roadster</p>
    <p>With its practical position, this bike also fulfills a decorative function, add your hall or workspace.</p>
    <button className="primary-button-info add-to-cart-button-info">
      <img src="./icons/bt_add_to_cart.svg" alt="add to cart" />
      Add to cart
    </button>
  </div>
</div>
);  };  export default ProductInfo;