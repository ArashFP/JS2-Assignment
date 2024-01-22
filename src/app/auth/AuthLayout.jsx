import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

function AuthLayout() {
  return (
    <div className="bg-orange-500 h-screen">
      <Navbar />
      <Outlet />
      <Footer /> 
    </div>
  )
}
export default AuthLayout