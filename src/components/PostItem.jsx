import React from 'react';
import MyButton from "./UI/button/MyButton";
import { useNavigate } from 'react-router-dom';
const PostItem = (props) => {
  const router = useNavigate()
  const openPost = (id) => {
    return router(`/posts/${id}`)
  }
  const removePost = () => {
    return props.remove(props.post)
  }

  return (
    <div className="post">
      <div className="post__content">
        <strong>{props.post.id}. {props.post.title}</strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__buttons">
        <MyButton onClick={() => openPost(props.post.id)}>
          Открыть
        </MyButton>
        <MyButton onClick={removePost}>
          Удалить
        </MyButton>
      </div>
    </div>
  );
};

export default PostItem;