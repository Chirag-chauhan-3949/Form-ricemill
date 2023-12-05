import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
const Add_Do = () => {
  const [DoData, setDoData] = useState({
    select_mill_id: "",
    date: "",
    do_number: "",
    select_argeement_id: "",
    moto_weight: 0,
    mota_Bardana: 0,
    patla_weight: 0,
    patla_bardana: 0,
    sarna_weight: 0,
    sarna_bardana: 0,
    total_weight: 0,
    total_bardana: 0,
    society_name_id: "",
    truck_number_id: "",
  });

  const [DoOptions, setDoOptions] = useState([]);

  // Fetch data for the "Select Rice Mill" dropdown
  useEffect(() => {
    async function fetchMillData() {
      try {
        const Mill_response = await axios.get(
          "http://localhost:8000/rice-agreement-transporter-truck-society-data"
        );

        const data = Mill_response.data;
        setDoOptions(data);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchMillData();
  }, []);

  const [DoOptionsagreement, setDoOptionsAgreement] = useState([]);
  useEffect(() => {
    async function fetchagrementData() {
      try {
        const agremennt_data = await axios.get(
          `http://localhost:8000/rice-agreement-data/${DoData.select_mill_id}`
        );

        const data = agremennt_data.data;
        setDoOptionsAgreement(data);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    if (DoData.select_mill_id) {
      fetchagrementData();
    }
  }, [DoData.select_mill_id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoData({
      ...DoData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(DoData);
    try {
      const response = await axios.post(
        "http://localhost:8000/add-do/",
        DoData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", response);
      if (response.status === 201) {
        console.log("Form data sent successfully");
        toast.success("Do added successfully", {
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
        toast.error("Failed to add Do", {
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
      toast.error("Error Adding Do", {
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
            Add Do
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
              <div>
                <label
                  htmlFor="select_mill_id"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Select Rice Mill
                </label>
                <div className="mt-2">
                  <select
                    required
                    type="text"
                    name="select_mill_id"
                    className="block  w-full bg-white rounded-md  border-0 px-1.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={DoData.select_mill_id}
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
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Do Date
                  </label>
                </div>
                <div className="mt-1">
                  <input
                    type="date"
                    name="date"
                    className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                    value={DoData.date}
                  />
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="do_number"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      DO Numbar
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      pattern="DO\d{13}"
                      name="do_number"
                      value={DoData.do_number}
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="select_argeement_id"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Select Agreement
                    </label>
                  </div>
                  <div className="mt-1">
                    <select
                      type="text"
                      name="select_argeement_id"
                      value={DoData.select_argeement_id}
                      className=" bg-white block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    >
                      <option value="">Select Agreement</option>
                      {DoOptionsagreement.agreement_data &&
                        DoOptionsagreement.agreement_data.map((agreement) => (
                          <option
                            key={agreement.agremennt_id}
                            value={agreement.agremennt_id}
                          >
                            {agreement.agreement_number}
                          </option>
                        ))}
                    </select>
                  </div>
                  <p className="mt-2 text-center text-sm text-gray-500">
                    Cannot Find agreement?{" "}
                    <a
                      href="/Add_Agreement"
                      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                      Add Agreement..
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="moto_weight"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Mota Weight
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="moto_weight"
                      value={DoData.moto_weight}
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="mota_Bardana"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Mota Bardana
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      disabled
                      type="number"
                      name="mota_Bardana"
                      value={(DoData.mota_Bardana = 2.5 * +DoData.moto_weight)}
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="patla_weight"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Patla Weight
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="patla_weight"
                      value={DoData.patla_weight}
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="patla_bardana"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Patla Bardana
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      disabled
                      type="number"
                      name="patla_bardana"
                      value={
                        (DoData.patla_bardana = 2.5 * +DoData.patla_weight)
                      }
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="sarna_weight"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Sarna weight
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="number"
                      name="sarna_weight"
                      value={DoData.sarna_weight}
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="sarna_bardana"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Sarna Bardana
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      disabled
                      type="number"
                      name="sarna_bardana"
                      value={
                        (DoData.sarna_bardana = 2.5 * +DoData.sarna_weight)
                      }
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="total_weight"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Total Weight
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      disabled
                      type="number"
                      name="total_weight"
                      value={
                        (DoData.total_weight =
                          +DoData.moto_weight +
                          +DoData.patla_weight +
                          +DoData.sarna_weight)
                      }
                      className="block min-w-[250px] px-1.5 rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 bg-gray-200 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="total_bardana"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Total Bardana
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      disabled
                      type="number"
                      name="total_bardana"
                      value={
                        (DoData.total_bardana =
                          +DoData.mota_Bardana +
                          +DoData.patla_bardana +
                          +DoData.sarna_bardana)
                      }
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300  bg-gray-200 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="society_name_id"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Society
                  </label>
                </div>
                <div className="mt-1">
                  <select
                    name="society_name_id"
                    type="number"
                    value={DoData.society_name_id}
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
                    value={DoData.truck_number_id}
                    className=" bg-white block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  >
                    <option value="">Select a Truck</option>
                    {DoOptions.truck_data &&
                      DoOptions.truck_data.map((truck) => (
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

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
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
export default Add_Do;
