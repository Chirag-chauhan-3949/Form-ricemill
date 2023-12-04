import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
const Dalalidhan = () => {
  const [selectedPaddyType, setSelectedPaddyType] = useState("");
  const [DalaliData, setDalaliData] = useState({
    rst_number: "",
    date: "",

    kochia_id: "",
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
    net_weight: 0,
    rate: 0,
    ammount: 0,
  });
  const [kochiaData, setkochiaData] = useState([]);
  useEffect(() => {
    async function fetchkochia() {
      try {
        const kochia_response = await axios.get(
          "http://localhost:8000/kochia-data"
        );

        const data = kochia_response.data;
        setkochiaData(data);
        // console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
    fetchkochia();
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
  const handlePaddyTypeChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setSelectedPaddyType(value);

    // Optionally, you can reset the corresponding fields when the paddy type changes
    setDalaliData({
      ...DalaliData,
      [`${value}_bags`]: 0,
      [`${value}_weight`]: "",
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
                      htmlFor="kochia_id"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Kochia
                    </label>

                    <div className="mt-1">
                      <select
                        name="kochia_id"
                        type="text"
                        value={DalaliData.kochia_id}
                        className=" bg-white min-w-[250px] block w-full px-1.5 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      >
                        <option value="">Select rst</option>
                        {kochiaData.map((option) => (
                          <option
                            key={option.kochia_id}
                            value={option.kochia_id}
                          >
                            {option.kochia_name}
                          </option>
                        ))}
                      </select>
                      <p className="mt-1.5 text-sm text-gray-500">
                        Cannot Find Kochia?{" "}
                        <a
                          href="/Add_kochia"
                          className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                          Add New Kochia...
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
                      htmlFor="rst_number"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      RST Number
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="rst_number"
                      value={DalaliData.rst_number}
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
                      className=" bg-white block w-full px-1.5 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                      onChange={(e) => {
                        handleInputChange(e);
                        handlePaddyTypeChange(e);
                      }}
                      type="text"
                      name="paddy_type"
                      className="bg-white min-w-[250px] block w-full px-1.5 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value="">Select Type of Paddy</option>
                      <option value="white_sarna">White Sarna</option>
                      <option value="ir">IR</option>
                      <option value="rb_gold">RB Gold</option>
                      <option value="sarna">Sarna</option>
                      <option value="sambha_new">Sambha New</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-between my-3">
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor={`${selectedPaddyType}_bags`}
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {capitalizeFirstLetter(selectedPaddyType)} Bags
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="number"
                        name={`${selectedPaddyType}_bags`}
                        value={DalaliData[`${selectedPaddyType}_bags`]}
                        disabled={!selectedPaddyType}
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor={`${selectedPaddyType}_weight`}
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        {capitalizeFirstLetter(selectedPaddyType)} Weight
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="number"
                        name={`${selectedPaddyType}_weight`}
                        value={DalaliData[`${selectedPaddyType}_weight`]}
                        disabled={!selectedPaddyType}
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
                        htmlFor="total_bags"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Total Bags
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        disabled
                        type="number"
                        placeholder="Enter bags"
                        name="total_bags"
                        value={
                          (DalaliData.total_bags =
                            DalaliData[`${selectedPaddyType}_bags`])
                        }
                        className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
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
                        disabled
                        type="number"
                        placeholder="Enter Total Weight"
                        name="total_weight"
                        value={
                          (DalaliData.total_weight =
                            DalaliData[`${selectedPaddyType}_weight`])
                        }
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
                        htmlFor="hamali"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Hamali
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        disabled
                        type="number"
                        placeholder="Enter Hamali"
                        name="hamali"
                        value={
                          (DalaliData.hamali =
                            DalaliData[`${selectedPaddyType}_bags`] * 3)
                        }
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
                        type="text"
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
                        disabled
                        type="number"
                        placeholder="Enter Net Weight"
                        name="net_weight"
                        value={(DalaliData.net_weight =
                          DalaliData.total_weight -
                          DalaliData.weight_less_plastic * 0.002 -
                          DalaliData.weight_less_jute * 0.007 -
                          DalaliData.weight_less_kata_difference).toFixed(3)}
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
                        disabled
                        type="number"
                        placeholder="Enter Amount"
                        name="ammount"
                        value={
                          (DalaliData.ammount =
                            (DalaliData.net_weight -
                              DalaliData.weight_less_kata_difference) *
                              DalaliData.rate -
                            DalaliData.hamali)
                        }
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
