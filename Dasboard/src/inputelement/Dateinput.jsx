// DateInput.js
import React from "react";

const DateInput = ({ value, onChange }) => {
  return (
    <div>
      <label
        htmlFor="date"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Date
      </label>
      <div className="mt-1">
        <input
          value={value}
          onChange={onChange}
          type="date"
          name="date"
          className="block min-w-[250px] w-full px-1.5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default DateInput;
