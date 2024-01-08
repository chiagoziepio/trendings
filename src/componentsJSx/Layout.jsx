import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {
  return (
    <main className="layout">
        <Header/>
        <Outlet/>
        <Footer/>
    </main>
  )
}

export default Layout