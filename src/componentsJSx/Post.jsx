import Feed from './Feed'
import { Link } from 'react-router-dom'
import '../componentsCss/Post.css'

const Post = ({posts}) => {
  return (
    <div className='post'>
    {posts.length ? (
      <Feed posts={posts}/>
    ):(<div className='emptyPost'>
      <p>Opps, no news available.</p>
      <p>we are working to resolve this issue</p>
      <Link to = '/'>Back to home</Link>
    </div>)
      
  }
    </div>
  )
}

export default Post