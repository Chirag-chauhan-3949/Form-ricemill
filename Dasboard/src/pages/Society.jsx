import React from 'react';

const Add_New_Society = () => {
    return (
        <div className='ml-[400px] h-fit pb-6 w-8/12 border-[#000000] border-[10px] rounded'>
            <h1 className='flex items-center justify-center font-mono font-bold tracking-normal text-3xl h-20 w-full bg-[#000000] text-[#ffffff]'>Add New Society</h1>
            <form>
              <fieldset className='m-10 '>
                <label className=' text-lg' for='Name'>Society Name <span className=' text-red-900 font-bold '>(Required*)</span></label><br />            
                <input className='border-black rounded border-[1px] h-9 w-[450px] mt-2 p-1 mb-7' required type="text" name='Name' id='Name'></input><br />
                <label className=' text-lg' for='Distance'>Distance Form Mill<span className=' text-red-900 font-bold '>(Required*)</span></label><br />            
                <input className='border-black rounded border-[1px] h-9 w-[450px] mt-2 p-1 mb-7' required type="text" name='Distance' id='Distance'></input><br />
                <label className=' text-lg ' for='Transporting'>Transporting Rate<span className=' text-red-900 font-bold '>(Required*)</span></label><br />            
                <input className='border-black rounded border-[1px] h-9 w-[450px] mt-2 p-1 mb-5' required type="text" name='Transporting' id='Transporting'></input><br />
              </fieldset>
              <button className='ml-[58px] w-40 h-10 bg-black text-white rounded-[4px]'>Add New Society</button>
            </form>
        </div>
    );
};

export default Add_New_Society;