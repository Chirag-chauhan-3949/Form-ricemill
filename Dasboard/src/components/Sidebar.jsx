import React, { useState } from 'react';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { PiNotebook } from "react-icons/pi";
import { FaBuildingWheat } from "react-icons/fa6";
import { FaTruckMoving } from "react-icons/fa";
import { RiHomeOfficeLine } from "react-icons/ri";
import { SiLibreoffice } from "react-icons/si";
import { NavLink } from 'react-router-dom';
const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
        path: "/Add_Do",
        name: "Add Do",
        icon: <SiLibreoffice />,
      },
      {
        path: "./Add_Agreement",
        name: "Add Agreement",
        icon: <PiNotebook />,
      },
      {
        path: "/Add_New_Society",
        name: "Add New Society",
        icon: <FaBuildingWheat />,
      },
      {
        path: "/Add_New_Truck",
        name: "Add New Truck",
        icon: <FaTruckMoving />,
      },
      {
        path: "/Add_New_Transporter",
        name: "Add New Transporter",
        icon: <RiHomeOfficeLine />,
      },
      {
        path: "/View_Agreement",
        name: "View Agreements",
        icon: <PiNotebook/>,
      },
      {
        path: "/View_Truck",
        name: "View Trucks",
        icon: <FaTruckMoving/>,
      },
      {
        path: "/View_Transporter",
        name: "View Transporters",
        icon: <RiHomeOfficeLine/>,
      },
      {
        path: "/View_Societies",
        name: "View Societies",
        icon: <FaBuildingWheat />,
      },
  ];

    return (
      <div>
        <div
          style={{ width: isOpen ? "300px" : "50px" }}
          className="fixed bg-[#005b88] font-semibold text-white h-screen transition-all-0.5 border-r border-[#90cfecda] overflow-hidden"
        >
          <div className="flex items-center px-[15px] py-[20px] mb-[10px]">
            <div
              style={{ marginLeft: isOpen ? "240px" : "0px" }}
              className="flex font-[15px] ml-[50px]"
            >
              <HiOutlineMenuAlt2
                onClick={toggle}
                className="text-2xl cursor-pointer"
              />
            </div>
          </div>
          {menuItem.map((item, index) => (
            <React.Fragment key={index}>
              <NavLink
                to={item.path}
                className={`flex text-white p-[6px] mx-[10px] my-[30px] gap-[15px] transition-all-0.5 hover:bg-[#90cfecda] hover:text-black hover:transition-all-0.5 focus:bg-[#90cfecda] focus:text-black ${
                  item.path.startsWith('/View_') ? 'view-link' : ''
                }`}
              >
                <div className="font-[18px]">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="font-[18px]"
                >
                  {item.name}
                </div>
              </NavLink>
              {index === 4 && (
                <hr className="border-0 h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="w-screen h-screen flex justify-center items-center">
          <main className="flex items-center justify-center w-screen p-[50px]">
            {children}
          </main>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  