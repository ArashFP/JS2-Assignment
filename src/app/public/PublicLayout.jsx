import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

function PublicLayout() {
  return (
    <div className="min-h-screen bg-slate-200 text-white pb-20">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
export default PublicLayout