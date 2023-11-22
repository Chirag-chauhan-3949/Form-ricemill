import axios from 'axios';
import React, { useState, useEffect } from 'react';

function ViewTruck() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('YOUR_API_ENDPOINT')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="shadow-md h-fit w-fit pb-6 rounded p-10">
      <h1 className="text-3xl font-semibold mb-4">Truck Details</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b border-r">Truck Number</th>
              <th className="py-2 px-4 border-b">Transporter</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index} className={(index % 2 === 0) ? 'bg-gray-50' : 'bg-white'}>
                <td className="py-2 px-4 border-b border-r">{user.truck_number}</td>
                <td className="py-2 px-4 border-b">{user.transporter}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewTruck;
