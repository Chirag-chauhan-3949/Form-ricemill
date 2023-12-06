// Selectt.js
import React from "react";
import Select from "react-select";
const customStyles = {
  control: (base) => ({
    ...base,
    height: 35,
    minheight: 30,
    width: 250,
    minwidth: 180,
  }),
  indicatorSeparator: (state) => ({
    display: "none",
  }),
};

const Warehouse = ({ onSelectChange }) => {
  const Warehouse = [
    { label: "Jagtara", value: "Jagtara" },
    { label: "Chitoud", value: "Chitoud" },
    { label: "Daundi", value: "Daundi" },
    { label: "Gunderdehi", value: "Gunderdehi" },
  ];

  return (
    <>
      <div className="flex justify-between">
        <label
          htmlFor="ware_house"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Select Warehouse
        </label>
      </div>
      <div className="mt-1 relative">
        <div className="relative inline-block text-left">
          <Select
            onChange={onSelectChange}
            name="ware_house"
            options={Warehouse}
            placeholder="Select Warehouse"
            styles={customStyles}
          />
        </div>
      </div>
    </>
  );
};

export default Warehouse;
