import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/images/logo.png";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-white shadow-sm">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/">
          <img
            src={logo}
            alt="Myad Logo"
            className="h-20 w-auto"
          />
        </Link>
        <form className="bg-gray-100 p-2 rounded-full flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64 text-gray-700"
          />
          <FaSearch className="text-gray-500 ml-2" />
        </form>
        <ul className="flex gap-6 items-center">
          {currentUser ? (
            <>
              <Link to="/creative">
                <li className="text-gray-800 hover:text-blue-500 font-medium">
                  Creative
                </li>
              </Link>
            </>
          ) : (
            <>
              <Link to="/">
                <li className="hidden sm:block text-gray-800 hover:text-blue-500 font-medium">
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li className="hidden sm:block text-gray-800 hover:text-blue-500 font-medium">
                  About
                </li>
              </Link>
            </>
          )}
          <Link to="/profile">
            {currentUser ? (
              <img
                src={currentUser.avatar}
                alt="avatar"
                className="rounded-full h-8 w-8 object-cover border border-blue-500"
              />
            ) : (
              <li className="text-gray-800 hover:text-green-500 font-medium">
                Sign In
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
