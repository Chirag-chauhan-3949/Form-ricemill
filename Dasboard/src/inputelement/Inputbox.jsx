import React from "react";

const Inputbox = ({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  disabled,
}) => {
  return (
    <div className="my-2.5">
      <div className="flex justify-between">
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      </div>
      <div className="mt-1">
        <input
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          className="block min-w-[250px] px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          onChange={onChange}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

export default Inputbox;
