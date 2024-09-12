import { NavLink } from "react-router-dom";
import './Navlink.css'

const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
     <li className="hover:bg-white mx-3"><NavLink  to= "/" 
    className={({isActive})=>  {
      return isActive ? "text-green-400 font-bold border-2 border-green-400 bg-white " : "font-bold hover:border-green-400 bg-white";
    }}>
   Home</NavLink></li>

    <li className="hover:bg-white mx-3"><NavLink  to= "/listed" 
    className={({isActive})=>  {
      return isActive ? "text-green-400 font-bold border-2 border-green-400 bg-white " : "font-bold hover:border-green-400 bg-white ";
    }}>
   Listed Book</NavLink></li>

    <li className="hover:bg-white mx-3"><NavLink  to= "/read" 
    className={({isActive})=>  {
      return isActive ? "text-green-400 font-bold border-2 border-green-400 :bg-white " : "font-bold hover:border-green-400 bg-white ";
    }}>
   Page to Read</NavLink></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Book Vibe</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    
    <li className="mx-3"><NavLink  to= "/" 
    className={({isActive})=>  {
      return isActive ? "text-green-400 font-bold border-2 border-green-400 bg-white " : "font-bold hover:border-green-400 bg-white";
    }}>
   Home</NavLink></li>

    <li className="mx-3"><NavLink  to= "/listed" 
    className={({isActive})=>  {
      return isActive ? "text-green-400 font-bold border-2 border-green-400 bg-white" : "font-bold hover:border-green-400 bg-white ";
    }}>
   Listed Book</NavLink></li>

    <li className="mx-3"><NavLink  to= "/read" 
    className={({isActive})=>  {
      return isActive ? "text-green-400 font-bold border-2 border-green-400 bg-white " : "font-bold hover:border-green-400 bg-white ";
    }}>
   Page to Read</NavLink></li>
     
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn mx-3 font-bold text-white bg-green-400 border-green-400 hover:bg-white hover:text-green-400 hover:border-green-400">Sign In</a>
    <a className="btn mx-4 font-bold text-white bg-blue-400 border-blue-400 hover:bg-white hover:text-blue-400 hover:border-blue-400">Sign Up</a>
  </div>
</div>

        </div>
    );
};

export default Header;