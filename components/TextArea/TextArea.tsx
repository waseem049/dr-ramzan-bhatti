"use client";
import React from "react";
import { useField } from "formik";

interface TextAreaProps {
  label: string;
  name: string;
  placeholder: string;
  className?: string;
  rows?: number;
}

const TextArea: React.FC<TextAreaProps> = ({
  label,
  name,
  placeholder,
  className = "",
  rows = 4,
}) => {
  const [field, meta] = useField(name);

  return (
    <div className={` ${className} `}>
      <div className="flex flex-row justify-between items-center px-2">
        <h1 className="block text-sm font-poppinsRegular text-gray-700">
          {label}
        </h1>
        {meta.touched && meta.error ? (
          <div className="text-red-500 text-sm ml-2">{meta.error}</div>
        ) : null}
      </div>
      <textarea
        {...field}
        id={name}
        name={name}
        placeholder={placeholder}
        rows={rows}
        className={`w-full min-h-[100px] px-3 py-2 placeholder:text-xs border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 resize-y ${
          meta.touched && meta.error ? "border-red-500" : ""
        }`}
      />
    </div>
  );
};

export default TextArea;
