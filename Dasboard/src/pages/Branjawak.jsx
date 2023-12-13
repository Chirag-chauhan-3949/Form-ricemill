import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Dateinput from "../inputelement/Dateinput";
import "react-toastify/dist/ReactToastify.css";
import Inputbox from "../inputelement/Inputbox";
import axios from "axios";
import SelectInput from "../inputelement/Selectinput";
const Branjawak = () => {
  const [BranjawakData, setBranjawakData] = useState({
    rst: 0,
    date: "",
    party: "",
    mill: "",
    broker: "",
    brokerage_percent: 0,
    weight: 0,
    rate: 0,
    number_of_bags: 0,
    truck_number: "",
    total: 0,
    brokerage: 0,
    net_recievable: 0,
    loading_date: "",
    recieved_date: "",
    payment_recieved: 0,
    number_of_days: 0,
    payment_difference: 0,
    remarks: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBranjawakData({
      ...BranjawakData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/",
        BranjawakData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status >= 201 || response.status < 300) {
        console.log("Bran Jawak added successfully");
        toast.success("Bran Jawak added successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.error("Failed to add Bran Jawak");
        toast.error("Failed to add Bran Jawak", {
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
      toast.error("Error adding Bran Jawak", {
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
            Add Bran Jawak
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[740px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex justify-between flex-wrap ">
                <Inputbox
                  label="RST"
                  name="rst"
                  type="number"
                  value={Branjawak.rst}
                  onChange={handleInputChange}
                  placeholder="Enter rst number"
                />
                <Dateinput
                  value={BranjawakData.date}
                  onChange={handleInputChange}
                  label="Date"
                  name="date"
                />
              </div>
              <SelectInput
                label="Party"
                name="party"
                options=""
                value=""
                onChange=""
                placeholder="Select Party"
              />
              <div className="flex justify-between">
                <SelectInput
                  label="Rice Mill"
                  name="mill"
                  options=""
                  value=""
                  onChange=""
                  placeholder="Select Mill"
                />
                <SelectInput
                  label="Broker"
                  name="broker"
                  options=""
                  value=""
                  onChange=""
                  placeholder="Select Broker"
                />
              </div>
              <div className="flex justify-between">
                <Inputbox
                  label="Brokerage Percent"
                  name="brokerage_percent"
                  type="number"
                  value={BranjawakData.brokerage_percent}
                  onChange={handleInputChange}
                  placeholder="Enter Brokerage Percent"
                />
                <Inputbox
                  label=" Weight"
                  name="weight"
                  type="number"
                  value={BranjawakData.weight}
                  onChange={handleInputChange}
                  placeholder="Enter Weight "
                />
              </div>
              <div className="flex justify-between flex-wrap">
                <Inputbox
                  label="Rate"
                  name="rate"
                  type="number"
                  value={BranjawakData.rate}
                  onChange={handleInputChange}
                  placeholder="Enter Rate "
                />
                <Inputbox
                  label="Number of Bags"
                  name="number_of_bags"
                  type="number"
                  value={BranjawakData.number_of_bags}
                  onChange={handleInputChange}
                  placeholder="Enter Number of Bags "
                />
              </div>
              <div className="flex justify-between">
                <SelectInput
                  label="Truck Number"
                  name="truck_number"
                  options=""
                  value=""
                  onChange=""
                  placeholder="Select Truck Number"
                />
                <Inputbox
                  label="Total"
                  name="total"
                  type="number"
                  value={BranjawakData.total}
                  onChange={handleInputChange}
                  placeholder="Enter total "
                />
              </div>
              <div className="flex justify-between">
                <Inputbox
                  label="Brokerage"
                  name="brokerage"
                  type="number"
                  value={BranjawakData.brokerage}
                  onChange={handleInputChange}
                  placeholder="Enter Brokerage "
                />
                <Inputbox
                  label=" Net Recievable"
                  name="net_recievable"
                  type="number"
                  value={BranjawakData.net_recievable}
                  onChange={handleInputChange}
                  placeholder="Enter Net Recievable "
                />
              </div>
              <div className="flex justify-between">
                <Dateinput
                  label="Loading Date"
                  name="loading_date"
                  value={BranjawakData.loading_date}
                  onChange={handleInputChange}
                />
                <Dateinput
                  label="Recieved Date"
                  name="recieved_date"
                  value={BranjawakData.recieved_date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-between">
                <Inputbox
                  label="Payment Recieved"
                  name="payment_recieved"
                  type="number"
                  value={BranjawakData.payment_recieved}
                  onChange={handleInputChange}
                  placeholder="Enter Payment Recieved"
                />
                <Inputbox
                  label="Number of Days"
                  name="number_of_days"
                  type="number"
                  value={BranjawakData.number_of_days}
                  onChange={handleInputChange}
                  placeholder="Enter Number of Days "
                />
              </div>
              <div className="flex justify-between">
                <Inputbox
                  label="Payment Difference"
                  name="payment_difference"
                  type="number"
                  value={BranjawakData.payment_difference}
                  onChange={handleInputChange}
                  placeholder="Enter Payment Difference "
                />
                <Inputbox
                  label=" Remarks "
                  name="remarks"
                  type="text"
                  value={BranjawakData.remarks}
                  onChange={handleInputChange}
                  placeholder="Enter  Remarks "
                />
              </div>
              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add Bran Jawak
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

export default Branjawak;
