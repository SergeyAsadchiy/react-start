import React, {useEffect, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {usePosts} from "./hooks/usePosts";
import PostsService from "./API/PostsService";
import Loader from "./components/UI/Loader/Loader";

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [visibleModal, setVisibleModal] = useState(false)
  const [isPostsLoading, setIsPostLoading] = useState(false)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  async function fetchPosts() {
    setIsPostLoading(true)
    const posts = await PostsService.getAll()
    setTimeout(() => {
      setPosts(posts)
      setIsPostLoading(false)
    }, 10000)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setVisibleModal(false)
  }
  const removePost = (post) => {
    setPosts(posts.filter(e => e.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton
        style={{marginRight: '10px'}}
        onClick={fetchPosts}
      >
        Получить посты с сервера
      </MyButton>
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

    </div>
  );
}

export default App;
