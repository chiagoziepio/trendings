import '../componentsCss/CreatePost.css'
import Reactquill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const CreatePost = ({postBody,postTitle,setPostBody,setPostTitle,category,setCategory,thumbimg,setThumbimg,postcategories,handlePostImage,handleSubmitPost}) => {

  const modules ={
    toolbar:[
      [{header:[1,2,3,4,5,false]}],
      ["bold", "italic", "underline","strike","blockquote"],
      [{list:"ordered"},{list:"bullet"},{indent: "+1"},{indent: "-1"}],
      ["link","image", "video"],
      ["clean"],
    ],
  };
  const formats =[
    "header",
    "bold", "italic", "underline","strike","blockquote",
    "list","bullet","indent",
    "link","image"
  ];
  return (
    <div className='createPost'>
      <h2>Create A post</h2>
      <form className='form' onSubmit={handleSubmitPost} >
        <div className="inputgroupsContainer">
          <input 
            type="text" 
            placeholder='Post Title'
            value={postTitle}
            required
            onChange={(e)=> setPostTitle(e.target.value)}
            className='newPostTitle'
            autoFocus
        />
        </div >
        <div className="inputgroupsContainer">
        <select 
          name="category" 
          id="" 
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
          >
          {postcategories.map(cat => (
            <option value={cat} key={cat}>{cat}</option>
          ))}
        </select>
        
        {/* <Reactquill 
          theme='snow'
          value={postBody}
          onChange={setPostBody}
          className='newPostBody'
          modules={modules}
          
          /> */}
        
        </div>
        
        <div className="inputgroupsContainer">
          <textarea   
           cols="50" 
            rows="15"
            required
            value={postBody}
            onChange={(e)=> setPostBody(e.target.value)}
            className='newPostBody'
            placeholder='Whats on your mind'
            >

            </textarea>
        </div>
        <input 
          type="file" 
          name=""  
          id="flie-upload" 
          accept='imgage/jpeg, image/png, image/jpg'  
          onChange={handlePostImage}
          />
        <button type="submit" className="btn">Create</button>
      </form>
    </div>
  )
}

export default CreatePost