import { Link, NavLink } from "react-router-dom";
import { GrTechnology } from "react-icons/gr";
import { IoCartSharp } from "react-icons/io5";
import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <nav className="bg-blue-950 py-8 relative">
      <ul className="flex justify-between items-center mx-5">
        <div className="flex gap-5">
          <li><NavLink className="text-white [&.active]:underline" to="/">Home</NavLink></li>
          <li><NavLink className="text-white [&.active]:underline" to="/products">Products</NavLink></li>
          <li><NavLink className="text-white [&.active]:underline" to="/private">Order History</NavLink></li>
          <li><NavLink className="text-white [&.active]:underline" to="/about">About Us</NavLink></li>
          <li><NavLink className="text-white [&.active]:underline" to="/contact">Contact Us</NavLink></li>
        </div>
        <div className="flex gap-5">
          <li>
            <Dropdown>
              <IoCartSharp className="flex cursor-pointer" size="1.5em" />
            </Dropdown>
          </li>
          <li className="place-self-end px-5 bg-blue-800 ml-2 text-white rounded-lg"><Link to="/auth/login">Log in</Link></li>
          <li className="place-self-end px-5 bg-blue-800 mr-2 text-white rounded-lg"><Link to="/auth/register">Register</Link></li>
        </div>
      </ul>
      <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
        <GrTechnology size="4em" color="white"/>
      </div>
    </nav>
  )
}

export default Navbar;
