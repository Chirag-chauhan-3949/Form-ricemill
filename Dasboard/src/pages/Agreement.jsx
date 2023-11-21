import React from 'react';

const Add_Agreement = () => {
    return (
        <div className='ml-[400px] h-fit pb-6 w-8/12 border-[#000000d7] border-[5px] rounded'>
            <h1 className='flex items-center justify-center font-mono font-bold tracking-normal text-3xl h-10 w-full bg-[#000000d7] text-[#ffffff]'>Add Agreement</h1>
            <h2 className='block subpixel-antialiased font-mono pt-[10px] pl-[18px]'>Add Government Agreements</h2>
            <form>
                <fieldset className='pl-[18px] border-[2px] inline ml-[53px] mt-2 p-3'>
                    <legend className='font-bold'>Select Mill</legend>
                    <div >
                         <input type="radio" id="Purushottam" name='mill' value="Purushottam"/>
                         <label className='p-2' for="Purushottam">Purushottam Rice Mill</label>
                    </div>

                    <div>
                        <input type="radio" id="Dushyant" name='mill' value="Dushyant" />
                        <label className='p-2' for="Dushyant">Dushyant Rice Mill</label>
                    </div>

                    <div>
                        <input type="radio" id="tulsi" name='mill' value="tulsi" />
                        <label className='p-2' for="tulsi">Tulsi Rice mill</label>
                    </div>
                </fieldset>
                <fieldset className='inline float-right mt-[25px]'>
                    <label className=' text-lg ' For="Agreement-number">Agreement Number</label><br />
                    <input className='mr-[50px] border-black rounded border-[1px] h-9 w-80 p-1' type="text" id="Agreement-number" name="Agreement-number"/>
                </fieldset>
                <fieldset className='flex flex-wrap justify-evenly  h-[240px] m-[13px]'>
                     <div>
                        <label className=' text-lg ml-3' for="Mota">Mota</label><br /> 
                        <input className='border-black rounded border-[1px] h-9 w-60 p-1 m-3' type="text" id="Mota" name="Mota"/>
                     </div>
                     <div>
                        <label className=' text-lg ml-3' for="Patla">Patla</label><br /> 
                        <input className='border-black rounded border-[1px] h-9 w-60 p-1 m-3' type='text' name='Patla' id='Patla'></input>
                     </div>
                     <div >
                        <label className=' text-lg ml-3' for="Sarna">Sarna</label><br /> 
                        <input className='border-black rounded border-[1px] h-9 w-60 p-1 m-3' type='text' name='Sarna' id='Sarna'></input>
                     </div>
                     <div >
                        <label className=' text-lg ml-3' for="Lot-from">Lot From</label><br /> 
                        <input className='border-black rounded border-[1px] h-9 w-60 p-1 m-3' type='text' name='Lot-from' id='Lot-from'></input>
                     </div>
                     <div >
                        <label className=' text-lg ml-3' for="Lot-to">Lot To</label><br /> 
                        <input className='border-black rounded border-[1px] h-9 w-60 p-1 m-3' type='text' name='Lot-to' id='Lot-to'></input>
                     </div>
                     <div>
                        <label className=' text-lg ml-3' for="Total">Total</label><br /> 
                        <input className='border-black rounded border-[1px] h-9 w-60 p-1 m-3' type='number ' name='Total' id='Total'></input>
                     </div>
                </fieldset>
                <button className='ml-[58px] w-40 h-10 bg-black text-white rounded-[4px]'>Add Agreement</button>
            </form>
        </div>
    );
};

export default Add_Agreement;