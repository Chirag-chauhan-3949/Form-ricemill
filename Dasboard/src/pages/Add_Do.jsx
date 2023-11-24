import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add_Do = () => {
  const [DoData, setDoData] = useState({
    mill: "",
    date: "",
    do_number: "",
    select_agreement: "",
    mota_weight: "",
    mota_bardana: "",
    patla_weight: "",
    patla_bardana: "",
    sarna_weight: "",
    sarna_bardana: "",
    total_weight: "",
    total_bardana: "",
    Society: "",
    truck_number: "",
  });
  const [agreements, setAgreements] = useState([]);
  const [societies, setSocieties] = useState([]);
  const [trucks, setTrucks] = useState([]);

  useEffect(() => {
    // Fetch agreements
    fetch("YOUR_AGREEMENTS_API_ENDPOINT")
      .then((response) => response.json())
      .then((data) => setAgreements(data))
      .catch((error) => console.error("Error fetching agreements:", error));

    // Fetch societies
    fetch("YOUR_SOCIETIES_API_ENDPOINT")
      .then((response) => response.json())
      .then((data) => setSocieties(data))
      .catch((error) => console.error("Error fetching societies:", error));

    // Fetch trucks
    fetch("YOUR_TRUCKS_API_ENDPOINT")
      .then((response) => response.json())
      .then((data) => setTrucks(data))
      .catch((error) => console.error("Error fetching trucks:", error));
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoData({
      ...DoData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(DoData),
      });

      if (response.ok) {
        console.log("Form data sent successfully");
        toast.success("Do added successfully", {
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
        toast.error("Failed to add Do", {
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
      toast.error("Error Adding Do", {
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
            Add Do
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[680px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
              action="#"
              method="POST"
            >
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
                          key={notificationMethod.value}
                          className="flex items-center"
                        >
                          <input
                            name="mill"
                            type="radio"
                            value={notificationMethod.value}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            onChange={handleInputChange}
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
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="do_number"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      D0 Numbar
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="do_number"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="select_agreement"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Select Agreement
                    </label>
                  </div>
                  <div className="mt-1">
                    <select
                      type="select_agreement"
                      name="select_agreement"
                      className=" bg-white block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    >
                      {" "}
                      <option value="">-Select Agreement-</option>
                      {agreements.map((agreement) => (
                        <option key={agreement.id} value={agreement.value}>
                          {agreement.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <p className="mt-2 text-center text-sm text-gray-500">
                    Cannot Find agreement?{" "}
                    <a
                      href="/Add_Agreement"
                      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                      Add Agreement.
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="mota_weight"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Mota Weight
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="mota_weight"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="mota_bardana"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Mota Bardana
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="mota_bardana"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="patla_weight"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Patla Weight
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="patla_weight"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="patla_bardana"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Patla Bardana
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="patla_bardana"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="sarna_weight"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Sarna weight
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="sarna_weight"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="sarna_bardana"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Sarna Weight
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="sarna_bardana"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="total_weight"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Total Weight
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="total_weight"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between">
                    <label
                      htmlFor="total_bardana"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Total Bardana
                    </label>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="total_bardana"
                      className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="Society"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Society
                  </label>
                </div>
                <div className="mt-1">
                  <select
                    name="Society"
                    className="bg-white block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  >
                    <option value="">-Select a Society-</option>
                  </select>
                  <p className="mt-2  text-sm text-gray-500">
                    Cannot Find Society?{" "}
                    <a
                      href="/Add_New_Society"
                      className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                      Add New Society.
                    </a>
                  </p>
                </div>
              </div>
              <div>
                <label
                  htmlFor="truck_number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  truck Number
                </label>

                <div className="mt-1">
                  <select
                    name="truck_number"
                    className=" bg-white block w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={handleInputChange}
                  >
                    <option value="">-Select a Truck-</option>
                  </select>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Cannot Find Truck?{" "}
                  <a
                    href="/Add_NEw_Truck"
                    className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                  >
                    Add New Truck.
                  </a>
                </p>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Add_Do;
