import React from 'react'

const Feed = ({trends}) => {
  const shortFeedBody = trends.body.length > 220 ? trends.body.substr(0,220) + "...": trends.body;
  return (
    <div className='Trendfeed-container'>
        <div className="imgBx">
            <img src={trends.img} className='feedImg'  />
            <img src={trends.authorimg} className='authorImg' />
            <span className="authorname">{trends.authorname}</span>
        </div>
        <div className="feedText">
            <h2 className="title">{trends.title}</h2>
            <p className="body">{shortFeedBody}</p>
            <button className='btn readmoreBtn'>Read more</button>
        </div>
    </div>
  )
}

export default Feed