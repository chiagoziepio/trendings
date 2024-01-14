import { Link } from "react-router-dom"

const Feed = ({posts}) => {
    
  return (
    <div className="feed">
        <div className='postContainer'>
            {posts.map(post=>(
                <div className='postContent' key={post.id}>
                    <p className="postDate">{post.date}</p>
                    <img src={post.img} className='postImg' />
                    <div className="postDetailscontainer">
                        <h4 className="postTitle">{post.title}</h4>
                        <Link to = {`/posts/${post.id}`} className="postBody">
                        <p >{(post.body).length > 150 ? (post.body).substr(0,150) + "...": post.body}</p>
                        </Link>
                        
                    </div>
                    <div className=" authorAndcategoryBx">
                        <div className="postAuthorDetailcontainer">
                            <img src={post.authorimg} className='postAuthorImg' />
                            <p className="postAuthorName">{post.authorname}</p>
                        </div>
                        <Link className="postCategory">
                            <button>{post.category}</button>
                        </Link>
                    </div>
                </div>
               
            ))}
        </div> 
    </div>
  )
}

export default Feed