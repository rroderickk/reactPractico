import React from 'react';
import '../styles/MyAccount.scss'; /*@styles*/ //! (@) => @styles

const MyAccount = () => { return (
<div className="MyAccount">
  <div className="MyAccount-container">
    <h1 className="title-account">My account</h1>
    <form action="/" className="form-account">
      <div>
        <label for="name" className="label-account">Name</label>
        <p className="value">Camila Yokoo</p>
        <label for="email" className="label-account">Email</label>
        <p className="value">camilayokoo@gmail.com</p>
        <label for="password" className="label-account">Password</label>
        <p className="value">*********</p>
      </div>
      <input type="submit" value="Edit" className="secondary-button-account login-button-account" />
    </form>
  </div>
</div>
);  }; export default MyAccount;