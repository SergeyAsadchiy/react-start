import React from 'react';

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>{props.post.text}</div>
      </div>
      <div className="post__btn">
        <button>Удалить пост {props.post.id}</button>
      </div>
    </div>
  );
};

export default PostItem;