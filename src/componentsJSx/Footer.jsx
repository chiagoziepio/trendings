import { Link } from "react-router-dom"
import '../componentsCss/Footer.css'

const Footer = () => {
  const today = new Date()
  return (
   
    <footer className='footer'>
      <div className="footerCategoryBx">
        <Link to = '/posts/categories/politics'><button className="footerCategoryLink">Politics</button></Link>
        <Link to = '/posts/categories/education'><button className="footerCategoryLink">Education</button></Link>
        <Link to = '/posts/categories/sports'><button className="footerCategoryLink">Sports</button></Link>
        <Link to = '/posts/categories/business'><button className="footerCategoryLink">Business</button></Link>
        <Link to = '/posts/categories/technology'><button className="footerCategoryLink">Technology</button></Link>
        <Link to = '/posts/categories/cars'><button className="footerCategoryLink">Cars</button></Link>
        <Link to = '/posts/categories/trades'><button className="footerCategoryLink">Trades</button></Link>
        <Link to = '/posts/categories/healths'><button className="footerCategoryLink">Healths</button></Link>
        <Link to = '/posts/categories/shoes'><button className="footerCategoryLink">Shoes</button></Link>
        <Link to = '/posts/categories/programming'><button className="footerCategoryLink">Programming</button></Link>
        <Link to = '/posts/categories/musics'><button className="footerCategoryLink">Musics</button></Link>
        <Link to = '/posts/categories/art'><button className="footerCategoryLink">Art</button></Link>
        <Link to = '/posts/categories/fasshion'><button className="footerCategoryLink">Fashion</button></Link>
      </div>
      <div className="copywrightbx">
        <p className="copywright">Copywright &copy;Trendings.co  {today.getUTCFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer