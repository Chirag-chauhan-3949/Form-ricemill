import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Kochia = () => {
  const [kochiaData, setkochiaData] = useState({
    rice_mill_name_id: "",
    kochia_name: "",
    kochia_phone_number: 0,
  });
  const [DoOptions, setDoOptions] = useState([]);

  // Fetch data for the "Select Rice Mill" dropdown
  useEffect(() => {
    async function fetchMillData() {
      try {
        const Mill_response = await axios.get(
          "http://localhost:8000/rice-mill"
        );

        const data = Mill_response.data;
        setDoOptions(data);
        // console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchMillData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setkochiaData({
      ...kochiaData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/kochia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(kochiaData),
      });

      if (response.ok) {
        console.log("Kochia added successfully");
        toast.success("Kochia added successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.error("Failed to add Kochia");
        toast.error("Failed to add Kochia", {
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
      toast.error("Error adding Kochia", {
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
            Add New Kochia
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="rice_mill_name_id"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Select Rice Mill
                </label>
                <div className="mt-2">
                  <select
                    // required
                    type="text"
                    name="rice_mill_name_id"
                    className="block  w-full bg-white rounded-md  border-0 px-1.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={kochiaData.rice_mill_name_id}
                    onChange={handleInputChange}
                  >
                    <option value="">-Select Rice Mill-</option>
                    {DoOptions.map((option) => (
                      <option
                        key={option.rice_mill_id}
                        value={option.rice_mill_id}
                      >
                        {option.rice_mill_name}
                      </option>
                    ))}
                  </select>
                  <p className="mt-2 text-sm text-gray-500">
                    Cannot Find Rice Mill?{" "}
                    <a
                      href="/Addricemill"
                      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                      Add New Rice Mill..
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="kochia_name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Kochia Name
                  </label>
                  <span className="text-sm leading-6 text-red-500">
                    Required
                  </span>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    name="kochia_name"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter transporter name"
                    value={kochiaData.kochia_name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="kochia_phone_number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Kochia Phone Nu.
                  </label>
                  <span className="text-sm leading-6 text-red-500">
                    Required
                  </span>
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    pattern=""
                    name="kochia_phone_number"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="6234873298"
                    value={kochiaData.kochia_phone_number}
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
                  Add New Kochia
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

export default Kochia;