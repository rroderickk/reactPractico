import React from 'react';
//?┌─┐┌┬┐┌─┐┌┬┐┌─┐┌─┐┬ ┬┬  ┬
//?└─┐ │ ├─┤ │ ├┤ ├┤ │ ││  │Contiene estado usand useState
//?└─┘ ┴ ┴ ┴ ┴ └─┘└  └─┘┴─┘┴─┘

const statefull = () => {
  const [name,setName] = useState('BuggFixxer');
  return (
    <div>
    <h1>Hello {name}</h1>
  </div>    
);  };  export default statefull;
//!┌─┐┌┬┐┌─┐┌┬┐┌─┐less
//!└─┐ │ ├─┤ │ ├┤ less No contineen estado solo devuelve un componente y se le pasa props
//!└─┘ ┴ ┴ ┴ ┴ └─┘less
const stateLessEjemplo1 = () => (
  <div>
    <h1>Hello MyName</h1>
  </div>
); 

const stateLessEjemplo2 = ({text}) => <ButtonRed text={text} />;

//* Extendiendo clases de React.Component usando herencia y polimorfismo
import React, { Component } from 'react';
class NameClass extends Component {
  constructor() {} //AntigUa estructura
  render() {
    return (
      <div>
        <h1>
          Hello,World!
        </h1>
      </div>
    );
  };
};

//!╦ ╦╔═╗╔═╗
//!╠═╣║ ║║omponentes de orden superior HOC(High Order Component)
//!╩ ╩╚═╝╚═╝
import React, { Component } from 'react';
function ComponentWrapper(WrapperComponent) {
  render() {
    return <WrapperComponent {...this.props} />;
  };
};