import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { useAuth } from "../../contexts/AuthContext"
import { useEffect } from "react"


function PrivateLayout() {

  const { token } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(!token) {
      navigate("/auth/login")
    }
  }, [ token ])

  return (
    <div className="flex flex-col min-h-screen bg-slate-200 text-black">
      <Navbar />
      <div>
        <button>Order History</button>
      </div>
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}
export default PrivateLayout