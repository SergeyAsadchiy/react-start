import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

function App() {
  const [posts] = useState([
    {id: 1, title: 'Javascript 1', text: 'description'},
    {id: 2, title: 'Javascript 2', text: 'description'},
    {id: 3, title: 'Javascript 3', text: 'description'}
  ])
  const [posts2] = useState([
    {id: 1, title: 'Python 1', text: 'description'},
    {id: 2, title: 'Python 2', text: 'description'},
    {id: 3, title: 'Python 3', text: 'description'}
  ])
  return (
    <div className="App">
      <form action="">
        <input type="text" placeholder="Название поста" />
        <input type="text" placeholder="Описание поста" />
        <MyButton disabled>Добавить пост</MyButton>
      </form>
      <PostList posts={posts} title={'Список постов по JS'} />
      <PostList posts={posts2} title={'Список постов по Python'} />
    </div>
  );
}

export default App;
