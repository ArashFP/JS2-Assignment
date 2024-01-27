import { Link, NavLink } from "react-router-dom";
import { GrTechnology } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="bg-blue-950 py-8 relative">
      <ul className="flex justify-between items-center mx-5">
        <div className="flex gap-5">
          <li><NavLink className="text-white [&.active]:underline" to="/">Home</NavLink></li>
          <li><NavLink className="text-white [&.active]:underline" to="/products">Products</NavLink></li>
          <li><NavLink className="text-white [&.active]:underline" to="/private">Order History</NavLink></li>
          <li><NavLink className="text-white [&.active]:underline" to="/about">About Us</NavLink></li>
          <li><NavLink className="text-white [&.active]:underline" to="/contact">Contact Us</NavLink></li>
        </div>
        <div className="flex gap-5">
          <li className="place-self-end px-5 bg-blue-800 mx-5 text-white rounded-lg"><Link to="/auth/login">Log in</Link></li>
          <li className="place-self-end px-5 bg-blue-800 mx-2 text-white rounded-lg"><Link to="/auth/register">Register</Link></li>
        </div>
      </ul>
      <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
        <GrTechnology className="" size="3em"/>
      </div>
    </div>
  )
}

export default Navbar;
