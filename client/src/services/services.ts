// client/src/services/apiCallerService.ts

import axios from "axios";

interface ApiResponse {
  code: number;
  data: NameData[];
}

interface NameData {
  id: string;
  name: string;
}

const API_BASE_URL = "http://localhost:3001/api";

export const getName = async () => {
  try {
    const response = await axios.get<ApiResponse>(`${API_BASE_URL}/getNames`);
    return response.data.data;
  } catch (error) {
    console.error("Error in addName service:", error);
    throw error;
  }
};

export const addName = async (formData: FormData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/addName`, formData);
    console.log("Response from addName:", response.data);
  } catch (error) {
    console.error("Error in addName service:", error);
    throw error;
  }
};
