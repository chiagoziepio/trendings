import { useParams, Link } from "react-router-dom"
import '../componentsCss/PostPage.css'

const PostPage = ({posts}) => {
  const {id} = useParams();
  const thePost = posts.find(post => (post.id).toString() === id)
  
  return (
    <div className="postPage">
      {thePost &&
      <article className="thePostBx">
        <div className="thePostAuthorAndCategory">
          <div className="thePostAuthorBx">
            <img src={thePost.authorimg} className="thePostAuthorImg" />
            <p className="authorName">{thePost.authorname}</p>
          </div>
          <Link to ={`/posts/categories/${thePost.category}`}></Link>
          <button className="btn">{thePost.category}</button>
        </div>
        <div className="thePostContent">
          <img src={thePost.img} className="thePostImg" />
          <h3 className="thePostTitle">{thePost.title}</h3>
          <p className="thePostBody">{thePost.body}</p>
          <span className="thePostDate">{thePost.date}</span>
        </div>
      </article>
      }
      {!thePost &&
        <div>
          <p>This post does not exist</p>
          <Link to ='/'>Back to home</Link>
        </div>
        
      }
    </div>
  )
}

export default PostPage