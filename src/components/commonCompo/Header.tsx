import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [theme, setTheme] = useState("light");
  const location=useLocation();

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html")?.classList.remove("light");
      document.querySelector("html")?.classList.add("dark");
    } else {
      document.querySelector("html")?.classList.remove("dark");
      document.querySelector("html")?.classList.add("light");
    }
  }, [theme]);

  const changeTheme = () => {
    if (theme === "light") {
      console.log(theme);
      setTheme("dark");
    } else {
      console.log(theme);
      setTheme("light");
    }
  };

  const isActiveLink = (path:any) => location.pathname === path;


  return (
    <header className="">
      <nav className="bg-background border-border px-4 lg:px-6 py-2.5 dark:bg-dark-background dark:border-dark-border">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-foreground dark:text-dark-foreground">
              BookStore
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-foreground hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:text-dark-foreground dark:hover:bg-gray-700"
            >
              Log in
            </Link>
            <Link
              to="#"
              className="text-primary-foreground bg-primary hover:bg-opacity-90 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-dark-primary dark:text-dark-primary-foreground dark:hover:bg-opacity-90"
            >
              Sign In
            </Link>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-foreground rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-dark-foreground dark:hover:bg-gray-700"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              onClick={changeTheme}
              className="p-2 ml-1 text-foreground rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-dark-foreground dark:hover:bg-gray-700"
            >
              {theme === "light" ? (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 3a1 1 0 011-1v2a1 1 0 01-1-1zm-1 8H3a1 1 0 110-2h6a1 1 0 110 2zm8 0h-6a1 1 0 110-2h6a1 1 0 110 2zm-5 5a1 1 0 100-2 1 1 0 000 2zM4.22 4.22a1 1 0 00-1.42 1.42l1.42-1.42zm11.56 11.56a1 1 0 101.42-1.42l-1.42 1.42zM5.63 14.63l-1.42 1.42a1 1 0 001.42-1.42zM14.37 5.37l1.42-1.42a1 1 0 10-1.42 1.42z" />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 3a7 7 0 100 14 7 7 0 000-14z" />
                </svg>
              )}
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className={`block py-2 pr-4 pl-3  rounded bg-primary lg:bg-transparent  lg:p-0 dark:text-dark-foreground dark:bg-dark-primary lg:dark:bg-transparent ${isActiveLink('/')?"text-primary dark:text-primary":"text-foreground"}`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/books"
                  className={`block py-2 pr-4 pl-3  rounded bg-primary lg:bg-transparent  lg:p-0 dark:text-dark-foreground dark:bg-dark-primary lg:dark:bg-transparent ${isActiveLink('/books')?"text-primary dark:text-primary":"text-foreground"}`}
                >
                  Books
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-work"
                  className={`block py-2 pr-4 pl-3  rounded bg-primary lg:bg-transparent  lg:p-0 dark:text-dark-foreground dark:bg-dark-primary lg:dark:bg-transparent ${isActiveLink('/how-it-work')?"text-primary dark:text-primary":"text-foreground"}`}
                >
                  How Its Work
                </Link>
              </li>
        
              <li>
                <Link
                  to="/contact-us"
                  className={`block py-2 pr-4 pl-3  rounded bg-primary lg:bg-transparent  lg:p-0 dark:text-dark-foreground dark:bg-dark-primary lg:dark:bg-transparent ${isActiveLink('/contact-us')?"text-primary dark:text-primary":"text-foreground"}`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
