import '../componentsCss/CreatePost.css'

const CreatePost = ({postBody,postTitle,setPostBody,setPostTitle}) => {
  return (
    <div className='createPost'>
      <h2>Create A post</h2>
      <form >
        <div className="inputgroupsContainer">
          <input 
            type="text" 
            placeholder='Post Title'
            value={postTitle}
            required
            onChange={(e)=> setPostTitle(e.target.value)}
            className='newPostTitle'
        />
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
        
      </form>
    </div>
  )
}

export default CreatePost