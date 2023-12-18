import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add_Warehouse = () => {
  const [Addwarehouse, Addwarehousedata] = useState({
    ware_houes_name: "",
    ware_house_transporting_rate: 0,
    hamalirate: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    Addwarehousedata({
      ...Addwarehouse,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:8000/ware-house-transporting/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Addwarehouse),
        }
      );

      if (response.ok) {
        // console.log("Rice mill added successfully");
        toast.success("Ware House added successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        // console.error("Failed to add rice mill");
        toast.error("Failed to add Ware House", {
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
      // console.error("Error:", error);
      toast.error("Error adding Ware House", {
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
            Add Ware House
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="mill_address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Ware House Name
                  </label>
                  <span className="text-sm leading-6 text-red-500">
                    Required
                  </span>
                </div>
                <div className="mt-2">
                  <input
                    type="text"
                    name="ware_houes_name"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter Ware House Name"
                    value={Addwarehouse.ware_houes_name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="gst_number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Transporting Rate
                  </label>
                  <span className="text-sm leading-6 text-red-500">
                    Required
                  </span>
                </div>
                <div className="mt-2">
                  <input
                    placeholder="Enter Transporting Rate"
                    type="number"
                    name="ware_house_transporting_rate"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={Addwarehouse.ware_house_transporting_rate}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="mill_address"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Hamali Rate
                  </label>
                  <span className="text-sm leading-6 text-red-500">
                    Required
                  </span>
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    name="hamalirate"
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Enter Hamali Rate"
                    value={Addwarehouse.hamalirate}
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
                  Add Rice Mill
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

export default Add_Warehouse;
