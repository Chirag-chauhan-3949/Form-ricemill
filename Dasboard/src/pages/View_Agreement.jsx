import axios from "axios";
import React, { useState, useEffect } from "react";
function View_Agreement() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/agreements")
      .then((res) => setdata(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Agreements
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A table of placeholder stock market data that does not make any
            sense.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Export
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th className="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Mill
                  </th>
                  <th className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Agreement Number
                  </th>
                  <th className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Mota
                  </th>
                  <th className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Patla
                  </th>
                  <th className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Sarna
                  </th>
                  <th className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Lot From
                  </th>
                  <th className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Lot To
                  </th>
                  <th className="whitespace-nowrap px-2 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {data.map((Agreement, index) => (
                  <tr key={index} className="bg-gray-50">
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                      {Agreement.mill}
                    </td>
                    <td className="py-2 px-4 border-b subpixel-antialiased leading-6 text-gray-900">
                      {Agreement.agreement_number}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                      {Agreement.mota}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                      {Agreement.patla}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                      {Agreement.sarna}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                      {Agreement.lot_from}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                      {Agreement.lot_to}
                    </td>
                    <td className="whitespace-nowrap py-2 pl-4 pr-3 text-sm text-gray-500 sm:pl-0">
                      {Agreement.total}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View_Agreement;
