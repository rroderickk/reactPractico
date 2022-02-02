import React  from "react";
import Header from "../components/Header"; //! Desventaja al usar estos decoradores!!!
import Karts from "@components/Karts"; //! Al usar el atajo de visual estudio alt+click linkea al archivo
import ProductList from '@containers/ProductList'; //! PRO: antes de desplegar hacer el cambio, o usar el shotcurt tecla f1 +backspace+nameFile

const Home = () => {
return ( 
<React.Fragment>
  {<Header />}
  {<ProductList/>}
  {<Karts/>}
</React.Fragment>
); }; export default Home;