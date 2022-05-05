import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Pagination from '../../components/Pagination/Pagination';
import PostsTable from '../../components/PostsTable/PostsTable';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { RouteNames } from '../../models/Route';
import { postSlice } from '../../store/reducers/postsSlice'

import s from './PagePosts.module.scss';

const PagePosts: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pageNumber } = useParams();
  const { count, limit, isLoading } = useAppSelector(({ postsReducer }) => postsReducer);

  useEffect(() => {
    const { changePage } = postSlice.actions;

    if (isLoading || !count) {
      return;
    }

    if (pageNumber && ((Number(pageNumber) < 1) || (count <= (Number(pageNumber) * limit - limit)))) {
      navigate(RouteNames.MAIN);
      const { changePage } = postSlice.actions;
      dispatch(changePage(1));
    } else if (pageNumber) {
      dispatch(changePage(Number(pageNumber)));
    }
  }, [count, dispatch, isLoading, limit, navigate, pageNumber]);

  return (
    <Container className={s.container}>
      <PostsTable />
      <Pagination />
    </Container>
  )
}

export default PagePosts;
