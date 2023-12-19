import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Dopanding = () => {
  const [DopandingData, setDopandingData] = useState({
    do_number_id: "",
    rice_mill_id: "",
    date: "",
    mota: "",
    patla: "",
    sarna: "",
    Total: 0,
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
          `http://localhost:8000/rice-do-number/${DopandingData.rice_mill_id}`
        );

        const data = truck_transporter.data;
        setDoOptionsRiceDoNumber(data);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    if (DopandingData.rice_mill_id) {
      fetchricedonumberData();
    }
  }, [DopandingData.rice_mill_id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setDopandingData({
      ...DopandingData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(DopandingData);

    try {
      const response = await axios.post(
        "http://localhost:8000/do-panding",
        DopandingData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201 || response.status === 300) {
        console.log("DO Panding added successfully");
        toast.success("DO Panding added successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.error("Failed to add Do Panding");
        toast.error("Failed to add Do Panding", {
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
      toast.error("Error adding Do  Panding", {
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
            Add Do Panding
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="rice_mill_id"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Select Rice Mill
                </label>
                <div className="mt-2">
                  <select
                    required
                    type="text"
                    name="rice_mill_id"
                    className="block  w-full bg-white rounded-md  border-0 px-1.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={DoOptions.select_mill_id}
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
              <div className="flex justify-between">
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
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                      value={DopandingData.date}
                    />
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
                  <div className="mt-1">
                    <select
                      type="text"
                      name="do_number_id"
                      value={DopandingData.do_number_id}
                      className="block  w-full bg-white rounded-md  border-0 px-1.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    >
                      <option value="">-Select Do Number-</option>
                      {DoOptionsricedonumber.do_number_data &&
                        DoOptionsricedonumber.do_number_data.map((option) => (
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
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    mota
                  </label>
                  <input
                    type="text"
                    name="mota"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={DopandingData.mota}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    patla
                  </label>
                  <input
                    type="text"
                    name="patla"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={DopandingData.patla}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    sarna
                  </label>
                  <input
                    type="text"
                    name="sarna"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={DopandingData.sarna}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="Total"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Total
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      disabled
                      type="number"
                      name="Total"
                      value={
                        (DopandingData.Total =
                          +DopandingData.mota +
                          +DopandingData.patla +
                          +DopandingData.sarna)
                      }
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                  Add DO Panding
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

export default Dopanding;
