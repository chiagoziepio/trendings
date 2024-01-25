import {Link}from 'react-router-dom'

const Feed = ({trends}) => {
  const shortFeedBody = trends.body.length > 220 ? trends.body.substr(0,220) + "...": trends.body;
  return (
    <div className='Trendfeed-container'>
        <div className="imgBx">
            <img src={trends.img} className='feedImg'  />
            <div className="authorBx">
              <Link to = {`/authors/${trends.authorname}`}>
                <img src={trends.authorimg} className='authorImg' />
            
              </Link>
              <span className="authorname">{trends.authorname}</span>
            </div>
            
        </div>
        <div className="feedText">
            <h2 className="title">{trends.title}</h2>
            <p className="body">{shortFeedBody}  <Link to ={`/posts/${trends.id}`} className='readMoreLink'>Read more</Link></p>
            <Link to={`posts/categories/${trends.category}`}><button className='btn categoryBtn'>{trends.category}</button></Link>
            

        </div>
    </div>
  )
}

export default Feed