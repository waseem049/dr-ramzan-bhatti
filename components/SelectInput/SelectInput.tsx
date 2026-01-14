"use client";
import React from "react";
import { useField } from "formik";
import { LabelValue } from "@/utils/types";
import AsyncSelect from "react-select/async";
import { MultiValue, SingleValue, StylesConfig } from "react-select";

type SelectInputProps = {
  name: string;
  placeholder: string;
  label: string;
  labelColor?: string;
  loadOptions?: (inputValue: string) => Promise<Array<LabelValue>>;
  defaultOptions: LabelValue[];
  defaultValue?: LabelValue | null;
  className?: string;
  isMulti?: boolean;
  zIndex?: number;
};

export const SelectInput: React.FC<SelectInputProps> = ({
  label,
  labelColor = "text-white",
  name,
  loadOptions,
  defaultOptions,
  placeholder,
  defaultValue,
  className = "",
  isMulti = false,
  zIndex = 2,
}) => {
  const [field, meta, helpers] = useField(name);

  const handleChange = (
    option: MultiValue<LabelValue> | SingleValue<LabelValue>
  ) => {
    helpers.setValue(option);
  };

  const styles: StylesConfig<LabelValue, boolean> = {
    container: (provided) => ({
      ...provided,
      width: "100%",
      zIndex,
    }),
    control: (provided) => ({
      ...provided,
      display: "flex",
      minHeight: 40,
      borderRadius: 6,
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: 12,
      fontFamily: "PoppinsRegular",
      color: "#9CA3AF",
    }),
  };

  const defaultLoadOptions = async (
    inputValue: string
  ): Promise<LabelValue[]> => {
    return defaultOptions.filter((option) =>
      option.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  return (
    <div className={`${className} flex flex-col gap-1`}>
      <div className="flex flex-row justify-between items-center px-2">
        <h1 className={`block text-sm font-poppinsRegular ${labelColor}`}>
          {label}
        </h1>
        {meta.touched && meta.error ? (
          <div className="text-red-500 text-sm ml-2">{meta.error}</div>
        ) : null}
      </div>
      <AsyncSelect<LabelValue, boolean>
        isMulti={isMulti}
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        loadOptions={loadOptions || defaultLoadOptions}
        cacheOptions
        defaultOptions={defaultOptions}
        styles={styles}
        defaultValue={field.value || defaultValue}
      />
    </div>
  );
};
