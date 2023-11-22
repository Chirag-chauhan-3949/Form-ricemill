import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Add_New_Truck = () => {
  const [truckData, setTruckData] = useState({
    truck_number: 0,
    transpoter: "", 
  });

  const [transpoterOptions, setTransporterOptions] = useState([]);

  useEffect(() => {
    const fetchTransporters = async () => {
      try {
        const response = await fetch("http://localhost:8000/transporters");
        if (response.ok) {
          const data = await response.json();
          setTransporterOptions(data);
        } else {
          console.error("Failed to fetch transporters");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchTransporters();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTruckData({
      ...truckData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch("http://localhost:8000/truck/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(truckData),
      });
  
      if (response.status === 201) {
        console.log("Truck added successfully");
        toast.success('Truck added successfully', { autoClose: 2000 });
      } else {
        console.error("Failed to add truck");
        toast.error('Failed to add truck');
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error('An error occurred');
    }
  };
  

  return (
    <div className='shadow-md bg-white h-fit w-fit pb-6 rounded'>
      <h1 className='flex items-center pt-10 justify-center font-bold tracking-normal text-3xl h-fit w-full bg-white text-[#005B88] leading-6'>Add New Truck</h1>
      <form onSubmit={handleSubmit}>
        <fieldset className='m-8 '>
          <label className='block text-sm font-medium text-slate-700'>
            Truck Number <span className='text-red-600 font-bold'>(Required*)</span><br />
            <input
              className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
              type="number"
              name='truck_number'
              value={truckData.truck_number}
              onChange={handleInputChange}
            />
          </label><br />
          <label className='block text-sm font-large text-slate-700'>
            Select Transporter <span className='text-red-600 font-bold'>(Required*)</span><br />
            <select
              className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
              name='transpoter'
              value={truckData.transpoter}
              onChange={handleInputChange}
            >
              <option value='' disabled>Select a transporter</option>
              {transpoterOptions.map((option) => (
                <option key={option.id} value={option.name}>
                  {option.name}
                </option>
              ))}
            </select>
          </label><br />
          <h2 className='block subpixel-antialiased leading-6 text-gray-900'>
            Cannot Find Transporter? <Link to="/Add_NEw_Transporter">
              <span className='text-blue-600 '>Add New Transporter..</span>
            </Link>
          </h2>
          <button type='submit' className='hover:bg-sky-950 mt-4 w-40 h-10 bg-sky-600 text-white rounded-[4px]'>Add New Truck</button>
        </fieldset>
      </form>
      <ToastContainer position="top-right"/>
    </div>
  );
};

export default Add_New_Truck;
