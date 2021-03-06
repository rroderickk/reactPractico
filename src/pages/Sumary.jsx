import React from 'react';
import { Link } from 'react-router-dom';
import ForgotPassword from '@pages/ForgotPassword'; import SendEmail from '@pages/SendEmail';
import Home from '@pages/Home'; import Login from '@pages/Login'; import NotFound from '@pages/NotFound'; import MyAccount from '@pages/MyAccount'; import Checkout from '@pages/CheckOut'; import Orders from '@pages/Orders';
import ShoppingCardItem from '@components/ShoppingCartItem'; import ProductInfo from '@components/ProductInfo'; import Menu from '@components/Menu'; import Header from '@components/Header'; import ProductItem from '@components/ProductItem';
import ProductDetail from '@containers/ProductDetail'; import MyOrders from '@containers/MyOrders';
import ProductList from '@containers/ProductList'; 
import CreateAccount from '@pages/CreateAccount';
import OrderItem from '@components/OrderItem';
import '@styles/global.css';             							/*@styles*/ //! (@) => @styles
var styles = { margin: 44+'px', 'lineHeight': 28+'px', };
//?╦═╗╔═╗┬ ┬┌┬┐┌─┐┬─┐╔═╗┬─┐┌─┐┌┐┌┌┬┐╔╗╔┌┬┐
//?╠╦╝║ ║│ │ │ ├┤ ├┬┘╠╣ ├┬┘│ ││││ │ ║║║ ││
//?╩╚═╚═╝└─┘ ┴ └─┘┴└─╚  ┴└─└─┘┘└┘ ┴ ╝╚╝─┴┘
const Sumary = () => {  return (
<React.Fragment>{<Header/>}
{<div style={styles}>
  {<h1 style={{color: 'red'}}>EasyLinks</h1>}
  {<Link to="/" 								element={<Home/>}             >Home</Link>}{<br/>}
  {<Link to="/login" 						element={<Login/>}            >Login</Link>}{<br/>}
  {<Link to="/forgotpassword" 	element={<ForgotPassword/>}  	>Forgot my password?</Link>}{<br/>}
  {<Link to="/sendemail" 				element={<SendEmail/>}        >SendEmail</Link>}{<br/>}
  {<Link to="/notfound" 				element={<NotFound/>}         >NotFound</Link>}{<br/>}
  {<Link to="/account" 					element={<MyAccount/>}        >MyAccount</Link>}{<br/>}
	{<Link to="/checkout" 				element={<Checkout/>}         >Checkout</Link>}{<br/>}
	{<Link to="/orders" 					element={<Orders/>}           >Orders</Link>}{<br/>}
	{<Link to="/createaccount" 		element={<CreateAccount/>}    >CreateAccount</Link>}{<br/>}

{<h1 style={{color: 'Cyan'}}>Components</h1>}{/* //todo Debbuggear el reponsive productinfo usar checkout*/}
	{<Link to="/shoppingcarditem" element={<ShoppingCardItem />}		>ShoppingCardItem</Link>}{<br/>}
	{<Link to="/productinfo" 			element={<ProductInfo/>}    			>ProductInfo</Link>}{<br/>}
	{<Link to="/productitem" 			element={<ProductItem/>}    			>ProductItem</Link>}{<br/>}
	{<Link to="/productList" 			element={<ProductList/>}    			>ProductList</Link>}{<br/>}
	{<Link to="/productdetail" 		element={<ProductDetail/>}   			>ProductDetail</Link>}{<br/>}
	{<Link to="/orderitem" 				element={<OrderItem/>}    				>OrderItem</Link>}{<br/>}
	{<Link to="/myorders" 				element={<MyOrders/>}    					>MyOrders</Link>}{<br/>}
	{<Link to="/menu" 						element={<Menu/>}    							>Menu</Link>}{<br/>}
</div>}
</React.Fragment>
);  }; export default Sumary;