import { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/header.scss";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const DropdownGrid = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(label);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="inline-flex justify-between w-48 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-lg font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected}
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="origin-top-right absolute z-50 mt-2 w-64 rounded-md shadow-lg bg-white ring-opacity-5 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {options.map((option, idx) => (
              <div
                key={idx}
                className="cursor-pointer px-4 py-2 hover:bg-gray-100 rounded"
                onClick={() => {
                  setSelected(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <div className="header-container">
      <header className="header-wrapper">
        <div className="menu-container">
          <div
            className={`icon-wrapper ${isSideMenuOpen ? "fade-in" : "fade-in"}`}
          >
            {isSideMenuOpen ? (
              <IoMdClose
                className="icon text-3xl cursor-pointer"
                onClick={() => setIsSideMenuOpen(false)}
              />
            ) : (
              <IoMenu
                className="icon text-3xl cursor-pointer"
                onClick={() => setIsSideMenuOpen(true)}
              />
            )}
          </div>
        </div>

        <nav className={`header-nav ${isSideMenuOpen ? "open" : ""}`}>
          <h1 className="logo text-5xl sm:text-4xl font-bold">Mira</h1>

          <div className="nav-links font-semibold">
            <DropdownGrid
              img={"image"}
              label="Products"
              options={["Retail", "Restaurant", "Hardware"]}
            />
            <DropdownGrid
              label="Business type"
              options={[
                "Fashion & apparel",
                "Quick service restaurant",
                "Coffee shops",
                "Supermarket",
                "Pharmacy",
              ]}
            />
            <Link
              to="/pricing"
              className="nav-link text-lg px-2 py-3 cursor-pointer"
            >
              Pricing
            </Link>
            <Link
              to="/blog"
              className="nav-link text-lg px-2 py-3 cursor-pointer"
            >
              Blog
            </Link>
          </div>

          <div className="auth-buttons">
            <button className="text-lg cursor-pointer font-semibold py-2 px-4 rounded-lg ">
              Login
            </button>
            <button className="text-lg bg-black text-white py-2 px-4 rounded-lg cursor-pointer font-semibold">
              Sign up
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
