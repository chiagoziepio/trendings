import TrendFeeds from './TrendFeeds'
import '../componentsCss/Home.css'

const Home = ({trendings}) => {
  return (
    <section className="home">
      <h1 className=' home-title pageTitle'>Trends</h1>
      {trendings.map(trends =>(
        <TrendFeeds
          key= {trends.id}
          trends={trends}
        />
      ))}
    </section>
  )
}

export default Home