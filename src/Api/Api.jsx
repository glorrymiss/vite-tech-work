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

export const FetchUsersAll = async () => {
  try {
    const responce = await axios.get(
      `https://646b4f9f7d3c1cae4ce39997.mockapi.io/Users`
    );
    console.log(responce.data);
    return responce.data;
  } catch (error) {
    console.log(error);
  }
};

export const UpdateUsersAll = async (id, { followers, isFollowing }) => {
  const response = await axios.put(`/users/${id}`, {
    followers,
    isFollowing,
  });
  return response.data;
};

FetchApiUsers.propTypes = {
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
};
