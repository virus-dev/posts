import React from 'react';
import { useAppSelector } from '../../../hooks/redux';
import PostsTableRow from '../PostsTableRow/PostsTableRow';

const PostsTableRows = () => {
  const { postsOnPage, isLoading } = useAppSelector(({ postsReducer }) => postsReducer);

  if (isLoading) {
    return <div>Загрузка</div>;
  }

  if (!postsOnPage.length) {
    return <div>Ничего не найдено</div>;
  }

  return (
    <>
      {
        postsOnPage.map(({ id, title, body }) => (
          <PostsTableRow id={id} title={title} body={body} key={id} />
        ))
      }
    </>
  )
};

export default PostsTableRows;
