import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ViewSocieties() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/societies')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="shadow-md h-fit w-fit pb-6 rounded p-10 bg-white">
      <h1 className="flex items-center justify-center font-bold tracking-normal text-3xl h-fit w-full m-3 bg-white text-[#005B88] leading-6">Society Details</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-sky-500 text-white">
              <th className="py-2 px-4 border-b border-r">Society Name</th>
              <th className="py-2 px-4 border-b border-r">Distance From Mill</th>
              <th className="py-2 px-4 border-b">Transporting Rate</th>
            </tr>
          </thead>
          <tbody>
            {data.map((Society, index) => (
              <tr key={index} className={(index % 2 === 0) ? 'bg-gray-50' : 'bg-gray-50'}>
                <td className="py-2 px-4 border-b border-r subpixel-antialiased leading-6 text-gray-900">{Society.society_name}</td>
                <td className="py-2 px-4 border-b border-r subpixel-antialiased leading-6 text-gray-900">{Society.distance_from_mill}</td>
                <td className="py-2 px-4 border-b subpixel-antialiased leading-6 text-gray-900">{Society.transporting_rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewSocieties;
