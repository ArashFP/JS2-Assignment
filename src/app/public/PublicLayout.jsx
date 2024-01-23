import { Link ,Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

function PublicLayout() {
  return (
    <div className="h-screen bg-slate-200 text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
export default PublicLayout