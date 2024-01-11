import Logo from "./Logo"
import Nav from './Nav'
import '../componentsCss/Header.css'

const Header = () => {
  return (
    <header className="header">
        <Logo />
        <Nav />
    </header>
  )
}

export default Header