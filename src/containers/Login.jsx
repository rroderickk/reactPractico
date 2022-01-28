import React from 'react';
import '../styles/login.scss';                               /*@styles*/ //! (@) => @styles
import logoyard from '../../public/logos/logo_yard_sale.svg';
import ForgotPassword from '../pages/ForgotPassword';
import { Link } from 'react-router-dom';

try {	
  const separarCon = (separador, ...strings)=> strings.reduce( (res,str)=> {
    if (res !== '') { res += separador; };
    return res + str;
  });  

console.time('p1')
  console.log({ 
    0: separarCon(" ", "hola", "mundo", "como",    "estaís", "estaís"),
    1: separarCon(" ", "que", "tal", "va", "todo", "y yo que me alegro"),
    2: separarCon(" ", ";$$,$$;######; $$,$$;;",   "$$,$$;♦♦♦♦; $$,$$;"),
    3: separarCon("", "⠄⠄⠄⠄⠄⠄⠄⢀⣠⣶⣾⣿⣶⣦⣤⣀⠄", "⢀⣀⣤⣤⣤⣤⣄⠄⠄⠄⠄⠄⠄ "),
    4: separarCon("", "⠄⠄⠄⠄⠄⢀⣴⣿⣿⣿⡿⠿⠿⠿⠿⢿⣷", "⡹⣿⣿⣿⣿⣿⣿⣷⠄⠄⠄⠄⠄ "),
    5: separarCon("", "⠄⠄⠄⠄⠄⣾⣿⣿⣿⣯⣵⣾⣿⣿⡶⠦⠭", "⢁⠩⢭⣭⣵⣶⣶⡬⣄⣀⡀⠄⠄ "),
    6: separarCon("", "⠄⠄⠄⡀⠘⠻⣿⣿⣿⣿⡿⠟⠩⠶⠚⠻⠟", "⠳⢶⣮⢫⣥⠶⠒⠒⠒⠒⠆⠐⠒ "),
    7: separarCon("", "⠄⢠⣾⢇⣿⣿⣶⣦⢠⠰⡕⢤⠆⠄⠰⢠⢠", "⠄⠰⢠⠠⠄⡀⠄⢊⢯⠄⡅⠂⠄ "),
    9: separarCon("", "⢠⣿⣿⣿⣿⣿⣿⣿⣏⠘⢼⠬⠆⠄⢘⠨⢐", "⠄⢘⠈⣼⡄⠄⠄⡢⡲⠄⠂⠠⠄ "),
    10: separarCon("","⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣥⣀⡁⠄⠘⠘⠘", "⢀⣠⣾⣿⢿⣦⣁⠙⠃⠄⠃⠐⣀ "),
    11: separarCon("",";$$,$$;######; $$,$$;; ", "$$,$$;♦♦♦♦; $$,$$;"),
    12: separarCon("", ";$$,$$;######; $$,$$;;", "$$,$$;♦♦♦♦; $$,$$;"),
  
  }); 

console.timeEnd('p1')
console.time('p2')
console.log(
";$$,$$;######; $$,$$;; $$,$$;♦♦♦♦; $$,$$;\n ⠄⠄⠄⠄⠄⠄⠄⢀⣠⣶⣾⣿⣶⣦⣤⣀⠄⢀⣀⣤⣤⣤⣤⣄⠄⠄⠄⠄⠄⠄\n ⠄⠄⠄⠄⠄⢀⣴⣿⣿⣿⡿⠿⠿⠿⠿⢿⣷⡹⣿⣿⣿⣿⣿⣿⣷⠄⠄⠄⠄⠄\n ⠄⠄⠄⠄⠄⣾⣿⣿⣿⣯⣵⣾⣿⣿⡶⠦⠭⢁⠩⢭⣭⣵⣶⣶⡬⣄⣀⡀⠄⠄\n ⠄⠄⠄⡀⠘⠻⣿⣿⣿⣿⡿⠟⠩⠶⠚⠻⠟⠳⢶⣮⢫⣥⠶⠒⠒⠒⠒⠆⠐⠒\n ⠄⢠⣾⢇⣿⣿⣶⣦⢠⠰⡕⢤⠆⠄⠰⢠⢠⠄⠰⢠⠠⠄⡀⠄⢊⢯⠄⡅⠂⠄\n ⢠⣿⣿⣿⣿⣿⣿⣿⣏⠘⢼⠬⠆⠄⢘⠨⢐⠄⢘⠈⣼⡄⠄⠄⡢⡲⠄⠂⠠⠄\n ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣥⣀⡁⠄⠘⠘⠘⢀⣠⣾⣿⢿⣦⣁⠙⠃⠄⠃⠐⣀\n ;$$,$$;######; $$,$$;; $$,$$;♦♦♦♦; $$,$$;\n ;$$,$$;######; $$,$$;; $$,$$;♦♦♦♦; $$,$$;");
console.timeEnd('p2')

} catch(e) {	console.warn( e.stack, '\n[*] '+e.name, '\n[*] '+e.message); };

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
      <Link to="/forgotpassword" element={<ForgotPassword />}>Forgot my password?</Link>
    <form/>
    <button className="secondary-button signup-button">Sign up</button>
  </div>
</div>
); }; export default login;
