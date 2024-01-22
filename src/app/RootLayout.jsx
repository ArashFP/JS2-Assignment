import { Outlet } from "react-router-dom"
import AuthContextProvider from "../contexts/AuthContext"

function RootLayout() {
  return (
    <>
      <AuthContextProvider>
        <Outlet />
      </AuthContextProvider>
    </>
  )
}
export default RootLayout