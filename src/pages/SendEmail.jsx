import React from 'react';
import '../styles/sendEmail.scss';                          /*@styles*/ //! (@) => @styles
import logoyards from '../../public/logos/logo_yard_sale.svg';
import emailimage from '../../public/icons/email.svg';

const SendEmail = () => {
return (
<div className="login">
  <div className="form-container">
    <img src={logoyards} alt="logo" className="logo" />
    <h1 className="title">Email has been sent!</h1>
    <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
    <div className="email-image"> <img src={emailimage} alt="email" /> </div>
    <button className="primary-button login-button">Login</button>
    <p className="resend"> <span>Didn't receive the email?</span> <a href="/forgotpassword">Resend</a> </p>
  </div>
</div>   
); }; export default SendEmail;