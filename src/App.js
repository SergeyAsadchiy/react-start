import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'description'},
    {id: 2, title: 'Javascript 2', body: 'description'},
    {id: 3, title: 'Javascript 3', body: 'description'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(e => e.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {
        posts.length
          ? <PostList remove={removePost} posts={posts} title={'Список постов по JS'} />
          : <h2 style={{marginTop: '20px', textAlign: 'center'}}>Посты не найдены</h2>
      }

    </div>
  );
}

export default App;
