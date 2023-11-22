import React, { useState } from 'react';

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
        // Optionally, you can handle success here (e.g., show a success message)
      } else {
        console.error('Failed to add society');
        // Optionally, you can handle errors here (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='shadow-md h-fit w-fit pb-6 rounded'>
      <h1 className='flex items-center justify-center font-bold tracking-normal text-3xl h-fit w-full bg-white text-[#005B88] leading-6'>
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
    </div>
  );
};

export default AddNewSociety;
