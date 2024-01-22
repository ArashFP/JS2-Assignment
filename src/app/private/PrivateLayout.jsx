import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

function PrivateLayout() {
  return (
    <div>
      <Navbar />
      <p>private</p>
      <Outlet />
      <Footer />
    </div>
  )
}
export default PrivateLayout