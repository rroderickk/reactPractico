import React from 'react';
import '../styles/header.scss';                             /*@styles*/ //! (@) => @styles
import iconmenu from '../../public/icons/icon_menu.svg';
import menu from '../../public/logos/logo_yard_sale.svg';
import shopping from '../../public/icons/icon_shopping_cart.svg';
const Header = () => {
return (
<nav>
<img src={iconmenu} alt="menu" className="icon-menu" />
<div className="navbar-left">
  <img src={menu} alt="header-logo" className="header-logo" />
    <ul>
      <li> <a href="/karts">All         </a> </li>  <li> <a href="/">Clothes    </a> </li> 
      <li> <a href="/">Electronics </a> </li>  <li> <a href="/">Furnitures </a> </li>
      <li> <a href="/">Toys        </a> </li>  <li> <a href="/">Others     </a> </li>
    </ul>
</div>
<div className="navbar-right">
  <ul>
    <li className="navbar-email">example@example.com</li>
    <li className="navbar-shopping-cart"> <img src={shopping} alt="shopping cart" />
      <div>2</div>
    </li>
  </ul>
</div>
</nav>
); }; export default Header;