import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {useFetching} from "../hooks/useFetching";
import PostsService from "../API/PostsService";
import Loader from "../components/UI/Loader/Loader";

const PostPage = () => {
  const routeParams = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  const [fetchPost, isPostsLoading] = useFetching(async (id) => {
    const response = await PostsService.getById(id)
    setPost(response.data)

  })
  const [fetchComments, isCommentsLoading] = useFetching(async (id) => {
    const response = await PostsService.getCommentsById(id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPost(routeParams.id)
    fetchComments(routeParams.id)
    // eslint-disable-next-line
  }, [])

  return (
    // todo: PostPage decomposition
    // todo: add styles
    <div style={{width: '80vw', margin: 'auto', paddingTop: '20px'}}>
      <h1>Вы открыли страницу поста: {routeParams.id}</h1>
      {isPostsLoading
        ? <Loader/>
        : <div className="post-page">
          <h3>{post.id}.{post.title}</h3>
          <div>{post.body}</div>
        </div>
      }
      <br/><br/>
      <h2>Комментарии</h2>

      {isCommentsLoading
        ? <Loader/>
        : <div>
          {comments.map(e =>
            <div
              key={e.id}
              style={{marginTop: '20px'}}>
              <div>
                <span>{e.id}. </span>
                <span>{e.email}. </span>
                <span>{e.name}</span>
              </div>
              <div>
                {e.body}
              </div>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default PostPage;