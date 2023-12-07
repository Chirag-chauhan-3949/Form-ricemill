import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import Variety from "../select_dropdown/Variety";
const Ricedeposit = () => {
  const customStyles = {
    control: (base) => ({
      ...base,
      height: 35,
      minheight: 30,
      width: 250,
      minwidth: 180,
    }),
    indicatorSeparator: (state) => ({
      display: "none",
    }),
  };
  const [RicedepositData, setRicedepositData] = useState({
    rst_number: 0,
    date: "",
    lot_number: 0,
    ware_house_id: 0,
    rice_mill_name_id: 0,
    weight: 0,
    truck_number_id: 0,
    bags: 0,
    transporting_total: 0,
    transporter_name_id: 0,
    transporting_type: "",
    transporting_status: "",
    rate: 0,
    variety: "",
    halting: 0,
    rrga_wt: 0,
    data_2022_23: 0,
    data_2021_22: 0,
    pds: 0,
    old: 0,
    amount: 0,
    status: "",
    hamali: 0,
  });

  const [RiceDeopsitOptions, setRiceDeposit] = useState([]);

  // Fetch data for the "Select Rice Mill" dropdown
  useEffect(() => {
    async function fetchMillData() {
      try {
        const rice_deposti_data = await axios.get(
          "http://localhost:8000/rice-truck-transporter-ware-house"
        );

        const data = rice_deposti_data.data;
        setRiceDeposit(data);
        // console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchMillData();
  }, []);

  const [DoOptionswarehouse, setDoOptionswarehouse] = useState([]);
  useEffect(() => {
    async function fetchwarehouseid() {
      try {
        const warehouse = await axios.get(
          `http://localhost:8000/ware-house-data/${RicedepositData.ware_house_id}`
        );

        const data = warehouse.data;
        setDoOptionswarehouse(data);
        // console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    if (RicedepositData.ware_house_id) {
      fetchwarehouseid();
    }
  }, [RicedepositData.ware_house_id]);

  const [DoOptionstrucktransporter, setDoOptionsTruckTransporter] = useState(
    []
  );
  useEffect(() => {
    async function fetchtrucktransporter() {
      try {
        const rice_do_number = await axios.get(
          `http://localhost:8000/truck-transporter/${RicedepositData.transporter_name_id}`
        );

        const data = rice_do_number.data;
        setDoOptionsTruckTransporter(data);
        // console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    if (RicedepositData.transporter_name_id) {
      fetchtrucktransporter();
    }
  }, [RicedepositData.transporter_name_id]);

  const handleSelectChange = (selectedOption) => {
    setRicedepositData({
      ...RicedepositData,
      variety: selectedOption.value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRicedepositData({
      ...RicedepositData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(RicedepositData);
    try {
      const response = await axios.post(
        "http://localhost:8000/rice-deposite/",
        RicedepositData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response);
      if (response.status === 201) {
        console.log("Form data sent successfully");
        toast.success("Rice Deposit added successfully", {
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
        toast.error("Failed to add Rice Deposit", {
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
      toast.error("Error Adding Rice Deposit", {
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
            Rice Deposit
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[680px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="#"
              method="POST"
            >
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="rst_number"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      RST Number
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="rst_number"
                      value={RicedepositData.rst_number}
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
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
                  <div className="mt-1">
                    <input
                      type="date"
                      name="date"
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                      value={RicedepositData.date}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="lot_number"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Lot Number
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="lot_number"
                      value={RicedepositData.lot_number}
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="mt-1">
                  <div className="flex justify-between">
                    <label
                      htmlFor="ware_house_id"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Warehouse
                    </label>
                  </div>
                  <Select
                    styles={{
                      indicatorSeparator: () => ({
                        display: "none",
                      }),
                      control: (base) => ({
                        ...base,
                        height: 35,
                        minheight: 30,
                        width: 250,
                        minwidth: 180,
                      }),
                    }}
                    name="ware_house_id"
                    options={
                      RiceDeopsitOptions.ware_house_data &&
                      RiceDeopsitOptions.ware_house_data.map((option) => ({
                        label: option.ware_houes_name,
                        value: option.ware_houes_id,
                      }))
                    }
                    value={
                      RicedepositData.ware_house_id
                        ? {
                            label: RiceDeopsitOptions.ware_house_data.find(
                              (option) =>
                                option.ware_houes_id ===
                                RicedepositData.ware_house_id
                            ).ware_houes_name,
                            value: RicedepositData.ware_house_id,
                          }
                        : null
                    }
                    onChange={(selectedOption) =>
                      handleInputChange({
                        target: {
                          name: "ware_house_id",
                          value: selectedOption ? selectedOption.value : "",
                        },
                      })
                    }
                  />
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
                    <Select
                      styles={customStyles}
                      placeholder="Enter Rice Mill.."
                      name="rice_mill_name_id"
                      options={
                        RiceDeopsitOptions.rice_mill_data &&
                        RiceDeopsitOptions.rice_mill_data.map((option) => ({
                          label: option.rice_mill_name,
                          value: option.rice_mill_id,
                        }))
                      }
                      value={
                        RicedepositData.rice_mill_name_id
                          ? {
                              label: RiceDeopsitOptions.rice_mill_data.find(
                                (option) =>
                                  option.rice_mill_id ===
                                  RicedepositData.rice_mill_name_id
                              ).rice_mill_name,
                              value: RicedepositData.rice_mill_name_id,
                            }
                          : null
                      }
                      onChange={(selectedOption) =>
                        handleInputChange({
                          target: {
                            name: "rice_mill_name_id",
                            value: selectedOption ? selectedOption.value : "",
                          },
                        })
                      }
                    />
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
                      htmlFor="weight"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Weight
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="weight"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                      value={RicedepositData.weight}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <label
                    htmlFor="transporter_name_id"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Select Transporter
                  </label>
                  <div className="mt-2">
                    <Select
                      placeholder="Enter Transporter"
                      name="transporter_name_id"
                      options={
                        RiceDeopsitOptions.transporter_data &&
                        RiceDeopsitOptions.transporter_data.map((option) => ({
                          label: option.transporter_name,
                          value: option.transporter_id,
                        }))
                      }
                      value={
                        RicedepositData.transporter_name_id
                          ? {
                              label: RiceDeopsitOptions.transporter_data.find(
                                (option) =>
                                  option.transporter_id ===
                                  RicedepositData.transporter_name_id
                              ).transporter_name,
                              value: RicedepositData.transporter_name_id,
                            }
                          : null
                      }
                      onChange={(selectedOption) =>
                        handleInputChange({
                          target: {
                            name: "transporter_name_id",
                            value: selectedOption ? selectedOption.value : "",
                          },
                        })
                      }
                      styles={{
                        indicatorSeparator: () => ({
                          display: "none",
                        }),
                      }}
                    />

                    <p className="mt-2  text-sm text-gray-500">
                      Cannot Find?{" "}
                      <a
                        href="/Add_NEw_Transporter"
                        className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                      >
                        Add New Transporter........
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="bags"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Bags
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      disabled
                      type="number"
                      name="bags"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                      value={
                        (RicedepositData.bags = 2 * RicedepositData.weight)
                      }
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <label
                    htmlFor="truck_number_id"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    truck Number
                  </label>

                  <div className="mt-1">
                    <Select
                      styles={customStyles}
                      placeholder="Enter Truck Number.."
                      name="truck_number_id"
                      options={
                        DoOptionstrucktransporter.truck_data &&
                        DoOptionstrucktransporter.truck_data.map((option) => ({
                          label: option.truck_number,
                          value: option.truck_id,
                        }))
                      }
                      value={
                        RicedepositData.truck_number_id
                          ? {
                              label: DoOptionstrucktransporter.truck_data.find(
                                (option) =>
                                  option.truck_id ===
                                  RicedepositData.truck_number_id
                              ).truck_number,
                              value: RicedepositData.truck_number_id,
                            }
                          : null
                      }
                      onChange={(selectedOption) =>
                        handleInputChange({
                          target: {
                            name: "truck_number_id",
                            value: selectedOption ? selectedOption.value : "",
                          },
                        })
                      }
                    />
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
                <div>
                  <Variety
                    value={RicedepositData.variety}
                    onSelectChange={handleSelectChange}
                  />
                </div>
              </div>

              <div className="flex justify-between flex-wrap">
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
                      disabled
                      type="number"
                      name="rate"
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                      value={
                        (RicedepositData.rate =
                          DoOptionswarehouse.ware_house_transporting_rate || "")
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="Hamali"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Hamali
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      disabled
                      type="number"
                      name="Hamali"
                      className="block w-full  px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                      value={RicedepositData.rate}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="halting"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Halting
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="halting"
                      className="block w-full  px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                      value={RicedepositData.halting}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between flex-wrap">
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
                      type="number"
                      name="transporting_total"
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                      value={
                        (RicedepositData.transporting_total =
                          RicedepositData.weight * RicedepositData.rate +
                          +RicedepositData.halting)
                      }
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="transporting_type"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Transporting Type
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="transporting_type"
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                      value={RicedepositData.transporting_type}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="transporting_status"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Transporting Status
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="transporting_status"
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                      value={RicedepositData.transporting_status}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between flex-wrap">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="rrga_wt"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Variety weight
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="rrga_wt"
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                      value={RicedepositData.rrga_wt}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="data_2022_23"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      2022-23
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="data_2022_23"
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                      value={RicedepositData.data_2022_23}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="data_2021_22"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      2021-22
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="data_2021_22"
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                      value={RicedepositData.data_2021_22}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
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
                      type="number"
                      name="pds"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                      value={RicedepositData.pds}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="old"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      OLD
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="old"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                      value={RicedepositData.old}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="amount"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Amount Paid
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="amount"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                      value={RicedepositData.amount}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="status"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Status
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="status"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                      value={RicedepositData.status}
                    />
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Rice Deposit
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
export default Ricedeposit;
