import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPassword from '../pages/ForgotPassword';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import Karts from '../components/Karts';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import SendEmail from '../pages/SendEmail';
import Sumary from '../pages/Sumary.jsx';
import MyAccount from '../pages/MyAccount';
import Checkout from '../pages/CheckOut';
import Orders from '../pages/Orders';
import CreateAccount from '../pages/CreateAccount';
import ShoppingCartItem from '../components/ShoppingCardItem';
import ProductInfo from '../components/ProductInfo';

// import ProductDetail from '../containers/ProductDetail';

import '../styles/global.css'; /*@styles&%&/$!#$%$&/$%52245074$styles*/ //! (@) => @styles

const App = () =>  {	return (
<BrowserRouter>
<Layout>
	<Routes>
		<Route exact path="/"				element={<Home/>} />
		<Route exact path="/karts"						element={<Karts/>} />
		<Route exact path="/login"						element={<Login />} />
		<Route exact path="/forgotpassword" 	element={<ForgotPassword />} />
		<Route exact path="/sendemail"				element={<SendEmail />} />
		<Route exact path="/account" 					element={<MyAccount />}	/>
		<Route exact path="/sumary" 					element={<Sumary />}	/>
		<Route exact path="/orders" 					element={<Orders />}	/>
		<Route exact path="/checkout" 				element={<Checkout />} />
		<Route exact path="/createaccount" 		element={<CreateAccount />}	/>
		<Route path="*"						element={<NotFound />} />
{/*@ComponentsRoutes revisar */}
		<Route exact path="/shoppingcarditem" element={<ShoppingCartItem />}	/>
		<Route exact path="/productinfo" 	element={<ProductInfo />}	/>

	</Routes>
</Layout>
</BrowserRouter>
);	};	export default App;