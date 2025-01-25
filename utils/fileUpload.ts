import axios, { AxiosResponse } from "axios";
type UploadResponse = {
  url: string;
};

export async function uploadFile(f: File): Promise<string | null> {
  const formData = new FormData();
  formData.append("file", f);
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
    return response.data.url;
  } catch (e) {
    console.error(e);
    return null;
  }
}
