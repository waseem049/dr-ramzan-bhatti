import React, { ButtonHTMLAttributes } from "react";
import { Icon } from "../Icon";

type FormButtonProps = {
  label: string;
  loading: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const FormButton: React.FC<FormButtonProps> = ({
  label,
  loading,
  ...rest
}) => {
  return (
    <button
      disabled={loading}
      className={`bg-green-500 w-fit px-5 py-2 text-foreground font-montserratSemibold text-2xl self-center rounded-md ${
        loading ? " bg-gray-400 cursor-not-allowed" : ""
      } `}
      {...rest}
    >
      {loading ? <Icon iconName={"spinner"} className="fa-spin" /> : label}
    </button>
  );
};
