import React, { useState } from 'react';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { PiNotebook } from "react-icons/pi";
import { FaBuildingWheat } from "react-icons/fa6";
import { FaTruckMoving } from "react-icons/fa";
import { RiHomeOfficeLine } from "react-icons/ri";
import { SiLibreoffice } from "react-icons/si";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/Add_Do",
            name:"Add_Do",
            icon:<SiLibreoffice/>
        },
        {
            path:"./Add_Agreement",
            name:"Add_Agreement",
            icon:<PiNotebook/>
        },
        {
            path:"/Add_New_Society",
            name:"Add_New_Society",
            icon:<FaBuildingWheat/>
        },
        {
            path:"/Add_New_Truck",
            name:"Add_New_Truck",
            icon:<FaTruckMoving/>
          
        },
        {
            path:"/Add_New_Transporter",
            name:"Add_New_Transporter",
            icon:<RiHomeOfficeLine/>
            
            
        }
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <div style={{marginLeft: isOpen ? "240px" : "0px"}} className="bars">
                   <HiOutlineMenuAlt2 onClick={toggle} className=' text-2xl '/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassname="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main className='flex items-center justify-center'>{children}</main>
        </div>
    );
};

export default Sidebar;