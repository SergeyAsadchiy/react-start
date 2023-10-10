import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'description3'},
    {id: 2, title: 'Javascript 2', body: 'description2'},
    {id: 3, title: 'Javascript 3', body: 'description1'}
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(e => e.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    console.log(sort);
    setPosts([...posts].sort(
      (a, b) => {
        console.log('--------', a[sort], a);
        return a[sort].localeCompare(b[sort])
      }
    ))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка"
        options={[
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По описанию'},
        ]}
      />
      {
        posts.length
          ? <PostList remove={removePost} posts={posts} title={'Список постов по JS'} />
          : <h2 style={{marginTop: '20px', textAlign: 'center'}}>Посты не найдены</h2>
      }

    </div>
  );
}

export default App;
