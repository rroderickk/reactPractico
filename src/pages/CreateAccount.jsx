import logohouse from '@logos/logo_yard_sale.svg';
import '@styles/CreateAccount.scss';          /*@styles*/ //! (@) => @styles

const CreateAccount = () => { return (
<div className="CreateAccount">
<div className="CreateAccount-container">
  <img src={logohouse} alt="logo-house-account" className="logo-house-account" />
  <h1 className="title-account">My new account</h1>
  <form action="/" className="form-account">
    <div>
      <label htmlFor="name-account" className="label-account">Name: </label>
      <input type="text" id="name-account" placeholder="BugFixxer" className="input-account input-name-account" />
      <label htmlFor="email-account" className="label-account">Email: </label>
      <input type="text" id="email-account" placeholder="email@example.com" className="input-account input-email-account" />
      <label htmlFor="password" className="label-account">Password: </label>
      <input type="password" id="password-account" placeholder="insert password here" className="input-account input-password-account" />
    </div>
    <input type="submit" value="Create-account" className="primary-button-account login-button-account" />
  </form>
</div>
</div>
); }; export default CreateAccount;