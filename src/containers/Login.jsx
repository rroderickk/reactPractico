import React from 'react';
import '../styles/login.scss'
import logoyard from '../../public/logos/logo_yard_sale.svg'

try {	
  const separarCon = (separador, ...strings)=> strings.reduce( (res,str)=> {
    if (res !== '') { res += separador; };
    return res + str;
  });  
  console.log({ 
    0: separarCon(" ", "hola", "mundo", "como", "estaís", "estaís",),
    1: separarCon(" ", "que", "tal", "va", "todo", "y yo que me alegro",),
  }); } catch(e) {	console.warn( e.stack, '\n[*] '+e.name, '\n[*] '+e.message); 
};

const login = () => { return (

<div className="login">
  <div className="form-container">
    <img src={logoyard} alt="logo" className="logo" />
    <form action="/" className="form" />
      <label for="email" className="label">Email address</label>
      <input type="text" id="email" placeholder="email@email.com" className="input input-email"/>
      <label for="password" className="label">Password</label>
      <input type="password" id="password" placeholder="enter password here" className="input input-password"/>
      <input type="submit" value="Log in" className="primary-button login-button"/>
      <a href="/forgotpassword">Forgot my password</a>
    <form/>
    <button className="secondary-button signup-button">Sign up</button>
  </div>
</div>

); }; export default login;
