import React from "react";
import { FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/images/logo.png";

const Header = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="shadow-xs">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        <Link to="/">
          <img
            src={logo}
            alt="Myad Logo"
            className="h-20 w-auto"
          />
        </Link>
        
        
          <ul className="flex flex-row text-menuTexts md:items-center justify-between p-6 rounded-3xl w-full max-w-80 md:max-w-200  bg-menuList shadow[0px_8px_20px_rgba(0,0,0,0.1)]">
            {currentUser ? (
              <>
                <Link to="/creative">
                  <li className=" hover:text-blue-500 font-medium">
                    Creative
                  </li>
                </Link>
              </>
            ) : (
              <>
                <Link to="/">
                  <li className="hidden sm:block hover:text-blue-500 font-medium">
                    Home
                  </li>
                </Link>
                <a href="/#emailSubjectGen">
                  <li className="hidden sm:block hover:text-blue-500 font-medium cursor-pointer">
                    Email SubLine
                  </li>
                </a>
                <Link to="/about">
                  <li className="hidden sm:block hover:text-blue-500 font-medium">
                    About
                  </li>
                </Link>
                <Link to="/other-tools">
                  <li className="hidden sm:block hover:text-blue-500 font-medium">
                    Other Tools
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
                <li className=" hover:text-green-500 font-medium">
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
