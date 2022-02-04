import axios from "axios";
import { BLOGS_ENDPOINT } from "../common/constants";

export const addBlog = async (title, body) => {
  try {
    const { data } = await axios.post(BLOGS_ENDPOINT, {
      title: title,
      body: body,
    });
    return data.message;
  } catch ({ response: { data } }) {
    return data.error;
  }
};

export const getAllBlogs = async () => {
  try {
    const { data } = await axios.get(BLOGS_ENDPOINT);
    return data;
  } catch ({ response: { data } }) {
    return data.error;
  }
};