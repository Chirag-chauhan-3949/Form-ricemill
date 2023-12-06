// // Selectt.js
// import React, { useState, useEffect } from "react";
// import Select from "react-select";
// import axios from "axios";

// const customStyles = {
//   control: (base) => ({
//     ...base,
//     height: 35,
//     minheight: 30,
//     width: 250,
//     minwidth: 180,
//   }),
//   indicatorSeparator: (state) => ({
//     display: "none",
//   }),
// };

// const Ricemill = ({ onSelectChange }) => {
//   const [DoOptions, setDoOptions] = useState([]);

//   useEffect(() => {
//     async function fetchMillData() {
//       try {
//         const Mill_response = await axios.get(
//           "http://localhost:8000/rice-do-society-truck-transporter"
//         );

//         const data = Mill_response.data;
//         setDoOptions(data);
//       } catch (error) {
//         console.error("Error:", error);
//       }
//     }

//     fetchMillData();
//   }, []);

//   const options = DoOptions.map((mill) => ({
//     value: mill.rice_mill_id,
//     label: mill.rice_mill_name,
//   }));

//   return (
//     <>
//       <div className="flex justify-between">
//         <label
//           htmlFor="stack_location"
//           className="block text-sm font-medium leading-6 text-gray-900"
//         >
//           Ware House
//         </label>
//       </div>
//       <div className="mt-1 relative">
//         <div className="relative inline-block text-left">
//           <Select
//             onChange={onSelectChange}
//             name="stack_location"
//             className=""
//             options={options}
//             placeholder="Select location"
//             styles={customStyles}
//           />
//         </div>
//         <p className="mt-2 text-sm text-gray-500">
//           Cannot Find Rice Mill?{" "}
//           <a
//             href="/Addricemill"
//             className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
//           >
//             Add New Rice Mill..
//           </a>
//         </p>
//       </div>
//     </>
//   );
// };

// export default Ricemill;
