// SelectInput.js
import React from "react";
import Select from "react-select";

const SelectInput = ({
  label,
  name,
  options,
  value,
  OCname,
  placeholder,
  linkText,
  linkHref,
}) => {
  return (
    <div className="my-2.5">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-1">
        <Select
          styles={{
            indicatorSeparator: () => ({
              display: "none",
            }),
          }}
          placeholder={placeholder}
          name={name}
          options={options}
          value={value}
          onChange={(selectedOption) =>
            handleInputChange({
              target: {
                name: { OCname },
                value: selectedOption ? selectedOption.value : "",
              },
            })
          }
        />
        {linkText && linkHref && (
          <p className="mt-1.5 text-sm text-gray-500">
            {`Cannot Find ${label}? `}
            <a
              href={linkHref}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              {linkText}
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default SelectInput;
