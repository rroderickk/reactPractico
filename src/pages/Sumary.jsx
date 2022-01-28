import React from 'react';
import { Link } from 'react-router-dom';
import ForgotPassword from '../pages/ForgotPassword';
import SendEmail from '../pages/SendEmail';
import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import MyAccount from '../pages/MyAccount';

import '../styles/global.css';             /*@styles*/ //! (@) => @styles
var styles = { margin: 44+'px', 'line-height': 32.4, };

const Sumary = () => {  return (
<React.Fragment>
{<div style={styles}>
  {<h1 style={{color: 'red'}}>EasyLinks</h1>}
  {<Link to="/" element={<Home />}                          >Home</Link>}{<br/>}
  {<Link to="/login" element={<Login />}                    >Login</Link>}{<br/>}
  {<Link to="/forgotpassword" element={<ForgotPassword />}  >Forgot my password?</Link>}{<br/>}
  {<Link to="/sendemail" element={<SendEmail />}            >SendEmail</Link>}{<br/>}
  {<Link to="/notfound" element={<NotFound />}              >NotFound</Link>}{<br/>}

  {<Link to="/account" element={<MyAccount />}              >MyAccount</Link>}{<br/>}

  {<h1 style={{color: 'red'}}>Components</h1>}
</div>}
</React.Fragment>
);  }; export default Sumary;