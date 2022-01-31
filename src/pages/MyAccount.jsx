import logoaccount from '@logos/logo_yard_sale.svg';
import '@styles/MyAccount.scss'; /*@styles*/ //! (@) => @styles

const MyAccount = () => { return (
<>
<div className="MyAccount">
  <div className="MyAccount-container">
    <img src={logoaccount} alt="logoAccount" className="logo-account" />
    <h1 className="title-account">My account</h1>
    <form action="/" className="form-account">
      <div>
        <label htmlFor="name" className="label-account">Name</label>
        <p className="value-account">BuggFixxer</p>
        <label htmlFor="email-account" className="label-account">Email</label>
        <p className="value-account">BuggFixxer@dev.com</p>
        <label htmlFor="password-account" className="label-account">Password</label>
        <p className="value-account">*********</p>
      </div>
      <input type="submit" value="Edit" className="secondary-button-account login-button-account" />
    </form>
  </div>
</div>
</>
);  }; export default MyAccount;