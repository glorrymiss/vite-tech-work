import axios from "axios";
import PropTypes from "prop-types";

export const FetchApiUsers = async ({ page, limit }) => {
  try {
    const responce = await axios.get(
      `https://646b4f9f7d3c1cae4ce39997.mockapi.io/Users/?page=${page}&limit=${limit}`
    );
    console.log(responce.data);
    return responce.data;
  } catch (error) {
    console.log(error);
  }
};

FetchApiUsers.propTypes = {
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
};
