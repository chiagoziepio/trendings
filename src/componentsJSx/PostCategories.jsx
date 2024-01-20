import { useParams, Link } from "react-router-dom"


const PostCategories = ({posts}) => {
  const {categories} = useParams();
  const theCategory = posts.filter(post => (post.category).toLowerCase() === (categories).toLowerCase());
  
  return (
    <div className="PostCatergories" style={{flexGrow:1}}>
      {theCategory.length >= 1 ?(
        <div className="postContainer">
          {theCategory.map(category => (
            <div key={category.id} className="postContent">
              <div className="thePostAuthorAndCategory">
                <div className="thePostAuthorBx">
                  <img src={category.authorimg} className="thePostAuthorImg"/>
                  <p>{category.authorname}</p>
                </div>
                <button className="btn">{category.category}</button>
              </div>
              <div>
                <img src={category.img} className="thePostImg" />
                <h3 className="thePostTitle">{category.title}</h3>
                <p className="thePostBody">{category.body}</p>
                <span className="thePostDate">{category.date}</span>
              </div>
            </div>
          ))}
        </div>
      ):(
        <div className="empty">
          <p style={{
            margin:10
          }}>No posts under <span style={{
            fontSize:24,
            fontWeight:"bold"
          }}>
          {categories}
          </span> yet</p>
        </div>
      )}
    </div>
  )
}

export default PostCategories