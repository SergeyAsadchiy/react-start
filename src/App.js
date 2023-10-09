import React, {useState} from "react";
import PostItem from "./components/PostItem";
import './styles/App.css'

function App() {
const [posts, setPost] = useState([
  {id: 1, title: 'Javascript', text: 'description'},
  {id: 2, title: 'Javascript', text: 'description'},
  {id: 3, title: 'Javascript', text: 'description'}
])
  return (
    <div className="App">
      {
        posts.map(e => {
          return <PostItem post={e} />
        })
      }
    </div>
  );
}

export default App;
