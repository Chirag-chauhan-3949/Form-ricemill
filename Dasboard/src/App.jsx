import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Add_Do from './pages/Add_Do.jsx';
import Add_Agreement from './pages/Agreement.jsx';
import Add_New_Society from './pages/Society.jsx';
import Add_New_Truck from './pages/Truck.jsx';
import Add_New_Transporter from './pages/Transporter.jsx';
import View_Agreement from './pages/View_Agreement.jsx';
import View_Truck from './pages/View_Truck.jsx'; 
import View_Transporter from './pages/View_Transporter.jsx';
import View_Societies from './pages/View_Societies.jsx';

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
          <Route path="/View_Agreement" element={<View_Agreement/>} />
          <Route path="/View_Truck" element={<View_Truck/>}/>
          <Route path="/View_Transporter" element={<View_Transporter/>}/>
          <Route path="/View_Societies" element={<View_Societies/>}/>
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;







