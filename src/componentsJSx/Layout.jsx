import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({avatar}) => {
  return (
    <main className="layout">
        <Header avatar={avatar}/>
        <Outlet/>
        <Footer/>
    </main>
  )
}

export default Layout