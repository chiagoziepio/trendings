import Feed from './TrendFeeds'
import '../componentsCss/Home.css'

const Home = ({TrendinsPost}) => {
  return (
    <section className="home">
      <h1 className=' home-title'>Trends</h1>
      {TrendinsPost.map(trends =>(
        <Feed
          key= {trends.id}
          trends={trends}
        />
      ))}
    </section>
  )
}

export default Home