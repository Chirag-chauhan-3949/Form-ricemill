import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Inputbox from "../inputelement/Inputbox";

const Add_Party = () => {
  const [partydata, setpartydata] = useState({
    party_name: "",
    party_phone_number: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setpartydata({
      ...partydata,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(partydata);
    try {
      const response = await fetch("http://localhost:8000/party/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(partydata),
      });

      if (response.ok) {
        // console.log("Transporter added successfully");
        toast.success("Transporter added successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.error("Failed to add transporter");
        toast.error("Failed to add transporter", {
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
      toast.error(`Error adding transporter: ${error.message}`, {
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
            Add New Party
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="party_name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Party Name
                  </label>
                  <span className="text-sm leading-6 text-red-500">
                    Required
                  </span>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    name="party_name"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter Party name"
                    value={partydata.party_name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="party_phone_number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Party Phone
                  </label>
                  <span className="text-sm leading-6 text-red-500">
                    Required
                  </span>
                </div>
                <div className="mt-2">
                  <input
                    pattern="[0-9]{10}"
                    type="number"
                    name="party_phone_number"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter Party Phone Number"
                    value={partydata.party_phone_number}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add New Party
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

export default Add_Party;
