import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const AddNewSociety = () => {
  const [societyData, setSocietyData] = useState({
    society_name: "",
    distance_from_mill: 0,
    transporting_rate: 0,
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
      const response = await axios.post(
        "http://localhost:8000/society/",
        societyData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        console.log("Society added successfully");
        toast.success("Society added successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.error("Failed to add society");
        toast.error("Failed to add society", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error adding society", {
        position: "top-right",
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
                  <label
                    htmlFor="society_name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Society Name
                  </label>
                  <span className="text-sm leading-6 text-red-500">
                    Required
                  </span>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    name="society_name"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter society name"
                    value={societyData.society_name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              {/* Distance Input */}
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="distance_from_mill"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Distance From Mill
                  </label>
                  <span className="text-sm leading-6 text-red-500">
                    Required
                  </span>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    name="distance_from_mill"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter distance from mill"
                    value={societyData.distance_from_mill}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              {/* Transporting Input */}
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="transporting_rate"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Transporting Rate
                  </label>
                  <span className="text-sm leading-6 text-red-500">
                    Required
                  </span>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    name="transporting_rate"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter transporting rate"
                    value={societyData.transporting_rate}
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
