import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addricemill = () => {
  const [Addricedata, setAddricedata] = useState({
    gst_number: "",
    rice_mill_name: "",
    mill_address: "",
    phone_number: "",
    rice_mill_capacity: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddricedata({
      ...Addricedata,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/society/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Addricedata),
      });

      if (response.ok) {
        console.log("Rice mill added successfully");
        toast.success("Rise mill added successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.error("Failed to add rice mill");
        toast.error("Failed to add rice mill", {
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
      toast.error("Error adding rice mill", {
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
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="rice_mill_name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Select Rice Mill
                  </label>
                </div>
                <div className="mt-1">
                  <select
                    value={Addricedata.rice_mill_name}
                    onChange={handleInputChange}
                    type="text"
                    name="rice_mill_name"
                    className="bg-white block w-full px-1.5 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Select a Rice Mill</option>
                    <option value="Purushotam">Purushotam Rice Mill</option>
                    <option value="Dushyant">Dushyant Rice Mill</option>
                    <option value="Tulsi">Tulsi Rice Mill</option>
                  </select>
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="gst_number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    GST Number
                  </label>
                  <span className="text-sm leading-6 text-red-500">
                    Required
                  </span>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    name="gst_number"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={Addricedata.gst_number}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="mill_address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Mill Address
                  </label>
                  <span className="text-sm leading-6 text-red-500">
                    Required
                  </span>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    name="mill_address"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter distance from mill"
                    value={Addricedata.mill_address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="phone_number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <span className="text-sm leading-6 text-red-500">
                    Required
                  </span>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    name="phone_number"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={Addricedata.phone_number}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="rice_mill_capacity"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Rice Mill Capacity
                  </label>
                  <span className="text-sm leading-6 text-red-500">
                    Required
                  </span>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    name="rice_mill_capacity"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={Addricedata.rice_mill_capacity}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add Rice Mill
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

export default Addricemill;
