import { useParams } from "react-router-dom"
import '../componentsCss/AuthorWorks.css'

const AuthorWork = ({posts}) => {
  const {username} = useParams()
  const theAuthorWorks = posts.filter(post => (post.authorname).toLowerCase() === username.toLowerCase())
  console.log(theAuthorWorks);
  return (
    <div className="authorWorks">
      {theAuthorWorks.length >= 1? (
        <div className="authorWorkContainer">
          {theAuthorWorks.map(theworks =>(
            <div className="theWork" key={theworks.id}>
              <div className="theworksAuthorInfo">
                <div className="theWorksAuthor">
                  <img src={theworks.authorimg} className="theWworksAuthorimg" />
                  <p className="theWorksAuthorName">{theworks.authorname}</p>
                </div>
                <button className="btn">{theworks.category}</button>
              </div>
              <div className="theworkBodyContainer">
                <img src={theworks.img} className="theWorksImg" />
                <h3 className="theWorkTitle">{theworks.title}</h3>
                <p className="theWorkBody">{theworks.body}</p>
                <span>{theworks.date}</span>
              </div>
            </div>
          ))}
        </div>
      ):(
        <div className="emptyWork">
          <p>No work(s) by {username} found</p>
        </div>
      )}
    </div>
  )
}

export default AuthorWork