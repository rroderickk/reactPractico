import React  from "react";
import Header from "../components/Header";
import Karts from "../components/Karts";
import ProductList from '../containers/ProductList';

const Home = () => { return ( 
<React.Fragment>
	{<Header />}
	{<ProductList/>}
	{<Karts/>}
</React.Fragment>
); }; export default Home;