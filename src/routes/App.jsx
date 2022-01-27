import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ForgotPassword from '../containers/ForgotPassword';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Karts from '../components/Karts';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import SendEmail from '../pages/SendEmail';
import '../styles/global.css'; /*@styles&%&/$!#$%$&/$%52245074$styles*/ //! (@) => @styles

const App = () =>  {
return (
<BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path="/"         element={<Home/>} />
        <Route exact path="/login"          element={<Login />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} />
        <Route exact path="/sendemail"      element={<SendEmail />} />
        <Route path="*"               element={<NotFound />} />
      </Routes>
    </Layout>
</BrowserRouter>
); }; export default App;












/* Render modalidad  */
// import { render } from "react-dom";
// const App = () => {
// // render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/"          element={<Login />} />
//       <Route path="/forgotpassword"          element={<ForgotPassword />} />
//     </Routes>
//   </BrowserRouter>
  // document.get         ElementById("app")
// }; export default App;