import React from 'react';
import { Link } from 'react-router-dom'

const Add_New_Truck  = () => {
    return (
        <div className='ml-[400px] h-fit w-8/12 pb-6 border-[#000000] border-[10px] rounded'>
        <h1 className='flex items-center justify-center font-mono font-bold tracking-normal text-3xl h-12 w-full bg-[#000000] text-[#ffffff]'>Add New Truck</h1>
        <form>
          <fieldset className='m-10 '>
            <label className=' text-lg' for='Name'>Truck Number <span className=' text-red-900 font-bold '>(Required*)</span></label><br />            
            <input className='border-black rounded border-[1px] h-9 w-[450px] mt-2 p-1 mb-7' required type="text" name='Name' id='Name'></input><br />
            <label className=' text-lg' for='Transporter'>Select Transporter<span className=' text-red-900 font-bold '>(Required*)</span></label><br />            
            <select className='border-[1px] rounded-[4px] h-9 w-[450px] mb-2 border-black bg-white' id="Transporter" name="Transporter">
                    <option value=""></option>
                    <option value="saab">mnjsdb</option>
                    <option value="fiat">fksknfjsnk</option>
                    <option value="audi">jejesnj</option>
            </select>
            <h2 className='block subpixel-antialiased font-mono'>Cannot Find Transporter?<Link to="/Add_NEw_Transporter"> <span className=' text-blue-600 '>Add New Transporter..</span></Link></h2>
          </fieldset>
          <button className='ml-[45px] w-40 h-10 bg-black text-white rounded-[4px]'>Add New Truck</button>
        </form>
    </div>
    );
};

export default Add_New_Truck ;