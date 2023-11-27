import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Dhan_Awak = () => {
  const [DhanAwakData, setFormData] = useState({
    Jama_jute_22_23: "",
    ek_bharti_21_22: "",
    pds: "",
    miller_purana: "",
    kisan: "",
    bardana_society: "",
    hdpe_22_23: "",
    hdpe_21_22: "",
    total_bag_weight: "",
    hdpe_21_22_one_use: "",
    type_of_paddy: "",
    actual_paddy: "",
    mill_weight_quintals: "",
    shortage: "",
    bags_put_in_hopper: "",
    total_hopper_weight: "",
    rst_number: "",
    select_mill: "",
    date: "",
    do_number: "",
    society: "",
    society_hidden_name: "",
    dm_weight: "",
    number_of_bags: "",
    truck_number: "",
    transporter: "",
    transporting_rate: "",
    transporting_total: "",
  });
  const [selectOptions, setSelectOptions] = useState({
    doNumbers: [],
    societies: [],
    trucks: [],
    transporters: [],
  });
  useEffect(() => {
    // Fetch data for doNumbers
    fetch("your-api-endpoint-for-doNumbers")
      .then((response) => response.json())
      .then((data) =>
        setSelectOptions((prevOptions) => ({ ...prevOptions, doNumbers: data }))
      )
      .catch((error) => console.error("Error fetching doNumbers data:", error));

    // Fetch data for societies
    fetch("your-api-endpoint-for-societies")
      .then((response) => response.json())
      .then((data) =>
        setSelectOptions((prevOptions) => ({ ...prevOptions, societies: data }))
      )
      .catch((error) => console.error("Error fetching societies data:", error));

    // Fetch data for trucks
    fetch("your-api-endpoint-for-trucks")
      .then((response) => response.json())
      .then((data) =>
        setSelectOptions((prevOptions) => ({ ...prevOptions, trucks: data }))
      )
      .catch((error) => console.error("Error fetching trucks data:", error));

    // Fetch data for transporters
    fetch("your-api-endpoint-for-transporters")
      .then((response) => response.json())
      .then((data) =>
        setSelectOptions((prevOptions) => ({
          ...prevOptions,
          transporters: data,
        }))
      )
      .catch((error) =>
        console.error("Error fetching transporters data:", error)
      );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...DhanAwakData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("your-api-endpoint", {
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

  const notificationMethods = [
    { value: "Purushottam Rice mill", title: "Purushottam Rice mill" },
    { value: "Dushyant Rice Mill", title: "Dushyant Rice Mill" },
    { value: "Tulsi Rice Mill", title: "Tulsi Rice Mill" },
  ];
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
                      value={DhanAwakData.rst_number}
                      onChange={handleInputChange}
                      type="text"
                      name="rst_number"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-base font-semibold text-gray-900">
                    Select Mill
                  </label>
                  <fieldset className="mt-4">
                    <legend className="sr-only">Mills</legend>
                    <div className="space-y-4">
                      {notificationMethods.map((notificationMethod) => (
                        <div
                          key={notificationMethod.value}
                          className="flex items-center"
                        >
                          <input
                            onChange={handleInputChange}
                            name="select_mill"
                            type="radio"
                            value={notificationMethod.value}
                            checked={
                              DhanAwakData.select_mill ===
                              notificationMethod.value
                            }
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />

                          <label
                            htmlFor={notificationMethod.value}
                            className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                          >
                            {notificationMethod.title}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
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
                      htmlFor="do_number"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Do Number
                    </label>
                  </div>
                  <div className="mt-1">
                    <select
                      value={DhanAwakData.do_number}
                      onChange={handleInputChange}
                      type="text"
                      name="do_number"
                      className=" bg-white block min-w-[250px] px-1.5 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select Do</option>
                      {selectOptions.doNumbers.map((doNumber) => (
                        <option key={doNumber.value} value={doNumber.value}>
                          {doNumber.title}
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
                      htmlFor="society"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Society
                    </label>
                  </div>
                  <div className="mt-1">
                    <select
                      value={DhanAwakData.society}
                      onChange={handleInputChange}
                      type="text"
                      name="society"
                      className=" bg-white block min-w-[250px] px-1.5 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">-Select Society-</option>
                    </select>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Cannot Find Society?{" "}
                    <a
                      href="/Add_New_Society"
                      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                      Add New Society..
                    </a>
                  </p>
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
                      type="text"
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
                      value={DhanAwakData.number_of_bags}
                      onChange={handleInputChange}
                      type="text"
                      name="number_of_bags"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="truck_number"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Truck Number
                    </label>
                  </div>
                  <div className="mt-1">
                    <select
                      value={DhanAwakData.truck_number}
                      onChange={handleInputChange}
                      type="text"
                      name="truck_number"
                      className=" bg-white block min-w-[250px] px-1.5 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">-Select Truck-</option>
                    </select>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Cannot Find Truck?{" "}
                    <a
                      href="/Add_New_Truck"
                      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                      Add New Truck..
                    </a>
                  </p>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="transporter"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Transporter
                    </label>
                  </div>
                  <div className="mt-1">
                    <select
                      value={DhanAwakData.transporter}
                      onChange={handleInputChange}
                      type="text"
                      name="transporter"
                      className=" bg-white block min-w-[250px] px-1.5 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">-Select Transporter-</option>
                    </select>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Cannot Find?{" "}
                    <a
                      href="/Add_New_Transporter"
                      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                      Add New Transporter..
                    </a>
                  </p>
                </div>
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
                      type="text"
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
                      value={DhanAwakData.transporting_total}
                      onChange={handleInputChange}
                      type="text"
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
                      htmlFor="Jama_jute_22_23"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Jama Jute 22-23
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      value={DhanAwakData.Jama_jute_22_23}
                      onChange={handleInputChange}
                      type="text"
                      name="Jama_jute_22_23"
                      className="block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="ek_bharti_22_23"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Ek Bharti 21-22
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      value={DhanAwakData.ek_bharti_21_22}
                      onChange={handleInputChange}
                      type="text"
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
                      type="text"
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
                      type="text"
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
                      type="text"
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
                      type="text"
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
                      type="text"
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
                      type="text"
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
                      type="text"
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
                    value={DhanAwakData.total_bag_weight}
                    onChange={handleInputChange}
                    type="text"
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
                      value={DhanAwakData.shortage}
                      onChange={handleInputChange}
                      type="text"
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
