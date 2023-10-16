import React, {useEffect, useState} from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {usePosts} from "../hooks/usePosts";
import PostsService from "../API/PostsService";
import Loader from "../components/UI/Loader/Loader";
import {useFetching} from "../hooks/useFetching";
import {getPagesCount} from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [visibleModal, setVisibleModal] = useState(false)
  const [limit] = useState(5)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const [fetchPosts, isPostsLoading, postsError] = useFetching(async (limit, page) => {
    const response = await PostsService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPagesCount(totalCount, limit))
  })

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  useEffect(() => {
    fetchPosts(limit, page)
    // eslint-disable-next-line
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setVisibleModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(e => e.id !== post.id))
  }
  const changePage = (page) => {
    setPage(page)
    fetchPosts(limit, page)
  }

  return (
    <div className="App">
      <MyButton
        style={{marginTop: '15px'}}
        onClick={() => setVisibleModal(true)}
      >
        Добавить пост
      </MyButton>
      <MyModal visible={visibleModal} setVisible={setVisibleModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {postsError &&
      <h3>Произошла ошибка: {postsError}</h3>}
      {isPostsLoading
        ? <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
          <Loader/>
        </div>
        : <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={'Список постов по JS'}
        />
      }

      <Pagination
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />
    </div>
  );
}

export default Posts;
