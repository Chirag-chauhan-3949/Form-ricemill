import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Dhan_Awak = () => {
  const [DhanAwakData, setFormData] = useState({
    rst_number: 0,
    rice_mill_id: "",
    date: "",
    do_id: "",
    society_id: "",
    society_hidden_name: 0,
    dm_weight: "",
    number_of_bags: 0,
    truck_number_id: "",
    transporter_name_id: "",
    transporting_rate: 0,
    // transporting_rate_society_id: "",
    transporting_total: 0,
    jama_jute_22_23: 0,
    ek_bharti_21_22: 0,
    pds: 0,
    miller_purana: 0,
    kisan: 0,
    bardana_society: 0,
    hdpe_22_23: 0,
    hdpe_21_22: 0,
    hdpe_21_22_one_use: 0,
    total_bag_weight: 0,
    type_of_paddy: "",
    actual_paddy: "",
    mill_weight_quintals: "",
    shortage: 0,
    bags_put_in_hopper: 0,
    total_hopper_weight: "",
  });

  const [DoOptions, setDoOptions] = useState([]);

  // Fetch data for the "Select Rice Mill" dropdown
  useEffect(() => {
    async function fetchMillData() {
      try {
        const Mill_response = await axios.get(
          "http://localhost:8000/rice-do-society-truck-transporter"
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

  const [DoOptionsricedonumber, setDoOptionsRiceDoNumber] = useState([]);
  useEffect(() => {
    async function fetchricedonumberData() {
      try {
        const truck_transporter = await axios.get(
          `http://localhost:8000/rice-do-number/${DhanAwakData.rice_mill_id}`
        );

        const data = truck_transporter.data;
        setDoOptionsRiceDoNumber(data);
        // console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    if (DhanAwakData.rice_mill_id) {
      fetchricedonumberData();
    }
  }, [DhanAwakData.rice_mill_id]);

  const [DoOptionstrucktransporter, setDoOptionsTruckTransporter] = useState(
    []
  );
  useEffect(() => {
    async function fetchtrucktransporter() {
      try {
        const rice_do_number = await axios.get(
          `http://localhost:8000/truck-transporter/${DhanAwakData.transporter_name_id}`
        );

        const data = rice_do_number.data;
        setDoOptionsTruckTransporter(data);
        // console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    if (DhanAwakData.transporter_name_id) {
      fetchtrucktransporter();
    }
  }, [DhanAwakData.transporter_name_id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(value);
    setFormData({ ...DhanAwakData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(DhanAwakData);

    try {
      const response = await fetch("http://localhost:8000/dhan-awak", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(DhanAwakData),
      });

      if (response.ok) {
        console.log("Form data sent successfully");
        toast.success("Form data added successfully", {
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
        toast.error("Failed to send form data", {
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
      console.error("Error sending form data:", error);
      toast.error("Error adding form data", {
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
            Dhan Awak
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[680px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="flex justify-between ">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="rst_number"
                      className="block mt-3 text-sm font-medium leading-6 text-gray-900"
                    >
                      RST Number
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      onChange={handleInputChange}
                      type="number"
                      name="rst_number"
                      value={DhanAwakData.rst_number}
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="rice_mill_id"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Select Rice Mill
                  </label>
                  <div className="mt-2">
                    <select
                      // required
                      name="rice_mill_id"
                      type="text"
                      className="block  w-full bg-white rounded-md  border-0 px-1.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={DhanAwakData.rice_mill_id}
                      onChange={handleInputChange}
                    >
                      <option value="">-Select Rice Mill-</option>
                      {DoOptions.rice_mill_data &&
                        DoOptions.rice_mill_data.map((option) => (
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
              </div>
              <div className="flex justify-between">
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
                      value={DhanAwakData.date}
                      onChange={handleInputChange}
                      type="date"
                      name="date"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="do_id"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Do Number
                    </label>
                  </div>
                  <div className="mt-1">
                    <select
                      value={DhanAwakData.do_id}
                      onChange={handleInputChange}
                      type="text"
                      name="do_id"
                      className=" bg-white block min-w-[250px] px-1.5 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select Do</option>
                      {DoOptionsricedonumber.do_number_data &&
                        DoOptionsricedonumber.do_number_data.map((option) => (
                          <option key={option.do_id} value={option.do_id}>
                            {option.do_number}
                          </option>
                        ))}
                    </select>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Cannot Find Do?{" "}
                    <a
                      href="/Add_Do"
                      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                      Add DO..
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="society_id"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Society
                    </label>
                  </div>
                  <div className="mt-1">
                    <select
                      name="society_id"
                      type="number"
                      value={DhanAwakData.society_id}
                      className="bg-white block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    >
                      <option value="">Select a society</option>
                      {DoOptions.society_data &&
                        DoOptions.society_data.map((societie) => (
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
                      htmlFor="society_hidden_name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Society Hidden Name
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      value={DhanAwakData.society_hidden_name}
                      onChange={handleInputChange}
                      type="number"
                      name="society_hidden_name"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
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
                      value={DhanAwakData.dm_weight}
                      onChange={handleInputChange}
                      type="text"
                      name="dm_weight"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="number_of_bags"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Number Of Bags
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      disabled
                      value={
                        (DhanAwakData.number_of_bags =
                          DhanAwakData.dm_weight * 2.5)
                      }
                      onChange={handleInputChange}
                      type="number"
                      name="number_of_bags"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    // required
                    name="transporter_name_id"
                    className="block  min-w-full bg-white rounded-md  border-0 px-1.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={DhanAwakData.transporter_name_id}
                    onChange={handleInputChange}
                  >
                    <option value="">-Select a transporter-</option>
                    {DoOptions.transporter_data &&
                      DoOptions.transporter_data.map((option) => (
                        <option
                          key={option.transporter_id}
                          value={option.transporter_id}
                        >
                          {option.transporter_name}
                        </option>
                      ))}
                  </select>
                  <p className="mt-2  text-sm text-gray-500">
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
                    value={DhanAwakData.truck_number_id}
                    className=" bg-white block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  >
                    <option value="">Select a Truck</option>
                    {DoOptionstrucktransporter.truck_data &&
                      DoOptionstrucktransporter.truck_data.map((truck) => (
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

              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="transporting_rate"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Transporting Rate
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      value={DhanAwakData.transporting_rate}
                      onChange={handleInputChange}
                      type="number"
                      name="transporting_rate"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
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
                      disabled
                      value={
                        (DhanAwakData.transporting_total =
                          DhanAwakData.dm_weight *
                          DhanAwakData.transporting_rate)
                      }
                      onChange={handleInputChange}
                      type="number"
                      name="transporting_total"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <h2 className=" text-2xl font-black  ">Bardana Details</h2>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="jama_jute_22_23"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Jama Jute 22-23
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      value={DhanAwakData.jama_jute_22_23}
                      onChange={handleInputChange}
                      type="number"
                      name="jama_jute_22_23"
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="ek_bharti_21_22"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Ek Bharti 21-22
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      value={DhanAwakData.ek_bharti_21_22}
                      onChange={handleInputChange}
                      type="number"
                      name="ek_bharti_21_22"
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="pds"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      PDS
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      value={DhanAwakData.pds}
                      onChange={handleInputChange}
                      type="number"
                      name="pds"
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="miller_purana"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Miller Purana
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      value={DhanAwakData.miller_purana}
                      onChange={handleInputChange}
                      type="number"
                      name="miller_purana"
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="kisan"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Kisan
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      value={DhanAwakData.kisan}
                      onChange={handleInputChange}
                      type="number"
                      name="kisan"
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="bardana_society"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Society
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      value={DhanAwakData.bardana_society}
                      onChange={handleInputChange}
                      type="number"
                      name="bardana_society"
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="hdpe_22_23"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      HDPE 22-23
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      value={DhanAwakData.hdpe_22_23}
                      onChange={handleInputChange}
                      type="number"
                      name="hdpe_22_23"
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="hdpe_21_22"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      HDPE 21-22 New
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      value={DhanAwakData.hdpe_21_22}
                      onChange={handleInputChange}
                      type="number"
                      name="hdpe_21_22"
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="hdpe_21_22_one_use"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      HDPE 21-22 One Use
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      value={DhanAwakData.hdpe_21_22_one_use}
                      onChange={handleInputChange}
                      type="number"
                      name="hdpe_21_22_one_use"
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="total_bag_weight"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Total Bag Weight
                  </label>
                </div>
                <div className="mt-1">
                  <input
                    disabled
                    value={
                      (DhanAwakData.total_bag_weight =
                        ((+DhanAwakData.jama_jute_22_23 +
                          +DhanAwakData.ek_bharti_21_22 +
                          +DhanAwakData.pds +
                          +DhanAwakData.miller_purana +
                          +DhanAwakData.kisan +
                          +DhanAwakData.bardana_society) *
                          0.58) /
                          100 +
                        ((+DhanAwakData.hdpe_22_23 +
                          +DhanAwakData.hdpe_21_22 +
                          +DhanAwakData.hdpe_21_22_one_use) *
                          0.2) /
                          100)
                    }
                    onChange={handleInputChange}
                    type="number"
                    name="total_bag_weight"
                    className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="type_of_paddy"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Type Of Paddy
                    </label>
                  </div>
                  <div className="mt-1">
                    <select
                      value={DhanAwakData.type_of_paddy}
                      onChange={handleInputChange}
                      type="text"
                      name="type_of_paddy"
                      className="bg-white block min-w-[250px] px-1.5 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select Type of Paddy</option>
                      <option value="Mota">Mota</option>
                      <option value="Patla">Patla</option>
                      <option value="Sarna">Sarna</option>
                    </select>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="actual_paddy"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Actual Paddy
                    </label>
                  </div>
                  <div className="mt-1">
                    <select
                      value={DhanAwakData.actual_paddy}
                      onChange={handleInputChange}
                      type="text"
                      name="actual_paddy"
                      className="bg-white block min-w-[250px] px-1.5 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select Actual Paddy</option>
                      <option value="RBG">RBG</option>
                      <option value="Sambha">Sambha</option>
                      <option value="IR">IR</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="mill_weight_quintals"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Mill Weight (Quintals)
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      value={DhanAwakData.mill_weight_quintals}
                      onChange={handleInputChange}
                      type="text"
                      name="mill_weight_quintals"
                      className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="shortage"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Shortage
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      disabled
                      value={(DhanAwakData.shortage =
                        DhanAwakData.mill_weight_quintals -
                        DhanAwakData.total_bag_weight -
                        DhanAwakData.dm_weight).toFixed(4)}
                      onChange={handleInputChange}
                      type="number"
                      name="shortage"
                      className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <h2 className=" text-2xl font-black  ">Hoppper Details</h2>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="bags_put_in_hopper"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Bags Put In Hopper
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      value={DhanAwakData.bags_put_in_hopper}
                      onChange={handleInputChange}
                      type="text"
                      name="bags_put_in_hopper"
                      className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="total_hopper_weight"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Total Hopper Weight
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      value={DhanAwakData.total_hopper_weight}
                      onChange={handleInputChange}
                      type="text"
                      name="total_hopper_weight"
                      className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add Dhan Awak
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

export default Dhan_Awak;
