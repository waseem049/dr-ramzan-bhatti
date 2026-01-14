import React, { ButtonHTMLAttributes } from "react";
import { Icon } from "../Icon";

type FormButtonProps = {
  label: string;
  loading: boolean;
  disabled: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const FormButton: React.FC<FormButtonProps> = ({
  label,
  loading,
  disabled = false,
  ...rest
}) => {
  return (
    <button
      disabled={loading || disabled}
      className={`bg-green-500 w-fit px-5 py-2 text-foreground font-montserratSemibold text-2xl self-center rounded-md disabled:cursor-not-allowed disabled:bg-gray-400 ${
        loading || disabled ? "bg-gray-400" : ""
      }`}
      {...rest}
    >
      {loading ? <Icon iconName={"spinner"} className="fa-spin" /> : label}
    </button>
  );
};
