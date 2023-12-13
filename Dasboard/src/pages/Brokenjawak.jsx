import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import Dateinput from "../inputelement/Dateinput";
import "react-toastify/dist/ReactToastify.css";
import Inputbox from "../inputelement/Inputbox";
import axios from "axios";
import SelectInput from "../inputelement/Selectinput";

const Brokenjawak = () => {
  const [BrokenjawakData, setBrokenjawakData] = useState({
    rst_number: 0,
    date: "",
    party_id: "",
    rice_mill_name_id: "",
    broker_id: "",
    brokerage_percentage: 0,
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
  const [Ricemilldata, setRicemilldata] = useState([]);
  const [Partydata, setPartydata] = useState([]);
  const [Brokerdata, setBrokerdata] = useState([]);
  const [Truckdata, setTruckdata] = useState([]);
  useEffect(() => {
    async function fetchMillData() {
      try {
        const rice_mill_data = await axios.get(
          "http://localhost:8000/rice-mill"
        );

        const data = rice_mill_data.data;
        setRicemilldata(data);
        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchMillData();
  }, []);
  useEffect(() => {
    async function fetchPartyData() {
      try {
        const party_data = await axios.get("http://localhost:8000/party-data");

        const data = party_data.data;
        setPartydata(data);
        // console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchPartyData();
  }, []);
  useEffect(() => {
    async function fetchbrokerData() {
      try {
        const broker_data = await axios.get(
          "http://localhost:8000/broker-data"
        );

        const data = broker_data.data;
        setBrokerdata(data);
        // console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchbrokerData();
  }, []);
  useEffect(() => {
    async function fetchtruckData() {
      try {
        const truck_data = await axios.get("http://localhost:8000/trucks");

        const data = truck_data.data;
        setTruckdata(data);
        // console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchtruckData();
  }, []);

  const initialBrokenjawakData = {
    rst_number: 0,
    date: "",
    party_id: "",
    rice_mill_name_id: "",
    broker_id: "",
    brokerage_percentage: 0,
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
  };
  const resetForm = () => {
    setBrokenjawakData(initialBrokenjawakData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBrokenjawakData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/broken-jawak",
        BrokenjawakData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status >= 201 || response.status < 300) {
        console.log("Broken Jawak added successfully");
        toast.success("Broken Jawak added successfully", {
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
        console.error("Failed to add Broken Jawak");
        toast.error("Failed to add Broken Jawak", {
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
      toast.error("Error adding Broken Jawak", {
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
            Add Broken Jawak
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[740px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex justify-between flex-wrap ">
                <Inputbox
                  label="RST"
                  name="rst_number"
                  type="number"
                  value={Brokenjawak.rst_number}
                  onChange={handleInputChange}
                  placeholder="Enter rst number"
                />
                <Dateinput
                  value={BrokenjawakData.date}
                  onChange={handleInputChange}
                  label="Date"
                  name="date"
                />
              </div>
              <SelectInput
                label="Party"
                name="party_id"
                placeholder="Select Party"
                options={
                  Partydata.party_data &&
                  Partydata.party_data.map((option) => ({
                    label: option.party_name,
                    value: option.party_id,
                  }))
                }
                value={
                  BrokenjawakData.party_id
                    ? {
                        label: Partydata.party_data.find(
                          (option) =>
                            option.party_id === BrokenjawakData.party_id
                        ).party_name,
                        value: BrokenjawakData.party_id,
                      }
                    : null
                }
                onChange={(selectedOption) =>
                  handleInputChange({
                    target: {
                      name: "party_id",
                      value: selectedOption ? selectedOption.value : "",
                    },
                  })
                }
              />
              <div className="flex justify-between">
                <SelectInput
                  label="Select Rice Mill"
                  name="rice_mill_name_id"
                  options={
                    Ricemilldata.rice_mill_data &&
                    Ricemilldata.rice_mill_data.map((option) => ({
                      label: option.rice_mill_name,
                      value: option.rice_mill_id,
                    }))
                  }
                  value={
                    BrokenjawakData.rice_mill_name_id
                      ? {
                          label: Ricemilldata.rice_mill_data.find(
                            (option) =>
                              option.rice_mill_id ===
                              BrokenjawakData.rice_mill_name_id
                          ).rice_mill_name,
                          value: BrokenjawakData.rice_mill_name_id,
                        }
                      : null
                  }
                  onChange={(selectedOption) =>
                    handleInputChange({
                      target: {
                        name: "rice_mill_name_id",
                        value: selectedOption ? selectedOption.value : "",
                      },
                    })
                  }
                  placeholder="Select Mill"
                />
                <SelectInput
                  label="Broker"
                  name="broker_id"
                  options={
                    Brokerdata.broker_data &&
                    Brokerdata.broker_data.map((option) => ({
                      label: option.broker_name,
                      value: option.broker_id,
                    }))
                  }
                  value={
                    BrokenjawakData.broker_id
                      ? {
                          label: Brokerdata.broker_data.find(
                            (option) =>
                              option.broker_id === BrokenjawakData.broker_id
                          ).broker_name,
                          value: BrokenjawakData.broker_id,
                        }
                      : null
                  }
                  onChange={(selectedOption) =>
                    handleInputChange({
                      target: {
                        name: "broker_id",
                        value: selectedOption ? selectedOption.value : "",
                      },
                    })
                  }
                  placeholder="Select Broker"
                />
              </div>
              <div className="flex justify-between">
                <Inputbox
                  label="Brokerage Percent"
                  name="brokerage_percentage"
                  type="number"
                  value={BrokenjawakData.brokerage_percentage}
                  onChange={handleInputChange}
                  placeholder="Enter Brokerage Percent"
                />
                <Inputbox
                  label=" Weight"
                  name="weight"
                  type="number"
                  value={BrokenjawakData.weight}
                  onChange={handleInputChange}
                  placeholder="Enter Weight "
                />
              </div>
              <div className="flex justify-between flex-wrap">
                <Inputbox
                  label="Rate"
                  name="rate"
                  type="number"
                  value={BrokenjawakData.rate}
                  onChange={handleInputChange}
                  placeholder="Enter Rate "
                />
                <Inputbox
                  label="Number of Bags"
                  name="number_of_bags"
                  type="number"
                  value={BrokenjawakData.number_of_bags}
                  onChange={handleInputChange}
                  placeholder="Enter Number of Bags "
                />
              </div>
              <div className="flex justify-between">
                <SelectInput
                  label="Truck Number"
                  name="truck_number_id"
                  options={
                    Truckdata.truck_data &&
                    Truckdata.truck_data.map((option) => ({
                      label: option.truck_number,
                      value: option.truck_id,
                    }))
                  }
                  value={
                    Brokenjawak.truck_number_id
                      ? {
                          label: Truckdata.truck_data.find(
                            (option) =>
                              option.truck_id === Brokenjawak.truck_number_id
                          ).truck_number,
                          value: Brokenjawak.truck_number_id,
                        }
                      : null
                  }
                  onChange={(selectedOption) =>
                    handleInputChange({
                      target: {
                        name: "truck_number_id",
                        value: selectedOption ? selectedOption.value : "",
                      },
                    })
                  }
                  placeholder="Select Truck Number"
                />
                <Inputbox
                  disabled={true}
                  label="Total"
                  name="total"
                  type="number"
                  value={
                    (BrokenjawakData.total =
                      BrokenjawakData.rate * BrokenjawakData.weight)
                  }
                  onChange={handleInputChange}
                  placeholder="Enter total "
                />
              </div>
              <div className="flex justify-between">
                <Inputbox
                  disabled={true}
                  label="Brokerage"
                  name="brokerage"
                  type="number"
                  value={
                    (BrokenjawakData.brokerage = BrokenjawakData.weight * 7)
                  }
                  onChange={handleInputChange}
                  placeholder="Enter Brokerage "
                />
                <Inputbox
                  disabled={true}
                  label=" Net Recievable"
                  name="net_recievable"
                  type="number"
                  value={
                    (BrokenjawakData.net_recievable =
                      BrokenjawakData.total - BrokenjawakData.brokerage)
                  }
                  onChange={handleInputChange}
                  placeholder="Enter Net Recievable "
                />
              </div>
              <div className="flex justify-between">
                <Dateinput
                  label="Loading Date"
                  name="loading_date"
                  value={BrokenjawakData.loading_date}
                  onChange={handleInputChange}
                />
                <Dateinput
                  label="Recieved Date"
                  name="recieved_date"
                  value={BrokenjawakData.recieved_date}
                  onChange={handleInputChange}
                />
              </div>
              <div className="flex justify-between">
                <Inputbox
                  label="Payment Recieved"
                  name="payment_recieved"
                  type="number"
                  value={BrokenjawakData.payment_recieved}
                  onChange={handleInputChange}
                  placeholder="Enter Payment Recieved"
                />
                <Inputbox
                  disabled={true}
                  label="Number of Days"
                  name="number_of_days"
                  type="text"
                  value={
                    (BrokenjawakData.number_of_days =
                      ((BrokenjawakData.recieved_date -
                        BrokenjawakData.loading_date) /
                        1000) *
                      60 *
                      60 *
                      24)
                  }
                  onChange={handleInputChange}
                  placeholder="Enter Number of Days "
                />
              </div>
              <div className="flex justify-between">
                <Inputbox
                  disabled={true}
                  label="Payment Difference"
                  name="payment_difference"
                  type="number"
                  value={
                    (BrokenjawakData.payment_difference =
                      BrokenjawakData.total - BrokenjawakData.payment_recieved)
                  }
                  onChange={handleInputChange}
                  placeholder="Enter Payment Difference "
                />
                <Inputbox
                  label=" Remarks "
                  name="remarks"
                  type="text"
                  value={BrokenjawakData.remarks}
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
                  Add Broken Jawak
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

export default Brokenjawak;
