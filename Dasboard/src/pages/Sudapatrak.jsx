import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Saudapatrak = () => {
  const [saudapatrakData, setsaudapatrakData] = useState({
    name: "",
    address: "",
    vehical: "",
    paddy: "",
    baga: "",
    weight: "",
    rate: "",
    amout: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setsaudapatrakData({
      ...SaudapatrakData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000",
        saudapatrakData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201 || response.status === 300) {
        console.log("Sauda Patrak added successfully");
        toast.success("Sauda Patrak added successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.error("Failed to add Sauda patrak");
        toast.error("Failed to add Sauda patrak", {
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
      toast.error("Error adding  Sauda patrak", {
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
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add Sauda Patrak
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <div className="flex justify-between  my-3.5">
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Name
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter name"
                        className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                        value={saudapatrakData.date}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Address
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="address"
                        placeholder="Enter Address"
                        value={saudapatrakData.address}
                        className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-3.5">
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="vehicle"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Vehicle
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="vehicle"
                        placeholder="Enter Vehicle"
                        value={saudapatrakData.vehical}
                        className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="paddy"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Paddy
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="paddy"
                        placeholder="Enter Paddy"
                        value={saudapatrakData.paddy}
                        className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-3.5">
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="baga"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Baga
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        placeholder="Enter baga"
                        name="baga"
                        value={saudapatrakData.baga}
                        className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="weight"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Weight
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="weight"
                        placeholder="Enter Weight"
                        value={saudapatrakData.weight}
                        className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-3.5">
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="rate"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Rate
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="rate"
                        placeholder="Enter Rate"
                        value={saudapatrakData.rate}
                        className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="amount"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Amount
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        placeholder="Enter Amount"
                        name="amount"
                        value={saudapatrakData.amount}
                        className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex w-full mt-7 justify-center rounded-md bg-indigo-600 px-3 py-2.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add New Suda Patrak
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer position="top-right" />
    </>
  );
};

export default Saudapatrak;
