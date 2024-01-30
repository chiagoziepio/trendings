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
import Protector from './componentsJSx/Protector'
import {TrendinsPost} from './componentsJSx/Data'
import {PostFeeds} from './componentsJSx/Data'
import {AuthorsInfo} from './componentsJSx/Data'
import axios from 'axios'
import {format} from 'date-fns'

function App() {
  /* states for the blog */
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
  const [category, setCategory]= useState("uncategorized")
  const [thumbimg , setThumbimg]= useState("")

  /* post categories to select from */
  const postcategories=["Politics","Education","Sports","Business","Technology","Cars","Trades","Healths","Shoes","Programming","Musics","Art","Fashion"]

  /* localhost link for the blog data */
   const navigate = useNavigate()
   const TrendsUrl = /* "http://localhost:3500/TrendinsPost" */ "https://server-ztr9.onrender.com/TrendinsPost";
   const PostUrl = /* "http://localhost:3500/PostFeeds" */ "https://server-ztr9.onrender.com/PostFeeds";
   const AuthorsUrl =/* "http://localhost:3500/AuthorsInfo" */ "https://server-ztr9.onrender.com/AuthorsInfo"
  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response1 = await axios(TrendsUrl)
        const data1 = response1.data
        const response2 = await axios(PostUrl)
        const data2 = response2.data
        const response3 = await axios(AuthorsUrl)
        const data3 = response3.data
        setTrendings(data1)
        setPosts(data2)
        setAuthorInfos(data3)
      } catch (error) {
        
      }
      
      
      
    }
    fetchData();
  
  },[])
  /* proifle picture upload */
  const HandleAvatarChange = (e)=>{
    const file = e.target.files[0]
    setAvatar(file)
  }
  /* post image upload */
  const handlePostImage=(e)=>{
    const file = e.target.files[0]
    const dimg = URL.createObjectURL(file)
    setThumbimg(dimg)
  }
  const handleLogin = (e)=>{
    e.preventDefault()
    setUser(userName)
    navigate("/dashboard")
  }
  const handleRegister = async (e)=>{
    e.preventDefault()
    const id = autorInfos.length? autorInfos[autorInfos.length - 1].id + 1 : 1;
    
    const newAuthor = {id, name,email, userName, img:avatar, checked:false, password}
    const rep = await axios.post(AuthorsUrl, newAuthor)
    const data = await rep.data
    const AllAuthors = [...autorInfos, data]

    setAuthorInfos(AllAuthors)
    setUser(userName)
    navigate("/dashboard")
  }
  const handleSubmitPost = async (e)=>{
    e.preventDefault()
    const id = posts.length? posts[posts.length - 1].id + 1 : 1;
    const date = format(new Date(), 'MMMM dd, yyyy')
    const newPost = {id,img:thumbimg,title:postTitle,body:postBody, authorname:userName,authorimg:avatar,category:category, date:date}
    const rep =  await axios.post(PostUrl, newPost)
    const data = await rep.data
    const allPost = [...posts, data] 
    setPosts(allPost)
    navigate("/posts")
    setPostBody("")
    setPostTitle("")
    setThumbimg("")
    /* console.log(category, postBody,postTitle, thumbimg); */
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
          handleRegister={handleRegister}
        />}/>
        <Route path = 'posts/:id/edit' element={<EditPost/>}/>
        <Route path = 'posts/categories/:categories' element={<PostCategories posts={posts}/>}/>
        <Route path = 'posts/:id' element={<PostPage posts={posts}/>}/>
        <Route path='create' element={<Protector user={user}>
          <CreatePost
            postBody={postBody}
            postTitle={postTitle}
            setPostBody={setPostBody}
            setPostTitle={setPostTitle}
            category={category}
            setCategory={setCategory}
            thumbimg={thumbimg}
            setThumbimg={setThumbimg}
            postcategories={postcategories}
            handlePostImage={handlePostImage}
            handleSubmitPost={handleSubmitPost}

            />
        </Protector>} >
            
        </Route>
    
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
