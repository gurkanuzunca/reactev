import { FETCH_POSTS, NEW_POST } from "./types";
import axios from "axios/index";

export const fetchPosts = () => dispatch => {
  axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      dispatch({
        type: FETCH_POSTS,
        payload: response.data
      });
    });
};


export const newPost = (postData) => dispatch => {
  axios.post('https://jsonplaceholder.typicode.com/posts', postData)
    .then(response => {
      dispatch({
        type: NEW_POST,
        payload: response.data
      });
    });
};