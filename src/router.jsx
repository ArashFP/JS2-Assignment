import { createBrowserRouter } from "react-router-dom";

//Root
import RootLayout from "./app/RootLayout";

//Root:child
import PublicLayout from "./app/Public/PublicLayout";
import AuthLayout from "./app/auth/AuthLayout";

//Root:child:child
import Home from "./app/public/Home";
import ContactUs from "./app/public/ContactUs";
import Products from "./app/public/Products";
import History from "./app/private/History";
import AboutUs from "./app/public/AboutUs";
import LoginPage from "./app/auth/LoginPage";
import RegisterPage from "./app/auth/RegisterPage";
import PrivateLayout from "./app/private/PrivateLayout";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <PublicLayout />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: "contact",
            element: <ContactUs />
          },
          {
            path: "products",
            element: <Products />
          },
          {
            path: "about",
            element: <AboutUs />
          }
        ]
      },




      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <LoginPage />
          },
          {
            path: "register",
            element: <RegisterPage />
          }
        ]
      },





      {
        path: "private",
        element: <PrivateLayout />,
        children: [
          {
            index: true,
            element: <History />
          },
        ]
      }
    ]
  }
])