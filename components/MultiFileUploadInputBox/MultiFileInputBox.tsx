"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useField } from "formik";
import Image from "next/image";
// import { uploadApiEndpoint } from "@/utils/constants";
import { Icon } from "../Icon";

export type MultiFileInputBoxProps = {
  label: string;
  labelColor?: string;
  name: string;
  className?: string;
  maxFiles?: number;
};

interface UploadResponse {
  urls: string[];
}

async function uploadMultipleFiles(files: File[]): Promise<string[] | null> {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("files", file);
  });
  formData.append("uploadType", "config");

  const uploadConfig = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const uploadImageAPI = `/api/upload`;

  try {
    const response: AxiosResponse<UploadResponse> = await axios.post(
      uploadImageAPI,
      formData,
      uploadConfig
    );
    return response.data.urls;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export const MultiFileInputBox: React.FC<MultiFileInputBoxProps> = ({
  name,
  label,
  labelColor = "text-white",
  className = "w-full",
  maxFiles = 10,
}) => {
  const [field, meta, helpers] = useField(name);
  const [loading, setLoading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const hiddenFileInputRef = useRef<HTMLInputElement>(null);

  const handleUploadButtonClick = () => {
    if (field.value?.length >= maxFiles) {
      setUploadError(`Maximum ${maxFiles} files allowed`);
      return;
    }
    hiddenFileInputRef.current?.click();
  };

  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (!files) return;

    const currentFileCount = field.value?.length || 0;
    const remainingSlots = maxFiles - currentFileCount;

    if (remainingSlots <= 0) {
      setUploadError(`Maximum ${maxFiles} files allowed`);
      return;
    }

    const filesToUpload = Array.from(files).slice(0, remainingSlots);

    setLoading(true);
    setUploadError(null);

    const uploadedUrls = await uploadMultipleFiles(filesToUpload);

    setLoading(false);
    if (uploadedUrls) {
      helpers.setValue([...(field.value || []), ...uploadedUrls]);
    } else {
      setUploadError("File upload failed. Please try again.");
    }

    if (hiddenFileInputRef.current) {
      hiddenFileInputRef.current.value = "";
    }
  };

  const removeFile = (indexToRemove: number) => {
    const newUrls = field.value.filter(
      (_: string, index: number) => index !== indexToRemove
    );
    helpers.setValue(newUrls);
    setUploadError(null);
    return false;
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
        {uploadError && (
          <div className="text-red-500 text-sm">{uploadError}</div>
        )}
      </div>

      <div className="flex flex-row gap-4 w-full">
        {/* Upload Button - Fixed on the left */}
        <div
          className={`shrink-0 rounded-md w-[170px] h-[170px] flex justify-center items-center bg-white ${
            field.value?.length >= maxFiles
              ? "cursor-not-allowed opacity-50"
              : "cursor-pointer"
          }`}
          onClick={handleUploadButtonClick}
        >
          <div className="flex flex-col justify-center items-center gap-3">
            <Icon
              iconName={uploadError ? "error" : "upload"}
              size="2x"
              className="text-black"
            />
            <h1 className="text-sm text-gray-500 text-center">
              {loading
                ? "Uploading..."
                : uploadError
                ? "Try Again"
                : `Upload\n(${field.value?.length || 0}/${maxFiles})`}
            </h1>
          </div>
        </div>

        {/* Scrollable Image Container */}
        <div className="flex-1 w-full overflow-x-auto ">
          <div className="flex flex-row gap-4 w-fit">
            {field.value &&
              field.value.map((url: string, index: number) => (
                <div
                  key={index}
                  className="relative shrink-0 bg-white rounded-md"
                >
                  <div className="relative w-[170px] h-[170px]">
                    <Image
                      src={url}
                      alt={`Upload ${index + 1}`}
                      fill
                      className="rounded-md object-contain p-2"
                      sizes="170px"
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="absolute top-2 right-2 bg-red-500 text-white rounded-full hover:bg-red-600 w-6 h-6 flex justify-center items-center"
                    >
                      <Icon iconName="close" size="1x" />
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <input
        ref={hiddenFileInputRef}
        name={name}
        onChange={onChange}
        type="file"
        multiple
        accept="image/*"
        style={{ display: "none" }}
        max={maxFiles}
      />
    </div>
  );
};
