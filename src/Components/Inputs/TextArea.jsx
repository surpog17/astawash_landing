// TextArea.js
import React from "react";

const TextArea = ({
  label,
  labelClass = "block text-gray-700 text-sm font-bold mb-2",
  placeholder,
  value,
  onChange,
  className = "resize-none border rounded-md w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline",
}) => {
  return (
    <div className="mb-2">
      <label className={labelClass}>{label}</label>
      <textarea
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextArea;
