import { Link, NavLink } from "react-router-dom"
import { FaUser } from "react-icons/fa";
import '../componentsCss/Nav.css'
import { FaBars } from "react-icons/fa";
import { useRef } from "react";


const Nav = ({avatar}) => {
  const navBarRef = useRef()
  const ulRef = useRef()
  const handleMenuToggle = ()=>{
    navBarRef.current.classList.toggle("show")
  }
  const handMenuRemoval = ()=>{
    navBarRef.current.classList.remove("show")
  }
  return (
    <nav className='navList'>
       <div className="navBar" ref={navBarRef} onClick={handMenuRemoval}>
       <div className="profileIcon xl-hidden">
            <Link to = '/dashboard' >
            {avatar &&
                <img src={URL.createObjectURL(avatar)} alt="" className='avatar' />  
                }
                {!avatar &&
                  <FaUser size={30} className='user'/>
                }
              </Link> 
          </div>
          <ul className="navUl" ref={ulRef}>
          
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
          <div className="profileIcon sm-hidden">
            <Link to = '/dashboard' >
            {avatar &&
                <img src={URL.createObjectURL(avatar)} alt="" className='avatar' />  
                }
                {!avatar &&
                  <FaUser size={30} className='user'/>
                }
              </Link> 
          </div>
       </div>
       <div className="menuContainer">
        <div className="menuBarBx" onClick={handleMenuToggle}>
          <FaBars size={30} className="menuBar"/>
        </div>
       </div>
      
    </nav>
  )
}

export default Nav