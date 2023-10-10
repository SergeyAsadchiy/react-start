import React, {useState} from "react";
import PostItem from "./components/PostItem";
import './styles/App.css'

function App() {
  const [posts] = useState([
    {id: 1, title: 'Javascript', text: 'description'},
    {id: 2, title: 'Javascript', text: 'description'},
    {id: 3, title: 'Javascript', text: 'description'}
  ])
  return (
    <div className="App">
      <h1 style={{marginTop: '20px', textAlign: 'center'}}>Список постов</h1>
      {
        posts.map(post => <PostItem post={post} key={post.id}/>)
      }
    </div>
  );
}

export default App;
