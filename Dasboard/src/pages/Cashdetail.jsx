import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Inputbox from "../inputelement/Inputbox";
import axios from "axios";
const Cashdetail = () => {
  const [CashdetailData, setCashdetailData] = useState({
    cash_in: 0,
    cash_out: 0,
    in_hand: 0,
    in_out: 0,
  });
  const initialCashdetailData = {
    cash_in: 0,
    cash_out: 0,
    in_hand: 0,
    in_out: 0,
  };
  const resetForm = () => {
    setCashdetailData(initialCashdetailData);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // console.log(value);
    setCashdetailData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/cash-in-out",
        CashdetailData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status >= 201 || response.status < 300) {
        // console.log("Bhusi  added successfully");
        toast.success(" Cash Detail added successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        resetForm();
      } else {
        console.error("Failed to add  Cash Detail");
        toast.error("Failed to add Cash Detail ", {
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
      toast.error("Error adding  Cash Detail", {
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
            Cash Detail
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[740px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex justify-between flex-wrap ">
                <Inputbox
                  label="Cash In"
                  name="cash_in"
                  type="number"
                  value={CashdetailData.cash_in}
                  onChange={handleInputChange}
                  placeholder="Enter Cash in"
                />
                <Inputbox
                  label="Cash Out"
                  name="cash_out"
                  type="number"
                  value={CashdetailData.cash_out}
                  onChange={handleInputChange}
                  placeholder="Enter Cash Out"
                />
              </div>
              <div className="flex justify-between flex-wrap ">
                <Inputbox
                  label="In Hand "
                  name="in_hand"
                  type="number"
                  value={CashdetailData.in_hand}
                  onChange={handleInputChange}
                  placeholder="Enter Number Cash In Hand"
                />
                <Inputbox
                  label="In Out"
                  name="in_out"
                  type="number"
                  value={CashdetailData.in_out}
                  onChange={handleInputChange}
                  placeholder="Enter Cash In Out "
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Cash Detail
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

export default Cashdetail;
