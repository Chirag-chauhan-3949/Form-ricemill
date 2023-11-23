import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddNewSociety = () => {
  const [societyData, setSocietyData] = useState({
    Name: '',
    Distance: '',
    Transporting: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSocietyData({
      ...societyData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/society/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(societyData),
      });

      if (response.ok) {
        console.log('Society added successfully');
        toast.success('Society added successfully', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.error('Failed to add society');
        toast.error('Failed to add society', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error adding society', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />

          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add New Society
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Society Name Input */}
              <div>
                <div className="flex justify-between">
                  <label htmlFor="Name" className="block text-sm font-medium leading-6 text-gray-900">
                    Society Name
                  </label>
                  <span className="text-sm leading-6 text-red-500">Required</span>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Name"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter society name"
                    value={societyData.Name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              {/* Distance Input */}
              <div>
                <div className="flex justify-between">
                  <label htmlFor="Distance" className="block text-sm font-medium leading-6 text-gray-900">
                    Distance From Mill
                  </label>
                  <span className="text-sm leading-6 text-red-500">Required</span>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Distance"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter distance from mill"
                    value={societyData.Distance}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              {/* Transporting Input */}
              <div>
                <div className="flex justify-between">
                  <label htmlFor="Transporting" className="block text-sm font-medium leading-6 text-gray-900">
                    Transporting Rate
                  </label>
                  <span className="text-sm leading-6 text-red-500">Required</span>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Transporting"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter transporting rate"
                    value={societyData.Transporting}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add New Society
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddNewSociety;
