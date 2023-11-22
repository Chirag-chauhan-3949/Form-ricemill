import React, { useState } from 'react';

const AddAgreement = () => {
  const [agreementData, setAgreementData] = useState({
    mill: '',
    'Agreement-number': '',
    Mota: '',
    Patla: '',
    Sarna: '',
    'Lot-from': '',
    'Lot-to': '',
    Total: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAgreementData({
      ...agreementData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/agreement/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(agreementData),
      });

      if (response.ok) {
        console.log('Agreement added successfully');
        // Optionally, you can handle success here (e.g., show a success message)
      } else {
        console.error('Failed to add agreement');
        // Optionally, you can handle errors here (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='h-fit pb-6 w-1/2 shadow-md p-10 rounded'>
      <h1 className='flex items-center mb-5 justify-center font-bold tracking-normal text-3xl h-fit w-full bg-white text-[#005B88] leading-6'>
        Add Agreement
      </h1>
      <h2 className='block subpixel-antialiased leading-6 text-gray-900'>
        Add Government Agreements
      </h2>
      <form onSubmit={handleSubmit}>
        <fieldset className='m-8 inline'>
          <legend className='font-bold'>Select Mill</legend>
          <div>
            <label className='p-2 hover:text-sky-500'>
              <input
                type='radio'
                name='mill'
                value='Purushottam'
                onChange={handleInputChange}
              />{' '}
              Purushottam Rice Mill
            </label>
          </div>
          <div>
            <label className='p-2 hover:text-sky-500'>
              <input
                className=' hover:'
                type='radio'
                name='mill'
                value='Dushyant'
                onChange={handleInputChange}
              />{' '}
              Dushyant Rice Mill
            </label>
          </div>
          <div>
            <label className='p-2 hover:text-sky-500'>
              <input
                type='radio'
                name='mill'
                value='tulsi'
                onChange={handleInputChange}
              />{' '}
              Tulsi Rice mill
            </label>
          </div>
        </fieldset>
        <fieldset className='inline float-right mt-[25px]'>
          <label className=' block text-sm font-medium text-slate-700'>
            Agreement Number <br />
            <input
             className='mt-1 block w-80 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
              type='text'
              name='Agreement-number'
              value={agreementData['Agreement-number']}
              onChange={handleInputChange}
            />
          </label>
        </fieldset>
        <fieldset className='flex flex-wrap justify-evenly  h-fit p-10'>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-slate-700'>
              Mota <br />
              <input
                className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                type="text"
                name="Mota"
              />
            </label>
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-slate-700'>
              Patla <br />
              <input
                className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                type='text'
                name='Patla'
              />
            </label>
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-slate-700'>
              Sarna <br />
              <input
                className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                type='text'
                name='Sarna'
              />
            </label>
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-slate-700'>
              Lot From <br />
              <input
                className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                type='text'
                name='Lot-from'
              />
            </label>
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-slate-700'>
              Lot To <br />
              <input
                className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                type='text'
                name='Lot-to'
              />
            </label>
          </div>
          <div className='mb-4'>
            <label className='block text-sm font-medium text-slate-700'>
              Total <br />
              <input
                className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
                type='number'
                name='Total'
              />
            </label>
          </div>
        </fieldset>
        <button
          type='submit'
          className='hover:bg-sky-950 w-1/3 h-10 bg-sky-600  text-white rounded-[4px]'>
          Add Agreement
        </button>
      </form>
    </div>
  );
};

export default AddAgreement;
