import '../styles/ShoppingCartItem.scss';
import tesla2 from '../../public/moneyIn/tesla_roadster.jpg';

const ShoppingCartItem = () => { return (
<div className="ShoppingCartItem">
  <figure> <img src={tesla2} alt="maquina"/> </figure>
  <p>Tesla Roadter 2022</p>
  <p>$39,999</p>
</div>
); }; export default ShoppingCartItem;