import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'description3'},
    {id: 2, title: 'Javascript 2', body: 'description2'},
    {id: 3, title: 'Javascript 3', body: 'description1'}
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [visibleModal, setVisibleModal] = useState(false)

  const sortedPosts = useMemo(() => {
    return filter.sort
      ? [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
      : posts
  }, [posts, filter.sort])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(e => e.body.toLowerCase().includes(filter.query.toLowerCase()))
  }, [sortedPosts, filter.query])

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
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={'Список постов по JS'}
      />
    </div>
  );
}

export default App;
