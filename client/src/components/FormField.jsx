import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  placeholder,
  value,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div className="flex flex-col w-full max-w-[900px]">
      <div className="mb-2 flex justify-center items-center gap-4 w-full">
        <label htmlFor={name} className="block text-sm">
          {labelName}
        </label>
        {isSurpriseMe && (
          <button type="button" className="px-4 py-2 text-sm bg-blue-light/10 rounded-md text-blue-light font-bold tracking-wider hover:bg-white hover:scale-105 transition duration-200" onClick={handleSurpriseMe}>
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="w-full max-w-[900px] p-3 rounded-md border-blue/40 border-[1px] focus:ring-blue focus:border-blue outline-none block text-blue/90 placeholder:text-blue/40 placeholder:text-center"
      />
    </div>
  );
};

export default FormField;
