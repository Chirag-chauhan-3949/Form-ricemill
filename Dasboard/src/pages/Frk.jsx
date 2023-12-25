import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Frk = () => {
  const [frkData, setfrskData] = useState({
    batch_number: 0,
    date: "",
    party: "",
    bags: 0,
    weight: "",
    truck_number_id: "",
    rice_mill_name_id: "",
    bill_number: 0,
    rate: 0,
  });

  // Fetch data for the "Select Rice Mill" dropdown
  const [millData, setmillData] = useState([]);
  useEffect(() => {
    async function fetchMillData() {
      try {
        const Mill_response = await axios.get(
          "http://localhost:8000/rice-mill"
        );

        const data = Mill_response.data;
        setmillData(data);
        // console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchMillData();
  }, []);
  // Fetch data for the "truck" dropdown
  const [trucks, setTrucks] = useState([]);
  useEffect(() => {
    async function fetchTransporter() {
      try {
        const transporter_response = await axios.get(
          "http://localhost:8000/trucks/"
        );

        const data = transporter_response.data;
        setTrucks(data);
        // console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchTransporter();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setfrskData({
      ...frkData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(frkData);

    try {
      const response = await axios.post("http://localhost:8000/frk", frkData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 201 || response.status === 300) {
        // console.log("frk added successfully");
        toast.success("frk added successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.error("Failed to add frk");
        toast.error("Failed to add frk", {
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
      toast.error("Error adding frk", {
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
            Add Frk
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex justify-between flex-wrap">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Date
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="date"
                      name="date"
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                      value={frkData.date}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="party"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      party
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="party"
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                      value={frkData.party}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between flex-wrap">
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Weight
                  </label>
                  <input
                    type="number"
                    name="weight"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={frkData.weight}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Bags
                  </label>
                  <input
                    type="number"
                    name="bags"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={frkData.bags}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="rice_mill_name_id"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Select Rice Mill
                </label>
                <div className="mt-2">
                  <select
                    required
                    type="number"
                    name="rice_mill_name_id"
                    className="block  w-full bg-white rounded-md  border-0 px-1.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={frkData.rice_mill_name_id}
                    onChange={handleInputChange}
                  >
                    <option value="">-Select Rice Mill-</option>
                    {millData.map((option) => (
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
                <label
                  htmlFor="truck_number_id"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  truck Number
                </label>

                <div className="mt-1">
                  <select
                    name="truck_number_id"
                    type="number"
                    value={frkData.truck_number_id}
                    className=" bg-white block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  >
                    <option value="">Select a Truck</option>
                    {trucks.map((truck) => (
                      <option key={truck.truck_id} value={truck.truck_id}>
                        {truck.truck_number}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Cannot Find Truck?{" "}
                  <a
                    href="/Add_NEw_Truck"
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Add New Truck.
                  </a>
                </p>
              </div>
              <div className="flex justify-between flex-wrap">
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Bill Number
                  </label>
                  <input
                    type="number"
                    name="bill_number"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={frkData.bill_number}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="Rate"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Rate
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="rate"
                      value={frkData.rate}
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="batch_number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Batch Number
                  </label>
                </div>
                <div className="mt-1">
                  <input
                    type="number"
                    name="batch_number"
                    value={frkData.batch_number}
                    className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add FRK
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

export default Frk;
