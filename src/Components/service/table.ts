import axios from "axios"

export const getTableData = async () => {
    try {
      const response = await axios.get('http://localhost:3001/items', {
        headers: {
        
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 200) {
        
          return response;
        }
      
      return response;
    } catch (err) {
      
      return { status: 500 };
    }
  };