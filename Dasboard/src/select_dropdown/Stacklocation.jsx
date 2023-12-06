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

<Select
  styles={customStyles}
  name="do_id"
  options={
    DoOptionsricedonumber.do_number_data &&
    DoOptionsricedonumber.do_number_data.map((option) => ({
      label: option.do_number,
      value: option.do_id,
    }))
  }
  value={
    DhanAwakData.do_id
      ? {
          label: DoOptionsricedonumber.do_number_data.find(
            (option) => option.do_id === DhanAwakData.do_id
          ).do_number,
          value: DhanAwakData.do_id,
        }
      : null
  }
  onChange={(selectedOption) =>
    handleInputChange({
      target: {
        name: "do_id",
        value: selectedOption ? selectedOption.value : "",
      },
    })
  }
/>;
