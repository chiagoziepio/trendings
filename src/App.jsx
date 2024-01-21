import { useState, useEffect } from 'react'
import {Routes, Route, useNavigate} from 'react-router-dom'
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
import {PostFeeds} from './componentsJSx/Data'
import {AuthorsInfo} from './componentsJSx/Data'
function App() {
  const [trendings, setTrendings] = useState([]);
  const [posts , setPosts] = useState([]);
  const [autorInfos, setAuthorInfos] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [user, setUser] = useState(null)
  const [avatar, setAvatar] = useState("")
  const [name, setName] = useState("");
  const[email, setEmail] = useState("")
  const[userName , setUserName] = useState("");
  const [password, setPassword]= useState("")
   const navigate = useNavigate()
  useEffect(()=>{
    setTrendings(TrendinsPost),
    setPosts(PostFeeds),
    setAuthorInfos(AuthorsInfo)
  
  },[])
  const HandleAvatarChange = (e)=>{
    const file = e.target.files[0]
    setAvatar(file)
  }
  const handleLogin = (e)=>{
    e.preventDefault()
    setUser(userName)
    navigate("/dashboard")
  }

  return (
    <Routes>
      <Route path = '/' element = {<Layout avatar={avatar}/>}>
        <Route index element = {<Home trendings={trendings}/>}/>
        <Route path = 'login' element={<Login
          userName={userName}
          password={password}
          setUserName={setUserName}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />}/>
        <Route path = 'posts' element={<Post posts={posts}/>}/>
        <Route path = 'register' element={<Register
          userName={userName}
          password={password}
          setUserName={setUserName}
          setPassword={setPassword}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          handleLogin={handleLogin}
        />}/>
        <Route path = 'posts/:id/edit' element={<EditPost/>}/>
        <Route path = 'posts/categories/:categories' element={<PostCategories posts={posts}/>}/>
        <Route path = 'posts/:id' element={<PostPage posts={posts}/>}/>
        <Route path = 'create' element={<CreatePost
         postBody={postBody}
         postTitle={postTitle}
         setPostBody={setPostBody}
         setPostTitle={setPostTitle}
         />}/>
        <Route path = 'authors' element={<Authors autorInfos={autorInfos}/>}/>
        <Route path = 'authors/:username' element = {<AuthorWork posts={posts} />}/>
        <Route path = 'dashboard' element = {<DashBoard       avatar={avatar} 
          setAvatar={setAvatar}
         HandleAvatarChange={HandleAvatarChange}
         user={user}
         setUser={setUser}
         password={password}
         name ={name}
         email={email}
        />}/>
        <Route path = '*' element={<Error/>}/>

      </Route>
    </Routes>
  )
}

export default App
