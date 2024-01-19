import "../componentsCss/Author.css"
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Authors = ({autorInfos}) => {
  return (
    <div className='authors'>
      {autorInfos.length ? (
        <div className="authorsInfoContainer">
          {autorInfos.map(author =>(
            <Link to = {`/authors/${author.name}`}className="authorWorkLink">
                <div className="authorContainer" key={author.id}>
                <img src={author.img} className="authorInfoImg"  />
                {author.checked ?(
                    <span >{<FaCircleCheck className="authorChecked" size={23}/>}</span>
                ):(
                  <p></p>
                )}
                <p className='authorInfoName'>{author.name}</p>
            </div>
            </Link>
            
          ))}
        </div>
      ):(
        <div>
            <p className="NoAuthor">No author to display</p>
        </div>
      )}
    </div>
  )
}

export default Authors