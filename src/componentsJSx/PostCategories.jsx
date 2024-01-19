import { useParams, Link } from "react-router-dom"


const PostCategories = ({posts}) => {
  const {categories} = useParams();
  const theCategory = posts.filter(post => (post.category).toLowerCase() === (categories).toLowerCase());
  
  return (
    <div className="PostCatergories">
      {theCategory.length >= 1 ?(
        <div className="CategoryContainer">
          {theCategory.map()}
        </div>
      ):(
        <div></div>
      )}
    </div>
  )
}

export default PostCategories