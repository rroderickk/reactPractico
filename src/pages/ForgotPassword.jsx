import React from 'react';
import '../styles/ForgotPassword.scss'
import logoyard from '../../public/logos/logo_yard_sale.svg'

const ForgotPassword = () => {
return (
  
<div className="login">
  <div className="form-container">
    <img src={logoyard} alt="logo" className="logo"/>
    <h1 className="title">Forgot password?</h1>
    <p className="subtitle">Enter a new password for you account</p>
    <form action="/" className="form">
      <label for="email" className="label">Email</label>
      <input type="text" id="input-email" placeholder="email@mail.com" className="input input-email" />
      <label for="new-password" className="label">New Password</label>
      <input type="password" id="new-password" placeholder="insert password here" className="input input-password" />
      <input type="submit" value="Confirm" className="primary-button login-button" />
    </form>
  </div>
</div>

);  }; export default ForgotPassword;







