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

  const [title, setTitle] = useState('Title')
  const [body, setBody] = useState('Body')

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }

    setPosts([...posts, newPost])
    setTitle('')
    setBody('')
    console.log(newPost)
  }

  return (
    <div className="App">
      <form action="">
        <MyInput
          type="text"
          placeholder="Название поста"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <MyInput
          type="text"
          placeholder="Описание поста"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <MyButton onClick={addNewPost}>Добавить пост</MyButton>
      </form>
      <PostList posts={posts} title={'Список постов по JS'} />
      <PostList posts={posts2} title={'Список постов по Python'} />
    </div>
  );
}

export default App;
