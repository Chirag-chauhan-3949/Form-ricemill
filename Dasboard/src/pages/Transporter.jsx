
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewTransporter = () => {
  const [transporterData, setTransporterData] = useState({
    Name: '',
    Phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTransporterData({
      ...transporterData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/transporter/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(transporterData),
      });

      if (response.ok) {
        console.log('Transporter added successfully');
        toast.success('Transporter added successfully', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.error('Failed to add transporter');
        toast.error('Failed to add transporter', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error adding transporter', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className='shadow-md h-fit w-fit pb-6 rounded p-10'>
      <h1 className='flex items-center justify-center font-bold tracking-normal text-3xl h-fit w-full bg-white text-[#005B88] leading-6'>
        Add New Transporter
      </h1>
      <form onSubmit={handleSubmit}>
        <fieldset className='m-10'>
        <label className='block text-sm font-medium text-slate-700'>
        Transporter Name{' '}
        <span className='text-red-600 font-bold'>(Required*)</span>
        <input
          className='mt-1 block w-[30em] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
          required
          type='text'
          name='Name'
          value={transporterData.Name}
          onChange={handleInputChange}
        />
      </label>
      <br />

      <label className='block text-sm font-large text-slate-700'>
        Phone{' '}
        <span className='text-red-600 font-bold'>(Required*)</span>
        <input
          className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
          required
          type='text'
          name='Phone'
          value={transporterData.Phone}
          onChange={handleInputChange}
        />
      </label>
      <button
      type='submit'
      className='hover:bg-sky-950 p-3 mt-4 w-fit h-fit bg-sky-600 text-white rounded-[4px]'
      >
      Add New Transporter
      </button>
      </fieldset>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddNewTransporter;
