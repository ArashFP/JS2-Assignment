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
    <div>
      <Navbar />
      <p>private</p>
      <Outlet />
      <Footer />
    </div>
  )
}
export default PrivateLayout