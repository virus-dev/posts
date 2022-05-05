import React from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { postSlice } from '../../store/reducers/postsSlice';

import s from './Pagination.module.scss';

const Pagination = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { changePage } = postSlice.actions;
  const { limit, page, pages, isLoading, count, postsOnPage } = useAppSelector(({ postsReducer }) => postsReducer);
  
  const backButtonHandler = () => {
    const newPage = page - 1 < 1 ? 1 : page - 1;
    dispatch(changePage(newPage));
    navigate(`/${newPage}`);
  }

  const buttonNumberHandler = (number: number) => {
    dispatch(changePage(number));
    navigate(`/${number}`);
  }

  const nextButtonHandler = () => {
    const newPage = (page + 1) * limit - limit >= count ? page : page + 1;
    dispatch(changePage(newPage));
    navigate(`/${newPage}`);
  }

  if (isLoading || !postsOnPage.length) {
    return null;
  }

  return (
    <div className={s.pagination}>
      <button onClick={backButtonHandler}>Назад</button>
      <div className={s.pageNumbers}>
        {new Array(pages).fill(0).map((_, i) => (
          <button
            key={i}
            onClick={() => buttonNumberHandler(i + 1)}
            className={classNames(
              s.pageNumber, i + 1 === page
              && s.pageNumberActive
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button onClick={nextButtonHandler}>Далее</button>
    </div>
  );
};

export default Pagination;
