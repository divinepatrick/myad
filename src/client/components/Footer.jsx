import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Logo */}
          <Link to="/" className="mb-4 md:mb-0">
            <img src={logo} alt="Myad Logo" className="h-20 w-auto" />
          </Link>

          {/* Navigation Links */}
          <ul className="flex gap-6 mb-4 md:mb-0">
            <li>
              <Link
                to="/about"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/creative"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                Creative
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-blue-500 transition-colors duration-200"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 mt-6 pt-4 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} MyAd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
