import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Post } from "../../models/Post";

export const fetchPosts = createAsyncThunk(
  'fetchPosts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Не удалось загрузить посты');
    }
  }
);