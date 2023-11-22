import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewTransporter() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="shadow-md h-fit w-fit pb-6 rounded p-10 bg-white">
      <h1 className="flex items-center justify-center font-bold tracking-normal text-3xl h-fit w-full m-3 bg-white text-[#005B88] leading-6">Transporter Details</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-sky-500 text-white">
              <th className="py-2 px-4 border-b border-r">Transporter Name</th>
              <th className="py-2 px-4 border-b">Phone</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index} className='bg-gray-50'>
                <td className="py-2 px-4 border-b border-r subpixel-antialiased leading-6 text-gray-900">{user.transporter_name}</td>
                <td className="py-2 px-4 border-b subpixel-antialiased leading-6 text-gray-900">{user.transporter_phone_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewTransporter;
