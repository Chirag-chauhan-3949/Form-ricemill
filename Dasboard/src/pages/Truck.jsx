import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Add_New_Truck = () => {
  const [truckData, setTruckData] = useState({
    truck_number: "",
    transport_id: 0,
  });

  const [transpoterOptions, setTransporterOptions] = useState([]);

  // Fetch data for the "Select transporter" dropdown
  useEffect(() => {
    async function fetchData() {
      try {
        const transporter_response = await axios.get(
          "http://localhost:8000/transporters/"
        );
        if (
          transporter_response.status >= 200 &&
          transporter_response.status < 300
        ) {
          const data = transporter_response.data;
          setTransporterOptions(data);
          console.log(data);
        } else {
          console.error("Failed to fetch transporters");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchData();
  }, []);

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log(value);
  //   setTruckData({
  //     ...truckData,
  //     [name]: value,
  //   });
  // };
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setTruckData({
      ...truckData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(truckData);

    try {
      const response = await axios.post(
        "http://localhost:8000/truck/",
        truckData
      );

      console.log(response.data);

      if (response.status === 201) {
        console.log("Truck added successfully");
        toast.success("Truck added successfully", { autoClose: 2000 });
      } else {
        console.error("Failed to add truck");
        toast.error("Failed to add truck");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add New Truck
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="truck_number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Truck Number
                  </label>
                  <span
                    className="text-sm leading-6 text-red-500"
                    id="email-optional"
                  >
                    Required
                  </span>
                </div>
                <div className="mt-2">
                  <input
                    required
                    type="text"
                    name="truck_number"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="CG04KP1234"
                    value={truckData.truck_number}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="transport_id"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Select Transporter
                </label>
                <div className="mt-2">
                  <select
                    required
                    name="transport_id"
                    className="block  w-full bg-white rounded-md  border-0 px-1.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={truckData.transport_id}
                    onChange={handleInputChange}
                  >
                    <option value="">-Select a transporter-</option>
                    {transpoterOptions.map((option) => (
                      <option
                        key={option.transporter_id}
                        value={option.transporter_id}
                      >
                        {option.transporter_name}
                      </option>
                    ))}
                  </select>
                  <p className="mt-2 text-center text-sm text-gray-500">
                    Cannot Find Transporter?{" "}
                    <a
                      href="/Add_NEw_Transporter"
                      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                      Add New Transporter.
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add New Truck
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

export default Add_New_Truck;
