import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@containers/Layout';
import ForgotPassword from '@pages/ForgotPassword'; 
import Login from '@pages/Login'; import NotFound from '@pages/NotFound'; import Home from '@pages/Home'; import SendEmail from '@pages/SendEmail'; import Sumary from '@pages/Sumary';
import MyAccount from '@pages/MyAccount'; import Checkout from '@pages/CheckOut'; import Orders from '@pages/Orders';
import CreateAccount from '@pages/CreateAccount'; import Karts from '@components/Karts';
import ShoppingCartItem from '@components/ShoppingCartItem'; import Menu from '@components/Menu';
import ProductInfo from '@components/ProductInfo';
import ProductItem from '@components/ProductItem';
import OrderItem from '@components/OrderItem';
import MyOrders from '@containers/MyOrders';
import ProductDetail from '@containers/ProductDetail';
import ProductList from '@containers/ProductList';
import AppContext from '@context/AppContext';
import useInitialState from "@hooks/useInitialState";
import '@styles/global.css'; /*@styles&%&/$!#$%$&/$%52245074$styles*/ //! (@) => @styles

const App =()=>  {	
	const initialState = useInitialState();

return	(
<AppContext.Provider value={initialState}>
<BrowserRouter>
<Layout>
	<Routes>
		<Route exact path="/"						element={<Home   	 			/>		} />
		<Route exact path="/karts"						element={<Karts			/>		} />
		<Route exact path="/login"						element={<Login 			/>		} />
		<Route exact path="/forgotpassword" 	element={<ForgotPassword />		} />
		<Route exact path="/sendemail"				element={<SendEmail 	/>				} />
		<Route exact path="/account" 					element={<MyAccount 		/>				}	/>
		<Route exact path="/orders" 					element={<Orders 					/>				}	/>
		<Route exact path="/checkout" 				element={<Checkout 					/>				}	/>
		<Route exact path="/createaccount" 		element={<CreateAccount 			/>				}	/>
		<Route path="*"												element={<NotFound 							/>				} />
		<Route exact path="/sumary"			element={<Sumary 												/>			}	/>
//todo┌─┐┌─┐┌┬┐┌─┐┌─┐┌┐┌┌─┐┌┐┌┌┬┐┌─┐
//todo│  │ ││││├─┘│ ││││├┤ │││ │ └─┐@ComponentsRoutes revisarStylesResponsive
//todo└─┘└─┘┴ ┴┴  └─┘┘└┘└─┘┘└┘ ┴ └─┘
		<Route exact path="/shoppingcarditem"		 	element={<ShoppingCartItem 		/>			}	/>
		<Route exact path="/productinfo" 				element={<ProductInfo 				/>			}	/>
		<Route exact path="/productlist" 			element={<ProductList 				/>			}	/>
		<Route exact path="/productdetail" 	element={<ProductDetail 			/>			}	/>
		<Route exact path="/productitem" 	element={<ProductItem 				/>			}	/>
		<Route exact path="/orderitem" 	element={<OrderItem 					/>			}	/>
		<Route exact path="/myorders" 	element={<MyOrders 					/>			}	/>
		<Route exact path="/menu" 	element={<Menu 								/>			}	/>
	</Routes>
</Layout>
</BrowserRouter>
</AppContext.Provider>
);	};	export default App;