import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add_Agreement = () => {
  const [agreementData, setAgreementData] = useState({
    Agreement_number: "",
    Mota: "",
    Patla: "",
    Sarna: "",
    Lot_from: "",
    Lot_to: "",
    Total: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "Agreement_number") {
      const isValidAgreementNumber = /^\d{0,11}$/.test(value);

      if (!isValidAgreementNumber) {
        console.error(
          "Invalid Agreement Number. It should contain up to 11 digits."
        );
        return;
      }
    }
    if (name === "Lot_from" || name === "Lot_to") {
      const updatedValue = value.trim();
      const parsedValue = updatedValue !== "" ? parseInt(updatedValue, 10) : "";

      const lotFrom =
        name === "Lot_from"
          ? parsedValue
          : parseInt(agreementData.Lot_from, 10) || "";
      const lotTo =
        name === "Lot_to"
          ? parsedValue
          : parseInt(agreementData.Lot_to, 10) || "";
      const total = !isNaN(lotFrom) && !isNaN(lotTo) ? lotFrom + lotTo : "";

      setAgreementData({
        ...agreementData,
        [name]: parsedValue,
        Total: total,
      });
    } else {
      setAgreementData({
        ...agreementData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/Agreement/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...agreementData,
          selectedMill: selectedMill, // Include selected mill data
        }),
      });
      if (response.ok) {
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
        document.getElementById("agreementForm").reset();
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

  const notificationMethods = [
    { id: "Purushottam Rice mill", title: "Purushottam Rice mill" },
    { id: "Dushyant Rice Mill", title: "Dushyant Rice Mill" },
    { id: "Tulsi Rice Mill", title: "Tulsi Rice Mill" },
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
            Add Agreement
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex justify-between">
                <div>
                  <label className="text-base font-semibold text-gray-900">
                    Select Mill
                  </label>
                  <fieldset className="mt-4">
                    <legend className="sr-only">Mills</legend>
                    <div className="space-y-4">
                      {notificationMethods.map((notificationMethod) => (
                        <div
                          key={notificationMethod.id}
                          className="flex items-center"
                        >
                          <input
                            id={notificationMethod.id}
                            name="notification-method"
                            type="radio"
                            defaultChecked={notificationMethod.id === "email"}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor={notificationMethod.id}
                            className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                          >
                            {notificationMethod.title}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Agreement Number
                  </label>
                  <input
                    type="number"
                    name="Agreement_number"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={agreementData.Agreement_number}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <fieldset className="flex flex-wrap justify-evenly h-fit p-10">
                <div className="flex space-x-4">
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Mota
                    </label>
                    <input
                      type="number"
                      name="Mota"
                      className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={agreementData.Mota}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Patla
                    </label>
                    <input
                      type="number"
                      name="Patla"
                      className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={agreementData.Patla}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Sarna
                    </label>
                    <input
                      type="number"
                      name="Sarna"
                      className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={agreementData.Sarna}
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
                      name="Lot_from"
                      className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={agreementData.Lot_from}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Lot to
                    </label>
                    <input
                      type="number"
                      name="Lot_to"
                      className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={agreementData.Lot_to}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Total
                    </label>
                    <input
                      type="number"
                      name="Total"
                      className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={agreementData.Total}
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
