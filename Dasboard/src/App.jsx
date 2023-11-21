import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Add_Do from './pages/Add_Do.jsx';
import Add_Agreement from './pages/Agreement.jsx';
import Add_New_Society from './pages/Society.jsx';
import Add_New_Truck from './pages/Truck.jsx';
import Add_New_Transporter from './pages/Transporter.jsx';
const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/Add_Do" element={<Add_Do />} />
          <Route path="/Add_Agreement" element={<Add_Agreement />} />
          <Route path="/Add_New_Society" element={<Add_New_Society />} />
          <Route path="/Add_New_Transporter" element={<Add_New_Transporter />} />
          <Route path="/Add_New_Truck" element={<Add_New_Truck />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;