import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
const Dhantransporting = () => {
  const [dhantransportingData, setdhantransportingData] = useState({
    rst_number_id: "",
    date: "",
    do_number_id: "",
    society_name_id: "",
    rice_mill_name_id: "",
    dm_weight: 0,
    truck_number_id: "",
    numbers_of_bags: 0,
    transporting_total: 0,
    transporter_name_id: "",
    status: "",
    total_pending: 0,
    total_paid: 0,
  });
  // Fetch data for the "Do" dropdown
  const [dopandingData, setdopandingData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("http://localhost:8000/add-do-data");
        const data = response.data;
        setdopandingData(data);
        // console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchData();
  }, []);

  // Fetch data for the "Society" dropdown
  const [societies, setSocieties] = useState([]);
  useEffect(() => {
    async function fetchsociety() {
      try {
        const society_response = await axios.get(
          "http://localhost:8000/societies/"
        );

        const data = society_response.data;
        setSocieties(data);
        // console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchsociety();
  }, []);

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

  // Fetch data for the "Select transporter" dropdown
  const [transpoterOptions, setTransporterOptions] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const transporter_response = await axios.get(
          "http://localhost:8000/transporters/"
        );

        const data = transporter_response.data;
        setTransporterOptions(data);
        // console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchData();
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

  const [rstData, setrstData] = useState([]);
  useEffect(() => {
    async function fetchrst() {
      try {
        const rst_response = await axios.get(
          "http://localhost:8000/dhan-awak-data"
        );

        const data = rst_response.data;
        setrstData(data);
        // console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchrst();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setdhantransportingData({
      ...dhantransportingData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    console.log(dhantransportingData);
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/dhan-transporting",
        dhantransportingData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        console.log("Form data sent successfully");
        toast.success("Dhan Transporting added successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.error("Failed to send form data");
        toast.error("Failed to add Dhan Transporting", {
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
      toast.error("Error Adding Dhan Transporting", {
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
            Add Dhan Transporting
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[680px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="my-2.5">
                <label
                  htmlFor="rst_number_id"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  RST Number
                </label>

                <div className="mt-2">
                  <select
                    name="rst_number_id"
                    type="text"
                    value={dhantransportingData.rst_number_id}
                    className=" bg-white min-w-[250px] block w-full px-1.5 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  >
                    <option value="">Select rst</option>
                    {rstData.map((option) => (
                      <option
                        key={option.dhan_awak_id}
                        value={option.dhan_awak_id}
                      >
                        {option.rst_number}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Date
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    value={dhantransportingData.date}
                    onChange={handleInputChange}
                    type="date"
                    name="date"
                    className="block px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="society_name_id"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Society
                    </label>
                  </div>
                  <div className="mt-2">
                    <select
                      name="society_name_id"
                      type="text"
                      value={dhantransportingData.society_name_id}
                      className="bg-white block w-full px-1.5 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    >
                      <option value="">Select a society</option>
                      {societies.map((societie) => (
                        <option
                          key={societie.society_id}
                          value={societie.society_id}
                        >
                          {societie.society_name}
                        </option>
                      ))}
                    </select>
                    <p className="mt-2  text-sm text-gray-500">
                      Cannot Find Society?{" "}
                      <a
                        href="/Add_New_Society"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                      >
                        Add New Society.
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="do_number_id"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      DO Numbar
                    </label>
                  </div>
                  <div className="mt-2">
                    <select
                      type="text"
                      name="do_number_id"
                      value={dhantransportingData.do_number_id}
                      className="block  min-w-[250px] bg-white rounded-md  border-0 px-1.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    >
                      <option value="">-Select Do Number-</option>
                      {dopandingData.map((option) => (
                        <option key={option.do_id} value={option.do_id}>
                          {option.do_number}
                        </option>
                      ))}
                    </select>
                    <p className="mt-2 text-sm text-gray-500">
                      Cannot Find Do?{" "}
                      <a
                        href="/Add_Do"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                      >
                        Add New Do..
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
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
                      type="text"
                      name="rice_mill_name_id"
                      className="block  w-full bg-white rounded-md  border-0 px-1.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={dhantransportingData.rice_mill_name_id}
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
                    <p className="mt-2 flex flex-wrap text-sm text-gray-500">
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

                  <div className="mt-2">
                    <select
                      name="truck_number_id"
                      type="text"
                      value={dhantransportingData.truck_number_id}
                      className=" bg-white block min-w-[250px] px-1.5 rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="dm_weight"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      DM Weight
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="dm_weight"
                      value={dhantransportingData.dm_weight}
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="numbers_of_bags"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Number of Bags
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="numbers_of_bags"
                      value={dhantransportingData.numbers_of_bags}
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="transporter_name_id"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Select Transporter
                </label>
                <div className="mt-2">
                  <select
                    required
                    name="transporter_name_id"
                    type="text"
                    className="block  w-full bg-white rounded-md  border-0 px-1.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={dhantransportingData.transporter_name_id}
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
                  <p className="mt-2 text-sm text-gray-500">
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

              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="transporting_total"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Transporting Total
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="transporting_total"
                      value={dhantransportingData.transporting_total}
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="">
                  <div className="flex justify-between">
                    <label
                      htmlFor="status"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Status
                    </label>
                  </div>
                  <div className="">
                    <select
                      value={dhantransportingData.status}
                      onChange={handleInputChange}
                      type="text"
                      name="status"
                      className="bg-white min-w-[250px] block w-full px-1.5 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="paid">Paid</option>
                      <option value="pending">Pending</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="total_pending"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Total Pending
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="total_pending"
                      value={dhantransportingData.total_pending}
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="total_paid"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Total Paid
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="total_paid"
                      value={dhantransportingData.total_paid}
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add Dhan Transporting
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

export default Dhantransporting;
