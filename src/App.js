import React, {useMemo, useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'description3'},
    {id: 2, title: 'Javascript 2', body: 'description2'},
    {id: 3, title: 'Javascript 3', body: 'description1'}
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  const sortedPosts = useMemo(() => {
    return  selectedSort
      ? [...posts].sort((a, b) => { return a[selectedSort].localeCompare(b[selectedSort])})
      : posts
  }, [posts, selectedSort])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(e => e.body.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [sortedPosts, searchQuery])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter(e => e.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <MyInput
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Поиск..."
      />
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
        sortedAndSearchedPosts.length
          ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов по JS'} />
          : <h2 style={{marginTop: '20px', textAlign: 'center'}}>Посты не найдены</h2>
      }

    </div>
  );
}

export default App;
