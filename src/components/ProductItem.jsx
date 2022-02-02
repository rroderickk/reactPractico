import { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/ProductItem.scss';                      /*../styles*/ //! (../) => ../styles
import addToCardImage from "../../public/icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => { const { addToCart } = useContext(AppContext);

/* util */
const handleClick = (item) => {
	addToCart(item);
};

return (
<div className="ProductItem">
	<img src={ product.images[0] } alt={ product.title }/>
	<div className="productItem-info">
		<div> <p>${ product.price }</p> <p>{ product.title }</p> </div>
		<figure onClick={ ()=>  handleClick(product)  }> <img src={ addToCardImage } alt="img" /> </figure>
	</div>
</div>
);  };  export default ProductItem;