import React from 'react';
import IconArrow from '../../Icons/IconArrow/IconArrow';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { postSlice } from '../../../store/reducers/postsSlice';
import { Filter } from '../../../models/Filter';

import s from './PostsTableHeader.module.scss';

const PostsTableHeader = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(({ postsReducer }) => postsReducer.filter)

  const buttonIdHandler = () => {
    const { changeFilter } = postSlice.actions;
    if (Filter.ID_DOWN === filter) {
      return dispatch(changeFilter(Filter.ID_UP));
    }
    dispatch(changeFilter(Filter.ID_DOWN));
  }

  const buttonTitleHandler = () => {
    const { changeFilter } = postSlice.actions;
    if (Filter.TITLE_DOWN === filter) {
      return dispatch(changeFilter(Filter.TITLE_UP));
    }
    dispatch(changeFilter(Filter.TITLE_DOWN));
  }

  const buttonDescriptionHandler = () => {
    const { changeFilter } = postSlice.actions;
    if (Filter.DESCTIPTION_DOWN === filter) {
      return dispatch(changeFilter(Filter.DESCTIPTION_UP));
    }
    dispatch(changeFilter(Filter.DESCTIPTION_DOWN));
  }

  return (
    <div className={s.postsTableHeader}>
      <button
        className={s.postsTableHeaderButton}
        onClick={buttonIdHandler}
      >
        <div>ID</div>
        {Filter.ID_DOWN === filter && <IconArrow />}
        {Filter.ID_UP === filter && <div className={s.flipOver}><IconArrow /></div>}
      </button>
      <button
        className={s.postsTableHeaderButton}
        onClick={buttonTitleHandler}
      >
        <div>Заголовок</div>
        {Filter.TITLE_DOWN === filter && <IconArrow />}
        {Filter.TITLE_UP === filter && <div className={s.flipOver}><IconArrow /></div>}
      </button>
      <button
        className={s.postsTableHeaderButton}
        onClick={buttonDescriptionHandler}
      >
        <div>Описание</div>
        {Filter.DESCTIPTION_DOWN === filter && <IconArrow />}
        {Filter.DESCTIPTION_UP === filter && <div className={s.flipOver}><IconArrow /></div>}
      </button>
    </div>
  )
}

export default PostsTableHeader;
