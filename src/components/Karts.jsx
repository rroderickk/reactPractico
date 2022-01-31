import '@styles/karts.scss';                      /*@styles*/ //! (@) => @styles
import tesla1 from '@moneyIn/a6a5e1b74874278c0e1297c551bcfc.png';
import bici from '@moneyIn/pexels-photo-276517.jpeg';
import tesla2 from '@moneyIn/tesla_roadster.jpg';
import btnadd from '@icons/bt_add_to_cart.svg';

const Karts   =  ()  =>  {  return   (
<section className="main-container">

<div className="cards-container">
<div className="product-card">
  <img src={tesla2} alt="maquina"/>
  <div className="product-info">
    <div> <p>$39'999</p> <p>Tesla Roadster</p> </div>
    <figure> <img src={btnadd} alt="bt"/> </figure>
  </div>
</div>
</div>
			<div className="cards-container">
			<div className="product-card">
				<img src={tesla1} alt="maquina"/>
				<div className="product-info">
					<div> <p>$39'999</p> <p>Tesla Roadster</p> </div>
					<figure> <img src={btnadd} alt="maquina" /> </figure>
				</div>
			</div>
			</div>
<div className="cards-container">
			<div className="product-card">
				<img src={tesla2} alt="maquina"/>
				<div className="product-info">
					<div> <p>$39'999</p> <p>Tesla Roadster</p> </div>
					<figure> <img src={btnadd} alt="maquina" /> </figure>
				</div>
			</div>
			</div>
<div className="cards-container">
			<div className="product-card">
				<img src={bici} alt="maquina"/>
				<div className="product-info">
					<div> <p>$120,00</p> <p>Bike</p> </div>
					<figure> <img src={btnadd} alt="maquina" /> </figure>
				</div>
			</div>
			</div>
</section>
); }; export default Karts;