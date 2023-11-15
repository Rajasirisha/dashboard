import { useEffect } from "react";
import React from "react";
import { Select, Space } from "antd";
// import './styles.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./page/Login";
import Freelancer from "./page/Freelancer";
import Manager from './page/Manager';
import Employee from './page/Employee'
import Forgotpassword from "./page/Forgotpassword";
import Recovery from './page/Recovery';
import SetPassword from "./page/SetPassword";

function App() {
  return(
<div>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login />} />
    {/* <Route path="/home" element={<Home/>} /> */}
    <Route path="/manager" element={<Manager />} />
    <Route path="/employee" element={<Employee/>} />
    <Route path="/freelancer" element={<Freelancer/>} />
    <Route path="/forgotpassword" element={<Forgotpassword/>} />
    <Route path="/recovery" element={<Recovery/>} />
    <Route path="/setpassword" element={<SetPassword/>} />

  </Routes>
  </BrowserRouter>

</div>
  );
  
}

export default App;
