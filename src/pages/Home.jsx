import React  from "react";
import Header from "../components/Header";
import Karts from "../components/Karts";

const Home = () => {
return ( 
  <React.Fragment>
    {<Header />}
    {<Karts/>}
  </React.Fragment>
); }; export default Home;