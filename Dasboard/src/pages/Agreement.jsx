import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add_Agreement = () => {
  const [agreementData, setAgreementData] = useState({
    rice_mill_id: 0,
    agreement_number: "",
    mota: 0,
    patla: 0,
    sarna: 0,
    lot_from: 0,
    lot_to: 0,
    total: 0,
  });

  const [AgreementOptions, setAgreementOptions] = useState([]);

  // Fetch data for the "Select Rice Mill" dropdown
  useEffect(() => {
    async function fetchData() {
      try {
        const Agreement_response = await axios.get(
          "http://localhost:8000/rice-mill"
        );

        const data = Agreement_response.data;
        setAgreementOptions(data);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setAgreementData({
      ...agreementData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(agreementData);

    try {
      const response = await axios.post(
        "http://localhost:8000/agreement/",
        agreementData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201 || response.status === 300) {
        console.log("Agreement added successfully");
        toast.success("Agreement added successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        console.error("Failed to add Agreement");
        toast.error("Failed to add Agreement", {
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
      toast.error("Error adding Agreement", {
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
            Add Agreement
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
                    name="rice_mill_id"
                    className="block  w-full bg-white rounded-md  border-0 px-1.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={agreementData.rice_mill_id}
                    onChange={handleInputChange}
                  >
                    <option value="">-Select Rice Mill-</option>
                    {AgreementOptions.map((option) => (
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
                <label className="block text-sm font-medium leading-6 text-gray-900">
                  Agreement Number
                </label>
                <input
                  type="text"
                  pattern="AC\d{12}"
                  name="agreement_number"
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={agreementData.agreement_number}
                  onChange={handleInputChange}
                />
              </div>
              <fieldset className="flex flex-wrap justify-evenly h-fit p-10">
                <div className="flex space-x-4">
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      mota
                    </label>
                    <input
                      type="number"
                      name="mota"
                      className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={agreementData.mota}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      patla
                    </label>
                    <input
                      type="number"
                      name="patla"
                      className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={agreementData.patla}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      sarna
                    </label>
                    <input
                      type="number"
                      name="sarna"
                      className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={agreementData.sarna}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="flex space-x-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Lot From
                    </label>
                    <input
                      type="number"
                      name="lot_from"
                      className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={agreementData.lot_from}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Lot to
                    </label>
                    <input
                      type="number"
                      name="lot_to"
                      className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={agreementData.lot_to}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      total
                    </label>
                    <input
                      disabled
                      type="number"
                      name="total"
                      className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={
                        (agreementData.total =
                          +agreementData.mota +
                          +agreementData.patla +
                          +agreementData.sarna)
                      }
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </fieldset>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Agreement
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Add_Agreement;
