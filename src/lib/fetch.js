import axios from "axios";

export const fetchApi = async (url, params = {}) => {
  try {
    const response = await axios.get(`${url}?${params}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// export const fetchApi = async (url) => {
//     try {
//       const response = await axios.get(url);
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   };
