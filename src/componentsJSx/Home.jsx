import TrendFeeds from './TrendFeeds'
import '../componentsCss/Home.css'
import { motion } from 'framer-motion'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Home = ({trendings,isLoading}) => {
  return (
    <section className="home">
      <h1 className=' home-title pageTitle'>Trends</h1>
      {isLoading &&
      <motion.div className="loading"
      
     > <span>Loading</span><motion.p
     
    animate={{
      rotate: [0 , 360]
    }}
    transition={{
      duration: 1,
      yoyo: Infinity
    }}
     ><AiOutlineLoading3Quarters size={35}/></motion.p></motion.div>
      }
      
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