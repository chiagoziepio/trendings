import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './componentsJSx/Layout'
import Home from './componentsJSx/Home'
import Authors from './componentsJSx/Authors'
import CreatePost from './componentsJSx/CreatePost'
import EditPost from './componentsJSx/EditPost'
import PostCategories from './componentsJSx/PostCategories'
import PostPage from './componentsJSx/PostPage'
import Error from './componentsJSx/Error'
import DashBoard from './componentsJSx/DashBoard'
import Login from './componentsJSx/Login'
import Register from './componentsJSx/Register'
import AuthorWork from './componentsJSx/AuthorWork'
import Post from './componentsJSx/Post'
import {TrendinsPost} from './componentsJSx/Data'
function App() {
  const [trendings, setTrendings] = useState(TrendinsPost)

  return (
    <Routes>
      <Route path = '/' element = {<Layout/>}>
        <Route index element = {<Home TrendinsPost={TrendinsPost}/>}/>
        <Route path = 'login' element={<Login/>}/>
        <Route path = 'posts' element={<Post/>}/>
        <Route path = 'register' element={<Register/>}/>
        <Route path = 'posts/:id/edit' element={<EditPost/>}/>
        <Route path = 'posts/categories/:categories' element={<PostCategories/>}/>
        <Route path = 'posts/:id' element={<PostPage/>}/>
        <Route path = 'create' element={<CreatePost/>}/>
        <Route path = 'authors' element={<Authors/>}/>
        <Route path = 'authors/:id' element = {<AuthorWork/>}/>
        <Route path = 'dashboard' element = {<DashBoard/>}/>
        <Route path = '*' element={<Error/>}/>

      </Route>
    </Routes>
  )
}

export default App
