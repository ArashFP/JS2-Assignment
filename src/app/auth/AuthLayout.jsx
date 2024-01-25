import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { useAuth } from "../../contexts/AuthContext"
import { useEffect } from "react"

function AuthLayout() {

  const { token } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(token) {
      navigate("/private")
    }
  }, [ token ])

  return (
    <div className="bg-slate-200 h-screen">
      <Navbar />
      <Outlet />
      <Footer /> 
    </div>
  )
}
export default AuthLayout