import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'description'},
    {id: 2, title: 'Javascript 2', body: 'description'},
    {id: 3, title: 'Javascript 3', body: 'description'}
  ])
  const [posts2] = useState([
    {id: 1, title: 'Python 1', body: 'description'},
    {id: 2, title: 'Python 2', body: 'description'},
    {id: 3, title: 'Python 3', body: 'description'}
  ])

  const [post, setPost] = useState({
    title: '',
    body: ''
  })

  const addNewPost = (e) => {
    e.preventDefault()

    setPosts([...posts, {...post, id: Date.now()}])
    setPost({
      title: '',
      body: ''
    })
  }

  return (
    <div className="App">
      <form action="">
        <MyInput
          type="text"
          placeholder="Название поста"
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
        />
        <MyInput
          type="text"
          placeholder="Описание поста"
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
        />
        <MyButton onClick={addNewPost}>Добавить пост</MyButton>
      </form>
      <PostList posts={posts} title={'Список постов по JS'} />
      <PostList posts={posts2} title={'Список постов по Python'} />
    </div>
  );
}

export default App;
