import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Filter } from "../../models/Filter";
import { Post } from "../../models/Post";
import { fetchPosts } from '../actionCreators/postsActionCreators';

interface PostState {
  posts: Post[],
  postsOnPage: Post[],
  isLoading: boolean,
  error: string,
  page: number,
  readonly limit: number,
  count: number,
  filter: Filter,
  search: string,
  pages: number,
};

const initialState: PostState = {
  posts: [],
  postsOnPage: [],
  isLoading: false,
  error: '',
  count: 0,
  limit: 10,
  page: 1,
  pages: 1,
  filter: Filter.ID_DOWN,
  search: '',
};

const getState = (state: PostState): PostState => JSON.parse(JSON.stringify(state));

const getData = (posts: Post[], page: number, limit: number, search: string ) => {
  const lastEl = page * limit;
  
  const newPosts = search
  ? posts.filter(({ id, title, body }) => (
    id === Number(search) || title.includes(search) || body.includes(search)
  ))
  : posts;

  const postsOnPage = [...newPosts].slice(lastEl - limit, lastEl);
  const count = newPosts.length;
  const pages = Math.ceil((count || 1) / limit);
  
  return {
    postsOnPage,
    pages,
    count,
  };
};

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<Filter>) => {
      state.filter = action.payload;

      if (!state.posts.length) {
        return;
      }
      const copyState = getState(state);

      switch (action.payload) {
        case Filter.ID_DOWN:
          copyState.posts.sort(({ id: id_a }, { id: id_b }) => id_a - id_b);  
          state.posts = copyState.posts;
          break;
        case Filter.ID_UP:
          copyState.posts.sort(({ id: id_a }, { id: id_b }) => id_b - id_a);
          state.posts = copyState.posts;
          break;
        case Filter.TITLE_DOWN:
          copyState.posts.sort(({ title: title_a }, { title: title_b }) => title_a > title_b ? 1 : -1);
          state.posts = copyState.posts;
          break;
        case Filter.TITLE_UP:
          copyState.posts.sort(({ title: title_a }, { title: title_b }) => title_a > title_b ? -1 : 1);
          state.posts = copyState.posts;
          break;
        case Filter.DESCTIPTION_DOWN:
          copyState.posts.sort(({ body: body_a }, { body: body_b }) => body_a > body_b ? 1 : -1);
          state.posts = copyState.posts;
          break;
        case Filter.DESCTIPTION_UP:
          copyState.posts.sort(({ body: body_a }, { body: body_b }) => body_a > body_b ? -1 : 1);
          state.posts = copyState.posts;
          break;
        default:
          break;
      }

      const { pages, postsOnPage, count } = getData(copyState.posts, copyState.page, copyState.limit, copyState.search);

      state.postsOnPage = postsOnPage;
      state.pages = pages;
      state.count = count;
    },
    changePage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
      const copyState = getState(state);
      const { pages, postsOnPage, count } = getData(copyState.posts, copyState.page, copyState.limit, copyState.search);
      state.postsOnPage = postsOnPage;
      state.pages = pages;
      state.count = count;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      const copyState = getState(state);
      const { pages, postsOnPage, count } = getData(copyState.posts, 1, copyState.limit, action.payload);
      state.page = 1;
      state.pages = pages;
      state.count = count;
      state.postsOnPage = postsOnPage;
    },
  },
  extraReducers: {
    [fetchPosts.fulfilled.type]: (state, action: PayloadAction<Post[]>) => {
      state.isLoading = false;
      state.error = '';
      const { pages, postsOnPage, count } = getData(action.payload, state.page, state.limit, state.search);
      state.posts = action.payload;
      state.count = action.payload.length;
      state.pages = pages;
      state.count = count;
      state.postsOnPage = postsOnPage;
    },
    [fetchPosts.pending.type]: (state, action: PayloadAction<Post[]>) => {
      state.isLoading = true;
    },
    [fetchPosts.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default postSlice.reducer;
