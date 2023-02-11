import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import logo from "../../../Images/img/logo1.png";
import ThemeToggle from "../../ThemeToggle";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, logOut, dark, setDark } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };

  return (
    <nav className="w-full z-10 shadow-lg bg-white ">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <div className="flex items-center">
                <img src={logo} alt="" className="w-12 rounded-full" />
                <h2 className="text-2xl ml-2 font-bold text-indigo-900 hover:text-indigo-600">
                  Quick Learning
                </h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-900"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-900"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center md:flex space-y-8 md:space-x-6 md:space-y-0 ">
              <li className="text-indigo-600 font-semibold text-xl hover:text-indigo-400">
                <Link to="/">Home</Link>
              </li>
              <li className="text-indigo-600 font-semibold text-xl hover:text-indigo-400">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="text-indigo-600 font-semibold text-xl hover:text-indigo-400">
                <Link to="/faq">FAQ</Link>
              </li>
              <li className="text-indigo-600 font-semibold text-xl hover:text-indigo-400">
                <Link to="/courses">Courses</Link>
              </li>

              {user?.uid ? (
                <>
                  <li className="text-indigo-600 font-semibold text-xl hover:text-indigo-400">
                    <Link to="" onClick={handleLogOut}>
                      Log Out
                    </Link>
                  </li>
                  <li className="text-indigo-600 font-semibold text-xl hover:text-indigo-400">
                    <Link to="">
                      <div
                        className="tooltip tooltip-bottom"
                        data-tip={
                          user?.displayName ? user?.displayName : "User"
                        }
                      >
                        <button>
                          <img
                            className="rounded-full w-10"
                            src={user?.photoURL}
                            alt=""
                          />
                        </button>
                      </div>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="text-indigo-600 font-semibold text-xl hover:text-indigo-400">
                    <Link to="/login">Log In</Link>
                  </li>
                  <li className="text-indigo-600 font-semibold text-xl hover:text-indigo-400">
                    <Link to="/register">Sign Up</Link>
                  </li>
                </>
              )}
              <ThemeToggle></ThemeToggle>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
