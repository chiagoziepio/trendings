import { NavLink } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import '../componentsCss/Nav.css'

const Nav = () => {
  return (
    <nav className='navList'>
      <ul>
      <li className="links">
        <NavLink className ='navItem' to = '/dashboard' ><FaUser size={30}/></NavLink>
      </li>
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
    </nav>
  )
}

export default Nav