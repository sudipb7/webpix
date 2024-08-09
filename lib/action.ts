"use server";

import axios from "axios";

export default async function compressImage(formData: FormData) {
  const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/convert`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return data.files;
}
