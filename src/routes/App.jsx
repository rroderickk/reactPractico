import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ForgotPassword from '../containers/ForgotPassword';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import SendEmail from '../pages/SendEmail';
import '../styles/global.css'; /*@styles&%&/$!#$%$&/$%52245074$styles*/ //! (@) => @styles

const App = () =>  {
return (
<BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/sendemail" element={<SendEmail />} />
        <Route path="*" element={<NotFound />} />
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
//       <Route path="/" element={<Login />} />
//       <Route path="/forgotpassword" element={<ForgotPassword />} />
//     </Routes>
//   </BrowserRouter>
  // document.getElementById("app")
// }; export default App;