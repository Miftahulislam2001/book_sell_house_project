import React, { useState } from "react";
import { BookOpenIcon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink/ActiveLink";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      {/* Logo Section */}
      <div className="relative flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-2"
          title="Go to Home"
        >
          <BookOpenIcon className="h-10 w-10 text-blue-500" />
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
            BookSellHouse
          </span>
        </Link>

        {/* Nav Item Section */}
        <div>
          <ul className="items-center hidden space-x-8 lg:flex font-semibold">
            <li>
              <ActiveLink to="/" title="Home Page">
                Home
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/books" title="Books Page">
                Books
              </ActiveLink>
            </li>
            <li>
              <ActiveLink to="/about" title="About Page">
                About
              </ActiveLink>
            </li>
          </ul>

          {/* Mobile Navbar Section */}
          <div className="lg:hidden">
            <button onClick={() => isMenuOpen(true)}>
              <Bars3BottomRightIcon className="w-6 text-gray-600" />
            </button>

            <div>
                
            </div>
          </div>


        </div>
      </div>
    </nav>
  );
};

export default Header;
