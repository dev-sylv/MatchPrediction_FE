import axios from "axios";

const url = "http://localhost:1511/api/users";

export const UserISVerified = async (userID: string) => {
  try {
    return await axios.get(`${url}/${userID}/verifyuser`);
  } catch (error) {
    console.log(error);
  }
};
