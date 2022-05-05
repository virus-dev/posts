import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchPosts } from '../../store/actionCreators/postsActionCreators';
import { postSlice } from '../../store/reducers/postsSlice'
import PostsTableHeader from './PostsTableHeader/PostsTableHeader';
import PostsTableRows from './PostsTableRows/PostsTableRows';
import IconSearch from '../Icons/IconSearch';
import Input from '../Input/Input';

import s from './PostsTable.module.scss';

const PostsTable = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const search = useAppSelector(({ postsReducer }) => postsReducer.search);

  const onChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    const { setSearch } = postSlice.actions;
    dispatch(setSearch(value));
    navigate('/1')
  }

  useEffect(() => {
      dispatch(fetchPosts());
  }, [dispatch])

  return (
    <>
      <Input value={search} onChange={onChange} placeholder="Поиск" className={s.input} icon={<IconSearch />} />
      <PostsTableHeader />
      <PostsTableRows />
    </>
  );
};

export default PostsTable;
