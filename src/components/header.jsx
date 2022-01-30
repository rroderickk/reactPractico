import React , {useState } from 'react';
import '../styles/header.scss';                             /*@styles*/ //! (@) => @styles
import iconmenu from '../../public/icons/icon_menu.svg';
import menuImg from '../../public/logos/logo_yard_sale.svg';
import Menu from '../components/Menu';

import shopping from '../../public/icons/icon_shopping_cart.svg';
const Header = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  }

return (
<nav>
<img src={iconmenu} alt="menu" className="icon-menu" />
<div className="navbar-left">
  <img src={menuImg} alt="header-logo" className="header-logo" />
    <ul>
      <li> <a href="/karts">All         </a> </li>  <li> <a href="/">Clothes    </a> </li> 
      <li> <a href="/">Electronics </a> </li>  <li> <a href="/">Furnitures </a> </li>
      <li> <a href="/">Toys        </a> </li>  <li> <a href="/">Others     </a> </li>
    </ul>
</div>
<div className="navbar-right">
  <ul>
    <li 
    className="navbar-email"
    onClick={handleToggle}>example@example.com</li>
    <li className="navbar-shopping-cart"> <img src={shopping} alt="shopping cart" />
      <div>2</div>
    </li>
  </ul>
</div>
  {toggle &&  <Menu/>}
</nav>
); }; export default Header;