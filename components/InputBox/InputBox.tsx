"use client";
import React from "react";
import { useField } from "formik";

interface InputBoxProps {
  label: string;
  name: string;
  placeholder: string;
  className?: string;
  type?: string;
  labelColor?: string;
}

export const InputBox: React.FC<InputBoxProps> = ({
  label,
  name,
  placeholder,
  className = "",
  type = "text",
  labelColor = "text-gray-700",
}) => {
  const [field, meta] = useField(name);

  return (
    <div className={` ${className} `}>
      <div className="flex flex-row justify-between items-center px-2">
        <h1 className={`block text-sm font-poppinsRegular ${labelColor}`}>
          {label}
        </h1>
        {meta.touched && meta.error ? (
          <div className="text-red-500 text-sm ml-2">{meta.error}</div>
        ) : null}
      </div>
      <input
        {...field}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`w-full px-3 py-2  placeholder:text-xs border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
          meta.touched && meta.error ? "border-red-500" : ""
        }`}
      />
    </div>
  );
};
