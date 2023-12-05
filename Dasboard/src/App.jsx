import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Add_Do from "./pages/Add_Do.jsx";
import Add_Agreement from "./pages/Agreement.jsx";
import Add_New_Society from "./pages/Society.jsx";
import Add_New_Truck from "./pages/Truck.jsx";
import Add_New_Transporter from "./pages/Transporter.jsx";
import View_Agreement from "./pages/View_Agreement.jsx";
import View_Truck from "./pages/View_Truck.jsx";
import View_Transporter from "./pages/View_Transporter.jsx";
import View_Societies from "./pages/View_Societies.jsx";
import Dhan_Awak from "./pages/Dhan_Awak.jsx";
import Home from "./components/Home_page.jsx";
import Log_in from "./pages/Log_in.jsx";
import Signup from "./pages/Signup.jsx";
import Dopanding from "./pages/Dopanding.jsx";
import Addricemill from "./pages/Addricemill.jsx";
import Paddysales from "./pages/Paddysales.jsx";
import Sudapatrak from "./pages/Sudapatrak.jsx";
import Dalalidhan from "./pages/Dalalidhan.jsx";
import Frk from "./pages/Frk.jsx";
import Dhantransporting from "./pages/Dhantransporting.jsx";
import Mohanfoodpaddy from "./pages/Mohanfoodpaddy.jsx";
import Transportermaster from "./pages/Transportermaster.jsx";
import Dhanricesocietiesrate from "./pages/Dhanricesocietiesrate.jsx";
import Lotnumbermaster from "./pages/Lotnumbermaster.jsx";
import Kochia from "./pages/Add_kochia.jsx";
import Ricedeposit from "./pages/Ricedeposit.jsx";
import View_Dhan_Awak from "./pages/View_Dhan_Awak.jsx";

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Sidebar>
          <Routes>
            <Route path="/Lotnumbermaster" element={<Lotnumbermaster />} />
            <Route
              path="/Dhanricesocietiesrate"
              element={<Dhanricesocietiesrate />}
            />
            <Route path="/Ricedeposit" element={<Ricedeposit />} />
            <Route path="/Transportermaster" element={<Transportermaster />} />
            <Route path="/Mohanfoodpaddy" element={<Mohanfoodpaddy />} />
            <Route path="/Dhantransporting" element={<Dhantransporting />} />
            <Route path="/Frk" element={<Frk />} />
            <Route path="/Dalalidhan" element={<Dalalidhan />} />
            <Route path="/Sudapatrak" element={<Sudapatrak />} />
            <Route path="/Paddysales" element={<Paddysales />} />
            <Route path="/Dopanding" element={<Dopanding />} />
            <Route path="/Addricemill" element={<Addricemill />} />
            <Route path="/Dhan_Awak" element={<Dhan_Awak />} />
            <Route path="/Add_Do" element={<Add_Do />} />
            <Route path="/Add_Agreement" element={<Add_Agreement />} />
            <Route path="/Add_New_Society" element={<Add_New_Society />} />
            <Route path="/Add_kochia" element={<Kochia />} />
            <Route
              path="/Add_New_Transporter"
              element={<Add_New_Transporter />}
            />
            <Route path="/Add_New_Truck" element={<Add_New_Truck />} />
            <Route path="/View_Agreement" element={<View_Agreement />} />
            <Route path="/View_Truck" element={<View_Truck />} />
            <Route path="/View_Transporter" element={<View_Transporter />} />
            <Route path="/View_Societies" element={<View_Societies />} />
            <Route path="/View_Dhan_Awak" element={<View_Dhan_Awak />} />
          </Routes>
        </Sidebar>
      ) : (
        <Routes>
          <Route path="/" element={<Home onlogin={handleLogin} />} />
          <Route path="/Log_in" element={<Log_in />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default App;
