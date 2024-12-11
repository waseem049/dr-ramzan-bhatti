"use client";
import { Salutation } from "@prisma/client";
import { useField } from "formik";

type CheckBoxProps = {
  name: string;
  label: string;
  value: Salutation;
  labelColor?: string;
} & Omit<React.ComponentProps<"div">, "name" | "label" | "value">;

export const CheckBox: React.FC<CheckBoxProps> = ({
  name,
  label,
  value,
  labelColor,
  ...props
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [field, meta, helpers] = useField(name);

  const handleClick = () => {
    helpers.setValue(value);
  };

  const isSelected = field.value === value;

  return (
    <div
      {...props}
      onClick={handleClick}
      className={`flex flex-row justify-center items-center w-fit gap-2 cursor-pointer`}
    >
      <div
        className={`w-[15px] h-[15px] border border-white rounded-[2px] ${
          isSelected ? "bg-white" : ""
        }`}
      />
      <h1 className={`text-sm font-poppinsRegular select-none ${labelColor}`}>
        {label}
      </h1>
    </div>
  );
};
