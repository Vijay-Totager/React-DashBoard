import axios from "axios";

const BASE_URL = 'https://jsonplaceholder.typicode.com';


export const fetchTableData = async (): Promise<{ status: number; data: any }> => {
  try {
    const response = await axios.get(`${BASE_URL}/todos`, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return { status: response.status, data: response.data };
  } catch (err) {
    return { status: 500, data: [] };
  }
};
