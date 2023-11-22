
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewSociety = () => {
  const [societyData, setSocietyData] = useState({
    Name: '',
    Distance: '',
    Transporting: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSocietyData({
      ...societyData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/society/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(societyData),
      });

      if (response.ok) {
        console.log('Society added successfully');
        toast.success('Society added successfully', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.error('Failed to add society');
        toast.error('Failed to add society', {
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
      toast.error('Error adding society', {
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
    <div className='shadow-md h-fit bg-white w-fit pb-6 rounded'>
      <h1 className='flex items-center pt-10 justify-center font-bold tracking-normal text-3xl h-fit w-full bg-white text-[#005B88] leading-6'>
        Add New Society
      </h1>
      <form onSubmit={handleSubmit}>
        <fieldset className='m-8'>
        <label className='block text-sm font-medium text-slate-700'>
            Society Name{' '}
            <span className='text-red-600 font-bold '>(Required*)</span>
            <input
              className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
              required
              type='text'
              name='Name'
              value={societyData.Name}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <label className='block text-sm font-medium text-slate-700'>
            Distance From Mill{' '}
            <span className='text-red-600 font-bold '>(Required*)</span>
            <input
              className='mt-1 block w-[30em] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
              required
              type='text'
              name='Distance'
              value={societyData.Distance}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <label className='block text-sm font-medium text-slate-700'>
            Transporting Rate{' '}
            <span className='text-red-600 font-bold '>(Required*)</span>
            <input
              className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
              required
              type='text'
              name='Transporting'
              value={societyData.Transporting}
              onChange={handleInputChange}
            />
          </label>
        </fieldset>
        <button
          type='submit'
          className='ml-[58px] w-40 h-10 bg-sky-600 text-white rounded-[4px] hover:bg-sky-950'
        >
          Add New Society
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddNewSociety;
