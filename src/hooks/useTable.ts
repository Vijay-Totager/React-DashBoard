import { fetchTableData } from "Components/service/table";

export const useTable = () => {
    const getTask = async () => {
        try {
          const response = await fetchTableData();
          if (response.status === 200) {
            console.log(response.data); // Log the data
            return response.data; // Return the data
          } else if (response.status === 302) {
            // Handle redirection or other status codes as needed
            console.log('Redirection or another status code received');
          } else {
            // Handle other statuses or errors
            console.log('An error occurred or unexpected status');
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

  return {
    getTask,
  };
};
