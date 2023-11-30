import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Dalalidhan = () => {
  const [DalaliData, setDalaliData] = useState({
    rst_number_id: "",
    date: "",
    kocia: "",
    vehicale_number_id: 0,
    white_sarna_bags: 0,
    white_sarna_weight: 0,
    ir_bags: 0,
    ir_weight: 0,
    rb_gold_bags: 0,
    rb_gold_weight: 0,
    sarna_bags: 0,
    sarna_weight: 0,
    sambha_new_bag: 0,
    sambha_new_weight: 0,
    paddy_type: "",
    total_bags: 0,
    total_weight: 0,
    hamali: 0,
    weight_less_plastic: 0,
    weight_less_jute: 0,
    weight_less_kata_difference: 0,
    net_weight: "",
    rate: 0,
    ammount: 0,
  });
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
    setDalaliData({
      ...DalaliData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    console.log(DalaliData);
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/dalali-dhaan",
        DalaliData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        console.log("Form data sent successfully");
        toast.success("Dalali Dhan added successfully", {
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
        toast.error("Failed to add Dalali Dhan", {
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
      toast.error("Error Adding Dalali Dhan", {
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
            Add Dalali Dhan
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[680px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <div className="flex justify-between">
                  <div className="my-2.5">
                    <label
                      htmlFor="rst_number_id"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      RST Number
                    </label>

                    <div className="mt-1">
                      <select
                        name="rst_number_id"
                        type="text"
                        value={DalaliData.rst_number_id}
                        className=" bg-white min-w-[250px] block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      <p className="mt-1.5 text-sm text-gray-500">
                        Cannot Find RST?{" "}
                        <a
                          href="/Dhan_Awak"
                          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                          Add New RST...
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
                        Date
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        value={DalaliData.date}
                        onChange={handleInputChange}
                        type="date"
                        name="date"
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="kocia"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Kochia
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="kocia"
                      value={DalaliData.kocia}
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="my-2.5">
                  <label
                    htmlFor="vehicale_number_id"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    truck Number
                  </label>

                  <div className="mt-1">
                    <select
                      name="vehicale_number_id"
                      type="number"
                      value={DalaliData.vehicale_number_id}
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
                  <p className="mt-1.5 text-sm text-gray-500">
                    Cannot Find Truck?{" "}
                    <a
                      href="/Add_NEw_Truck"
                      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                      Add New Truck.
                    </a>
                  </p>
                </div>
                <div className="flex justify-between my-3">
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="white_sarna_bags"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        White Sarna Bag
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="white_sarna_bags"
                        value={DalaliData.white_sarna_bags}
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="white_sarna_weight"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        White Sarna Weight
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="white_sarna_weight"
                        value={DalaliData.white_sarna_weight}
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-3">
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="ir_bags"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        IR Bag
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="ir_bags"
                        value={DalaliData.ir_bags}
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="ir_weight"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        IR Weight
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="ir_weight"
                        value={DalaliData.ir_weight}
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-3">
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="rb_gold_bags"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        RB Gold Bag
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="rb_gold_bags"
                        value={DalaliData.rb_gold_bags}
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="rb_gold_weight"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        RBGold_Weight
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="rb_gold_weight"
                        value={DalaliData.rb_gold_weight}
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-3">
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="sarna_bags"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Sarna Bag
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="sarna_bags"
                        value={DalaliData.sarna_bags}
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="sarna_weight"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Sarna Weight
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="sarna_weight"
                        value={DalaliData.sarna_weight}
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-3">
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="sambha_new_bag"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Sambha New Bags
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="sambha_new_bag"
                        value={DalaliData.sambha_new_bag}
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="sambha_new_weight"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Sambha New Weight
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="number"
                        name="sambha_new_weight"
                        value={DalaliData.sambha_new_weight}
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-3">
                  <div className="mt-3">
                    <div className="flex justify-between">
                      <label
                        htmlFor="paddy_type"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Type Of Paddy
                      </label>
                    </div>
                    <div className="mt-1">
                      <select
                        value={DalaliData.paddy_type}
                        onChange={handleInputChange}
                        type="text"
                        name="paddy_type"
                        className="bg-white min-w-[250px] block w-full px-1.5 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                        <option value="">Select Type of Paddy</option>
                        <option value="Mota">Mota</option>
                        <option value="Patla">Patla</option>
                        <option value="Sarna">Sarna</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between">
                      <label
                        htmlFor="total_bags"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Total Bags
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="number"
                        placeholder="Enter bags"
                        name="total_bags"
                        value={DalaliData.total_bags}
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-3">
                  <div className="mt-3">
                    <div className="flex justify-between">
                      <label
                        htmlFor="total_weight"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Total Weights
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="number"
                        placeholder="Enter Total Weight"
                        name="total_weight"
                        value={DalaliData.total_weight}
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between">
                      <label
                        htmlFor="hamali"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Hamali
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="number"
                        placeholder="Enter Hamali"
                        name="hamali"
                        value={DalaliData.hamali}
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-3">
                  <div className="mt-3">
                    <div className="flex justify-between">
                      <label
                        htmlFor="weight_less_plastic"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Weight Less Plastics
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="number"
                        placeholder="Enter bags"
                        name="weight_less_plastic"
                        value={DalaliData.weight_less_plastic}
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between">
                      <label
                        htmlFor="weight_less_jute"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Weight Less Jute
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="number"
                        placeholder="Enter Weight Less Jute"
                        name="weight_less_jute"
                        value={DalaliData.weight_less_jute}
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-3">
                  <div className="mt-3">
                    <div className="flex justify-between">
                      <label
                        htmlFor="weight_less_kata_difference"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Weight Less Kata Difference
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="number"
                        placeholder="Enter Weight less Kata Difference"
                        name="weight_less_kata_difference"
                        value={DalaliData.weight_less_kata_difference}
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between">
                      <label
                        htmlFor="net_weight"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Net Weight
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        placeholder="Enter Net Weight"
                        name="net_weight"
                        value={DalaliData.net_weight}
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-between my-3">
                  <div className="mt-3">
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
                        type="number"
                        placeholder="Enter Rate"
                        name="rate"
                        value={DalaliData.rate}
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <div className="flex justify-between">
                      <label
                        htmlFor="ammount"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Amount
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="number"
                        placeholder="Enter Amount"
                        name="ammount"
                        value={DalaliData.ammount}
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex w-full my-5 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add Dalali Dhan
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

export default Dalalidhan;
