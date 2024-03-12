import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
let style =  {
  position : "sticky",
  top : 0,
  backgroundColor : "white",
  zIndex : 1
}
  return (
    <div style={style}>
      <header className="text-gray-600  ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 1 10 5 10-5"></path>
            </svg>
            <span
              className="ml-3 text-xl w-40"
              style={{ position: "relative" }}
            >
              CineSearch{" "}
              <p
                style={{
                  position: "absolute",
                  top: "15px",
                  left: "0px",
                  fontSize: "10px",
                }}
              >
                A Movie Search App
              </p>
            </span>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link to="/" className="mr-5 hover:text-gray-900">
              {" "}
              Home{" "}
            </Link>
            <Link to="/search" className="mr-5 hover:text-gray-900">
              {" "}
              Search{" "}
            </Link>
            <Link to="/movies" className="mr-5 hover:text-gray-900">
              {" "}
              Movies{" "}
            </Link>
            <Link to="/webseries" className="mr-5 hover:text-gray-900">
              {" "}
              Web Series{" "}
            </Link>
            <Link to="/others" className="mr-5 hover:text-gray-900">
              {" "}
              Others{" "}
            </Link>
          </nav>
          <Link to={"/signup"}>
            {" "}
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Sign Up
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>{" "}
          </Link>
        </div>
      </header>
    </div>
  );
}
