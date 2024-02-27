import { Outlet, useLocation, useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { useAuth } from "../../contexts/AuthContext"
import { useEffect } from "react"


function PrivateLayout() {

  const { token, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  

  useEffect(() => {
    if(!token) {
      navigate("/auth/login")
    }
  }, [ token ])

  return (
    <div className="flex flex-col min-h-screen bg-slate-200 text-black">
      <Navbar />
      {location.pathname !== '/private/checkout' && (
          <div className="bg-slate-600 text-white w-1/3 flex-grow">
            <h2 className="text-center my-5">Welcome</h2>
            <div className="bg-slate-400 flex flex-col gap-3 ">
              <button>Account Information</button>
              <button>Order History</button>
              <button>Payment Methods</button>
              <button onClick={logout}>Sign out</button>
            </div>
          </div>
      )}






      {location.pathname !== '/private' && <Outlet />}
      <Footer className={location.pathname === '/private/checkout' ? 'absolute bottom-0 w-full' : ''} />
    </div>
  )
}
export default PrivateLayout