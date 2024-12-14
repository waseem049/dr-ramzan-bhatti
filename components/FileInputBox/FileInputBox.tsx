"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useField } from "formik";
import Image from "next/image";
import { uploadApiEndpoint } from "@/utils/constants";
import { Icon } from "../Icon";

export type FileInputBoxProps = {
  label: string;
  labelColor?: string;
  name: string;
  className?: string;
};

interface UploadResponse {
  url: string;
}

async function uploadFile(f: File): Promise<string | null> {
  const formData = new FormData();
  formData.append("file", f);
  formData.append("uploadType", "config");

  const uploadConfig = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const uploadImageAPI = `${uploadApiEndpoint}/upload`;
  try {
    const response: AxiosResponse<UploadResponse> = await axios.post(
      uploadImageAPI,
      formData,
      uploadConfig
    );
    return response.data.url;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export const FileInputBox: React.FC<FileInputBoxProps> = ({
  name,
  label,
  labelColor = "text-white",
  className = "",
}) => {
  const [field, meta, helpers] = useField(name);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const hiddenFileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadButtonClick = () => {
    hiddenFileInputRef.current?.click();
  };

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files ? e.currentTarget.files[0] : null;
    if (file) {
      setLoading(true);
      setError(null);
      const uploadedUrl = await uploadFile(file);
      setLoading(false);
      if (uploadedUrl) {
        helpers.setValue(uploadedUrl);
      } else {
        setError("File upload failed. Please try again.");
      }
    }
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

      <div
        className="rounded-md w-[170px] h-[170px] cursor-pointer flex justify-center items-center gap-3 bg-white"
        onClick={handleUploadButtonClick}
      >
        {field.value !== "" ? (
          <Image
            src={field.value}
            alt={"Preview"}
            width={160}
            height={160}
            style={{ borderRadius: "10px" }}
          />
        ) : (
          <div className="flex flex-col justify-center items-center gap-3">
            <Icon
              iconName={error ? "error" : "upload"}
              size="2x"
              className="text-black"
            />
            <h1 className={"text-lg text-gray-500"}>
              {loading ? "Uploading" : error ? "Try Again" : "Upload"}
            </h1>
          </div>
        )}
      </div>
      <input
        ref={hiddenFileInputRef}
        name={name}
        onChange={onChange}
        type="file"
        style={{ cursor: "pointer", display: "none", width: "100%" }}
      />
    </div>
  );
};
