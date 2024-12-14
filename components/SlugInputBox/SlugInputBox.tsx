"use client";
import React, { useState, useEffect } from "react";
import { useField } from "formik";
import slugify from "slugify";
import { useCheckBlogSlugUniqueness } from "@/hooks/useCheckBlogSlugUniqueness";

interface SlugInputBoxProps {
  label: string;
  name: string;
  placeholder: string;
  toSlugifyValue: string | undefined;
  className?: string;
  type?: string;
  labelColor?: string;
  inputClasses?: string;
  blogId?: string;
}

export const SlugInputBox: React.FC<SlugInputBoxProps> = ({
  label,
  name,
  placeholder,
  toSlugifyValue,
  className = "",
  type = "text",
  labelColor = "text-white",
  inputClasses = "",
  blogId,
}) => {
  const [field, meta, helpers] = useField(name);
  const [inputValue, setInputValue] = useState("");
  const { isChecking, slugExists, checkSlugUniqueness } =
    useCheckBlogSlugUniqueness(blogId);

  useEffect(() => {
    if (toSlugifyValue) {
      const slugifiedValue = slugify(toSlugifyValue, {
        lower: true,
        replacement: "-",
        strict: true,
        trim: true,
      });
      setInputValue(slugifiedValue);
      helpers.setValue(slugifiedValue);

      checkSlugUniqueness(slugifiedValue);
    } else {
      setInputValue("");
      helpers.setValue("");
    }
  }, [toSlugifyValue, helpers, checkSlugUniqueness]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const slugifiedValue = slugify(value, {
      lower: true,
      replacement: "-",
      strict: true,
      trim: true,
    });
    setInputValue(slugifiedValue);
    helpers.setValue(slugifiedValue);

    await checkSlugUniqueness(slugifiedValue);
  };

  useEffect(() => {
    if (slugExists) {
      helpers.setError("Slug Already Exists");
    } else {
      helpers.setError("");
    }
  }, [slugExists, helpers]);

  return (
    <div className={`${className} flex flex-col gap-1`}>
      <div className="flex flex-row justify-between items-center px-2">
        <h1 className={`block text-sm font-poppinsRegular ${labelColor}`}>
          {label}
        </h1>
        <div className="flex items-center gap-2">
          {isChecking && (
            <span className="text-gray-400 text-sm">Checking...</span>
          )}
          {meta.touched && meta.error ? (
            <div className="text-red-500 text-sm ml-2">{meta.error}</div>
          ) : null}
        </div>
      </div>
      <input
        {...field}
        value={inputValue}
        onChange={handleChange}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        className={`${inputClasses} w-full h-[40px] px-3 py-2 font-poppinsRegular placeholder:text-xs placeholder:text-gray-400 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 ${
          (meta.touched && meta.error) || slugExists
            ? "border-red-500"
            : "border-green-500"
        }`}
      />
    </div>
  );
};
