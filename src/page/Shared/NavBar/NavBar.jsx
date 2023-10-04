import { Link, NavLink } from "react-router-dom";

import logo from "../../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import DarkModeToggle from "react-dark-mode-toggle";

const NavBar = ({ toggleTheme, isDarkMode }) => {
 
 
  const { user, logOut } = useContext(AuthContext);

 

  const ourMenu = (
    <>
      <li>
        <NavLink to="/" className="text-xl">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/instructors" className="text-xl">
          Instructors
        </NavLink>
      </li>
      <li>
        <NavLink to="/classes" className="text-xl">
          Classes
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="dashboard" className="text-xl">
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );

  const logoutHandler = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 "
            >
              {ourMenu}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="w-28" src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{ourMenu}</ul>
        </div>
        <div className="navbar-end space-x-4">
         
          {/* Dark and light mode */}
          <DarkModeToggle
            onChange={toggleTheme}
            checked={isDarkMode}
            size={80}
          />

          {/* Login button and profile  */}

          {user ? (
            <>
              <img
                className="w-[40px] h-[44px] rounded-full mx-3"
                src={`${
                  user
                    ? user?.photoURL
                    : `"https://cdn-icons-png.flaticon.com/512/666/666201.png"`
                }`}
                alt=""
              />{" "}
              <button onClick={logoutHandler} className="btn">
                Log Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn">
                Login
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
