import React from 'react';
import { Link } from 'react-router-dom'
const  Add_Do= () => {
    return (
        <div className='ml-[400px] h-fit pb-6 w-7/12 border-[#000000d7] border-[5px] rounded'>
        <h1 className='flex items-center justify-center font-mono font-bold tracking-normal text-3xl h-10 w-full bg-[#000000d7] text-[#ffffff]'>Add Agreement</h1>
        <h2 className='block subpixel-antialiased font-mono pt-[10px] pl-[18px]'>Add Government Agreements</h2>
        <form>
            <fieldset className='pl-[18px] border-[2px] inline ml-[53px] mt-2 p-3'>
                <legend className='font-bold'>Select Mill</legend>
                <div >
                     <input type="radio" name='mill' id="Purushottam" value="Purushottam"/>
                     <label className='p-2' for="Purushottam">Purushottam Rice Mill</label>
                </div>

                <div>
                    <input type="radio" name='mill' id="Dushyant" value="Dushyant" />
                    <label className='p-2' for="Dushyant">Dushyant Rice Mill</label>
                </div>

                <div>
                    <input type="radio" name='mill' id="tulsi"value="tulsi" />
                    <label className='p-2' for="tulsi">Tulsi Rice mill</label>
                </div>
            </fieldset>
            <fieldset className='inline float-right '>
                <label className=' text-lg ' For="Agreement-number">Do Date <span className=' text-red-600 text-[16px]'>(Required*)</span></label><br />
                <input className='mr-[50px] border-black rounded border-[1px] h-9 w-80 p-1' type="date" id="Agreement-number" name="Agreement-number"/>
            </fieldset>
            <fieldset className='flex flex-wrap justify-evenly  m-[13px] gap-8'>
                 <div>
                    <label className=' text-lg ' for="D0_Number">Do_Number  <span className=' text-red-600 text-[16px] '>(Required*)</span></label><br /> 
                    <input className='border-black rounded border-[1px] h-9 w-80 p-1' type="text" id="Do_Number" name="Do_Number"/>
                 </div>
                 <div>
                    <label className=' text-lg ' for="Select_Agreement">Select_Agreement  <span className=' text-red-600 text-[16px] '>(Required*)</span></label><br /> 
                    <select name="Select_Agreement" id="Select_Agreement" placeholder='Fill Out Other Fields' className='border-black rounded border-[1px] h-9 w-80 p-1'></select>
                    <h2 className='text-[16px]'>Can't Find your agreement?<Link to="/Add_Agreement"> <span className=' text-blue-600 '>Add Agreement..</span></Link></h2>
                 </div>
                 <div >
                    <label className=' text-lg ' for="Mota_Weight">Mota_Weight  <span className=' text-red-600 text-[16px] '>(Required*)</span></label><br /> 
                    <input className='border-black rounded border-[1px] h-9 w-80 p-1' type='Mota_Weight' id='Mota_Weight'></input>
                 </div>
                 <div >
                    <label className=' text-lg ' for="Mota_Bardana">Mota_Bardana  <span className=' text-red-600 text-[16px] '>(Required*)</span></label><br /> 
                    <input className='border-black rounded border-[1px] h-9 w-80 p-1' type='text' name='Mota_Bardana' id='Mota_Bardana'></input>
                 </div>
                 <div>
                    <label className=' text-lg ' for="Patla_Weight">Patla_Weight  <span className=' text-red-600 text-[16px] '>(Required*)</span></label><br /> 
                    <input className='border-black rounded border-[1px] h-9 w-80 p-1' type="text" id="Patla_Weight" name="Patla_Weight"/>
                 </div>
                 <div>
                    <label className=' text-lg ' for="Patla_Bardana">Patla_Bardana  <span className=' text-red-600 text-[16px] '>(Required*)</span></label><br /> 
                    <input className='border-black rounded border-[1px] h-9 w-80 p-1' type='text' name='Patla_Bardana' id='Patla_Bardana'></input>
                 </div>
                 <div >
                    <label className=' text-lg ' for="Sarna_Weight">Sarna_Weight  <span className=' text-red-600 text-[16px] '>(Required*)</span></label><br /> 
                    <input className='border-black rounded border-[1px] h-9 w-80 p-1' type='text' name='Sarna_Weight' id='Sarna_Weight'></input>
                 </div>
                 <div >
                    <label className=' text-lg ' for="Sarna_Bardana">Sarna_Bardana  <span className=' text-red-600 text-[16px] '>(Required*)</span></label><br /> 
                    <input className='border-black rounded border-[1px] h-9 w-80 p-1' type='text' name='Sarna_Bardana' id='Sarna_Bardana'></input>
                 </div>
                 <div>
                    <label className=' text-lg ' for="Total Weight">Total Weight  <span className=' text-red-600 text-[16px] '>(Required*)</span></label><br /> 
                    <input className='border-black rounded border-[1px] h-9 w-80 p-1' type="text" id="Total Weight" name="Total Weight"/>
                 </div>
                 <div>
                    <label className=' text-lg ' for="Total_Bardana">Total_Bardana  <span className=' text-red-600 text-[16px] '>(Required*)</span></label><br /> 
                    <input className='border-black rounded border-[1px] h-9 w-80 p-1' type='text' name='Total_Bardana' id='Total_Bardana'></input>
                 </div>     
            </fieldset>
            <fieldset className='m-[13px] border-1 border-black p-[55px]'>
                <label className='text-lg' For="Society">Society <span className=' text-red-600 text-[16px] '>(Required*)</span></label><br />
                <select className='p-5 border-[1px] bg-white border-black h-9 rounded w-full' name="Society" id="Society"></select>
                <h2 className='mb-8'>Cannot Find Society?<Link to="/Add_NEw_Society"> <span className=' text-blue-600 '>Add New Society..</span></Link></h2>
                <label className='text-lg' For="Truck_Number">Truck Number <span className=' text-red-600 text-[16px] '>(Required*)</span></label><br />
                <select className='p-6 border-[1px] bg-white border-black h-9 rounded w-full' name="Truck_Numebr" id="Truck_Numebr"></select>
                <h2>Cannot Find Truck?<Link to="/Add_NEw_Truck"> <span className=' text-blue-600 '>Add New Truck..</span></Link></h2>
            </fieldset>
            <button className='ml-[58px] w-40 h-10 bg-black text-white rounded-[4px]'>Add Do</button>
        </form>
    </div>
    );
};

export default Add_Do;