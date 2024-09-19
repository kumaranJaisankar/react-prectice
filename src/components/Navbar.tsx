import React, { useEffect, useState } from "react";
import { CommonButton } from "../utils/styled_components";
import { googleLogout } from "@react-oauth/google";
import { useLocation, useNavigate, Link } from "react-router-dom";

export const Navbar = () => {
  const location = useLocation();
  const [userDetail, setDetails] = useState<any>({
    name: "kum",
    picture: "fd",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("userDetail")) {
      const user = JSON.parse(localStorage.getItem("userDetail") ?? "{}");
      setDetails(user);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    googleLogout();
    navigate("/login");
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            React Practice
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden w-full  md:w-auto md:flex md:items-center md:divide-x md:divide-gray-200  flex-row"
          id="navbar-default "
          //   style={{ display: "flex" }}
        >
          <div className="mr-4">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-600 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent ${
                    location.pathname === "/event"
                      ? "md:text-blue-400"
                      : "md:text-white"
                  } md:p-0`}
                  aria-current="page"
                >
                  <Link to={"/event"}>Events</Link>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className={`block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent ${
                    location.pathname === "/gallery"
                      ? "md:text-blue-400"
                      : "md:text-white"
                  } md:p-0 `}
                >
                  <Link to={"/gallery"}>Gallery</Link>
                </a>
              </li>
            </ul>
          </div>
          <div className="md:flex items-center">
            <img
              src={
                userDetail["picture"]
                  ? userDetail["picture"]
                  : "https://res.cloudinary.com/dtbarluca/image/upload/v1692694826/user_1177568_mmmdi6.png"
              }
              alt="profile"
              className="w-10 h-10 rounded-full md:ml-4"
            />
            <p className="text-gray-100 md:ml-2">{userDetail["name"]}</p>
            <CommonButton $error onClick={logout}>
              Logout
            </CommonButton>
          </div>
        </div>
      </div>
    </nav>
  );
};
