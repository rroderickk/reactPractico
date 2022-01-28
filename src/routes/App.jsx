import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ForgotPassword from '../pages/ForgotPassword';
import Layout from '../containers/Layout';
import Login from '../pages/Login';
import Karts from '../components/Karts';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import SendEmail from '../pages/SendEmail';
import Sumary from '../pages/Sumary.jsx';
import MyAccount from '../pages/MyAccount';
// import ProductDetail from '../containers/ProductDetail';

import '../styles/global.css'; /*@styles&%&/$!#$%$&/$%52245074$styles*/ //! (@) => @styles
// import CreateAccount from '../pages/CreateAccount';
// import Checkout from '../pages/Checkout';
// import Orders from '../pages/Orders';


const App = () =>  {	return (
<BrowserRouter>
<Layout>
	<Routes>
		<Route exact path="/"				element={<Home/>} />
		<Route exact path="/karts"					element={<Karts/>} />
		<Route exact path="/login"					element={<Login />} />
		<Route exact path="/forgotpassword" element={<ForgotPassword />} />
		<Route exact path="/sendemail"			element={<SendEmail />} />
		<Route exact path="/account" 				element={<MyAccount />}	/>
		<Route exact path="/sumary" 				element={<Sumary />}	/>
		<Route path="*"						element={<NotFound />} />

			{/* <Route exact path="/signup" component={CreateAccount} />
			<Route exact path="/checkout" component={Checkout} />
			<Route exact path="/orders" component={Orders} />  */}
	</Routes>
</Layout>
</BrowserRouter>
);	};	export default App;

