import React, { useRef } from 'react';
import '../styles/login.scss';                               /*@styles*/ //! (@) => @styles
import logoyard from '../../public/logos/logo_yard_sale.svg';
import ForgotPassword from './ForgotPassword';
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

} catch(e) {	console.warn(e.stack, '\n[*] '+e.name, '\n[*] '+e.message); };

// Consolas, 'Courier New', monospace
const Login = () => { 

  const form = useRef(null);
	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			usename: formData.get('email'),
			password: formData.get('password')
		}
		console.log(data);
	}

  return (
  <div className="login">
  <div className="form-container">
    <img src={logoyard} alt="logo" className="logo-login" />
    <form action="/" className="form" ref={form}>
      <label htmlFor="email" className="label">Email address</label>
      <input type="text" name="email" placeholder="email@email.com" className="input input-email"/>
      <label htmlFor="password" className="label">Password</label>
      <input type="password" name="password" placeholder="enter password here" className="input input-password"/>
      <Link to="/forgotpassword" element={<ForgotPassword />}>Forgot my password</Link>
      <button 
        onClick={handleSubmit}
        className="primary-button login-button">
        log in
      </button>
    </form>
    <button 
      className="secondary-button signup-button">
      Sign up
    </button>
  </div>
  </div>
  ); 
} 
export default Login;