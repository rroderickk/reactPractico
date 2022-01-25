import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ForgotPassword from '../containers/ForgotPassword';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import '../styles/global.css';

const App = () => {
  // function App() {
    return (
  <BrowserRouter>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Layout>
  </BrowserRouter>
  );
}; export default App;






// import { render } from "react-dom";
// // render(
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Login />} />
//       <Route path="/forgotpassword" element={<ForgotPassword />} />
//     </Routes>
//   </BrowserRouter>
  // document.getElementById("app")
// 