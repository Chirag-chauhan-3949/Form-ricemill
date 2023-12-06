// Selectt.js
import React from "react";
import Select from "react-select";

const Selectt = ({ onSelectChange }) => {
  const Warehouse = [
    { label: "PRM In", value: "prm_in" },
    { label: "PRM Out", value: "prm_out" },
    { label: "DRM IN", value: "drm_in" },
    { label: "DRM OUT", value: "drm_out" },
    { label: "TRM IN", value: "trm_in" },
    { label: "TRM OUT", value: "trm_out" },
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
            className="min-w-[240px]"
            options={Warehouse}
            placeholder="Select location"
          />
        </div>
      </div>
    </>
  );
};

export default Selectt;
