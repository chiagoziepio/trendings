import { Link, NavLink } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import '../componentsCss/Nav.css'

const Nav = () => {
  return (
    <nav className='navList'>
      <ul className="navUl">
      
      <li className="links">
        <NavLink className ='navItem' to = '/' >Home</NavLink>
      </li>
      
      <li className="links">
        <NavLink className ='navItem' to = '/posts' >Posts</NavLink>
      </li>
      <li className="links">
        <NavLink className ='navItem' to = '/create' >Create-Post</NavLink>
      </li>
      <li className="links">
        <NavLink className ='navItem' to = '/authors' >Authors</NavLink>
      </li>
      </ul>
      <div className="profileIcon">
         <Link to = '/dashboard' ><FaUser size={30} className="user"/></Link> 
      </div>
    </nav>
  )
}

export default Nav