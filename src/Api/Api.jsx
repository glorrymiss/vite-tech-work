import axios from "axios";

export const FetchApiUsers = async () => {
  try {
    const responce = await axios.get(
      "https://646b4f9f7d3c1cae4ce39997.mockapi.io/Users"
    );
    console.log(responce.data);
    return responce.data;
  } catch (error) {
    console.log(error);
  }
};
