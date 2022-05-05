import React from 'react';

import s from './PostsTableRow.module.scss';

interface PostsTableRowProps {
  id: number,
  title: string,
  body: string,
}

const PostsTableRow: React.FC<PostsTableRowProps> = ({ id, title, body }) => (
  <div className={s.postsTableRow}>
    <div className={s.postsTableRowId}>{id}</div>
    <div className={s.postsTableRowTitle}>{title}</div>
    <div className={s.postsTableRowBody}>{body}</div>
  </div>
);

export default PostsTableRow;
