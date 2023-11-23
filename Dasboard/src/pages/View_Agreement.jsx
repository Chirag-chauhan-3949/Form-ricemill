import axios from 'axios';
import React, { useState, useEffect } from 'react';
function View_Agreement() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/agreements')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="shadow-md h-fit w-fit pb-6 rounded p-10 bg-white">
      <h1 className="flex items-center justify-center font-bold tracking-normal text-3xl h-fit w-full m-3 bg-white text-[#005B88] leading-6">Truck Details</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-sky-500 text-white">
              <th className="py-2 px-4 border-b border-r">Mill</th>
              <th className="py-2 px-4 border-b border-r">Agreement Number</th>
              <th className="py-2 px-4 border-b border-r">Mota</th>
              <th className="py-2 px-4 border-b border-r">Patla</th>
              <th className="py-2 px-4 border-b border-r">Sarna</th>
              <th className="py-2 px-4 border-b border-r">Lot From</th>
              <th className="py-2 px-4 border-b border-r">Lot To</th>
              <th className="py-2 px-4 border-b border-r">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((Agreement, index) => (
              <tr key={index} className='bg-gray-50'>
                <td className="py-2 px-4 border-b border-r subpixel-antialiased leading-6 text-gray-900">{Agreement.mill}</td>
                <td className="py-2 px-4 border-b subpixel-antialiased leading-6 text-gray-900">{Agreement.agreement_number}</td>
                <td className="py-2 px-4 border-b border-r subpixel-antialiased leading-6 text-gray-900">{Agreement.mota}</td>
                <td className="py-2 px-4 border-b border-r subpixel-antialiased leading-6 text-gray-900">{Agreement.patla}</td>
                <td className="py-2 px-4 border-b border-r subpixel-antialiased leading-6 text-gray-900">{Agreement.sarna}</td>
                <td className="py-2 px-4 border-b border-r subpixel-antialiased leading-6 text-gray-900">{Agreement.lot_from}</td>
                <td className="py-2 px-4 border-b border-r subpixel-antialiased leading-6 text-gray-900">{Agreement.lot_to}</td>
                <td className="py-2 px-4 border-b border-r subpixel-antialiased leading-6 text-gray-900">{Agreement.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default View_Agreement
