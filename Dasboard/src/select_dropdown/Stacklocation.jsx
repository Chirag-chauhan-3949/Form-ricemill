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

const Stacklocation = ({ onSelectChange }) => {
  const Warehouse = [
    { label: "prm_in", value: "PRM In" },
    { label: "prm_out", value: "PRM Out" },
    { label: "drm_in", value: "DRM IN" },
    { label: "drm_out", value: "DRM OUT" },
    { label: "trm_in", value: "TRM IN" },
    { label: "trm_out", value: "TRM OUT" },
  ];

  return (
    <>
      <div className="flex justify-between">
        <label
          htmlFor="stack_location"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Ware House
        </label>
      </div>
      <div className="mt-1 relative">
        <div className="relative inline-block text-left">
          <Select
            onChange={onSelectChange}
            name="stack_location"
            className=""
            options={Warehouse}
            placeholder="Select location"
            styles={customStyles}
          />
        </div>
      </div>
    </>
  );
};

export default Stacklocation;