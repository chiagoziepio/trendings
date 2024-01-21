import Logo from "./Logo"
import Nav from './Nav'
import '../componentsCss/Header.css'

const Header = ({avatar}) => {
  return (
    <header className="header">
        <Logo />
        <Nav avatar={avatar} />
    </header>
  )
}

export default Header