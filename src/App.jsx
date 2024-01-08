import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Layout from './componentsJSx/Layout'
import Home from './componentsJSx/Home'
import Author from './componentsJSx/Authors'
import CreatePost from './componentsJSx/CreatePost'
import EditPost from './componentsJSx/EditPost'
import PostCategories from './componentsJSx/PostCategories'
import PostPage from './componentsJSx/PostPage'
import Error from './componentsJSx/Error'
import UserProfile from './componentsJSx/UserProfile'
import Login from './componentsJSx/Login'
import Register from './componentsJSx/Register'

function App() {
  

  return (
    <Routes>
      <Route path = '/' element = {<Layout/>}>
        <Route index element = {<Home/>}/>
        <Route path = 'login' element={<Login/>}/>
        <Route path = 'register' element={<Register/>}/>
        <Route path = 'posts/:id/edit' element={<EditPost/>}/>
        <Route path = 'posts/categories/:categories' element={<PostCategories/>}/>
        <Route path = 'posts/:id' element={<PostPage/>}/>
        <Route path = 'create' element={<CreatePost/>}/>
        <Route path = 'author' element={<Author/>}/>
        <Route path = '*' element={<Error/>}/>

      </Route>
    </Routes>
  )
}

export default App
