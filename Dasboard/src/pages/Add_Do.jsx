import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Add_Do = () => {
  const [doData, setDoData] = useState({
    mill: '',
    doDate: '',
    doNumber: '',
    selectAgreement: '',
    motaWeight: '',
    motaBardana: '',
    patlaWeight: '',
    patlaBardana: '',
    sarnaWeight: '',
    sarnaBardana: '',
    totalWeight: '',
    totalBardana: '',
    society: '',
    truckNumber: '',
  });

  // Fetch data for the "Select Agreement" dropdown
  useEffect(() => {
    fetch('http://localhost:8000/agreements')
      .then(response => response.json())
      .then(data => {
        setDoData(prevState => ({ ...prevState, agreements: data }));
      })
      .catch(error => console.error('Error fetching agreements:', error));
  }, []);

// Fetch data for "Society" dropdown
  useEffect(() => {
    fetch('http://localhost:8000/societies')
      .then(response => response.json())
      .then(data => {
        setDoData(prevState => ({ ...prevState, societies: data }));
      })
      .catch(error => console.error('Error fetching societies:', error));
  }, []);
  
  // Fetch data for "Truck Number" dropdown
  useEffect(() => {
    fetch('http://localhost:8000/truckNumbers')
      .then(response => response.json())
      .then(data => {
        setDoData(prevState => ({ ...prevState, truckNumbers: data }));
      })
      .catch(error => console.error('Error fetching truck numbers:', error));
  }, []);
  

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    setDoData((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/add_do', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(doData),
      });

      if (response.ok) {
        console.log('Do added successfully');
      } else {
        console.error('Failed to add Do');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='h-full w-[40%] shadow-md p-5 rounded mt-[10%]'>
       <h1 className='flex items-center mb-5 justify-center font-bold tracking-normal text-3xl h-fit w-full bg-white text-[#005B88] leading-6'>Add Agreement</h1>
        <h2 className='block subpixel-antialiased leading-6 text-gray-900'>Add Government Agreements</h2>
      <form onSubmit={handleSubmit}>
      <fieldset className='inline m-8'>
                <legend className='font-bold'>Select Mill</legend>
                <div >
                     <label className='p-2 hover:text-sky-500'><input type="radio" name='mill' value="Purushottam" onChange={handleInputChange}/>{' '}Purushottam Rice Mill</label>
                </div>

                <div>
                    <label className='p-2 hover:text-sky-500'><input type="radio" name='mill' value="Dushyant"onChange={handleInputChange} />{' '}Dushyant Rice Mill</label>
                </div>

                <div>
                    <label className='p-2 hover:text-sky-500'><input type="radio" name='mill' value="tulsi" onChange={handleInputChange}/>{' '}Tulsi Rice mill</label>
                </div>
            </fieldset>
            <fieldset className='inline float-right mt-[25px]'>
                <label className='block text-sm font-medium text-slate-700'>Do Date <span className=' text-red-600 text-[16px]'>(Required*)</span><br/> <input className='mt-1 block w-80 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type="date" value={doData.doDate} onChange={handleInputChange} name="Agreement-number"/></label><br />
            </fieldset>
            <fieldset className='flex flex-wrap justify-between w-full h-fit mb-5'>
                    <label className=' block text-sm font-medium text-slate-700 '>Do_Number  <span className=' text-red-600 text-[16px] '>(Required*)</span><br /> <input className='mt-1 block w-[23em] py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type="text" value={doData.doNumber} onChange={handleInputChange} name="Do_Number"/></label><br />
                    <label className=' block text-sm font-medium text-slate-700 ' for="Select_Agreement">Select_Agreement  <span className=' text-red-600 text-[16px] '>(Required*)</span><br /><select name="selectAgreement" value={doData.selectAgreement} onChange={handleInputChange}placeholder='Fill Out Other Fields' className='mt-1 block w-[23em] py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'> <option value="">Select Agreement</option>{doData.agreements && doData.agreements.map((agreement) => (<option key={agreement.id} value={agreement.id}>{agreement.name}</option>))}</select><h2 className=' text-[14px] block subpixel-antialiased leading-6 text-gray-900'>Can't Find your agreement?<Link to="/Add_Agreement"> <span className=' text-blue-600 '>Add Agreement..</span></Link></h2></label>
            </fieldset>
            <fieldset className='flex flex-wrap justify-between w-full h-fit'>
                 
                    <label className=' block text-sm font-medium text-slate-700 mb-4' >Mota_Weight<span className=' text-red-600 text-[16px] '>(Required*)</span><br /> <input className='mt-1 block w-[23em] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type='Mota_Weight' name='motaWeight' value={doData.motaWeight} onChange={handleInputChange}/></label>
               
                    <label className=' block text-sm font-medium text-slate-700 mb-4'>Mota_Bardana<span className=' text-red-600 text-[16px] '>(Required*)</span><br /><input className='mt-1 block w-[23em] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type='text' name='Mota_Bardana' value={doData.motaBardana} onChange={handleInputChange}/></label> 
                    
                 
                    <label className=' block text-sm font-medium text-slate-700 mb-4'>Patla_Weight<span className=' text-red-600 text-[16px] '>(Required*)</span><br /><input className='mt-1 block w-[23em] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type="text" value={doData.patlaWeight} onChange={handleInputChange} name="Patla_Weight"/></label>
                 
                    <label className=' block text-sm font-medium text-slate-700 mb-4' >Patla_Bardana  <span className=' text-red-600 text-[16px] '>(Required*)</span><br /><input className='mt-1 block w-[23em] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type='text' name='Patla_Bardana' value={doData.patlaBardana} onChange={handleInputChange} /></label>
         
                    <label className=' block text-sm font-medium text-slate-700 mb-4'>Sarna_Weight  <span className=' text-red-600 text-[16px] '>(Required*)</span><br /><input className='mt-1 block w-[23em] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type='text' name='Sarna_Weight' value={doData.sarnaWeight} onChange={handleInputChange} /></label>
                 
                    <label className=' block text-sm font-medium text-slate-700 mb-4'>Sarna_Bardana  <span className=' text-red-600 text-[16px] '>(Required*)</span><br /><input className='mt-1 block w-[23em] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type='text' name='Sarna_Bardana' value={doData.sarnaBardana} onChange={handleInputChange} /></label>
            
                    <label className=' block text-sm font-medium text-slate-700 mb-4'>Total Weight  <span className=' text-red-600 text-[16px] '>(Required*)</span><br /><input className='mt-1 block w-[23em] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type="text" value={doData.totalWeight} onChange={handleInputChange} name="Total Weight"/></label>
      
                    <label className=' block text-sm font-medium text-slate-700 mb-4'>Total_Bardana  <span className=' text-red-600 text-[16px] '>(Required*)</span><br /><input className='mt-1 block w-[23em] px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500' type='text' name='Total_Bardana' value={doData.totalBardana} onChange={handleInputChange} /></label>   
            </fieldset>
            <fieldset className='w-full h-fit'>
            <label className='mb-5 block text-sm font-medium text-slate-700'>
  Society <span className='text-red-600 text-[16px] '>(Required*)</span><br />
  <select
    className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
    name="society"
    value={doData.society}
    onChange={handleInputChange}
  >
    <option value="">Select Society</option>
    {doData.societies &&
      doData.societies.map((society) => (
        <option key={society.id} value={society.id}>
          {society.name}
        </option>
      ))}
  </select>
  <h2 className='text-[14px] block subpixel-antialiased leading-6 text-gray-900'>
    Cannot Find Society?
    <Link to="/Add_NEw_Society">
      <span className='text-blue-600'>Add New Society..</span>
    </Link>
  </h2>
</label>

<label className='block text-sm font-medium text-slate-700'>
  Truck Number <span className='text-red-600 text-[16px] '>(Required*)</span><br />
  <select
    className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm focus:outline-none hover:border-sky-500 focus:border-sky-500 focus:ring-1 focus:ring-sky-500'
    name="truckNumber"
    value={doData.truckNumber}
    onChange={handleInputChange}
  >
    <option value="">Select Truck Number</option>
    {doData.truckNumbers &&
      doData.truckNumbers.map((truckNumber) => (
        <option key={truckNumber.id} value={truckNumber.id}>
          {truckNumber.number}
        </option>
      ))}
  </select>
  <h2 className='text-[14px] block subpixel-antialiased leading-6 text-gray-900'>
    Cannot Find Truck?
    <Link to="/Add_NEw_Truck">
      <span className='text-blue-600'>Add New Truck..</span>
    </Link>
  </h2>
</label>

            </fieldset>
        <button type='submit' className='m-5 hover:bg-sky-950 w-1/3 h-10 bg-sky-600 text-white rounded-[4px]'>Add Do</button>
      </form>
    </div>
  );
};

export default Add_Do;
