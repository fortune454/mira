import React, { useState } from "react";
import { Link } from "react-router-dom";

// ✅ Reusable dropdown component
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
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
  return (
    <div className="max-w-8xl px-4 sm:px-6 lg:px-6 pt-4">
      <header className="flex sm:flex-row justify-between items-center py-6 space-y-4 sm:space-y-0">
        <nav className="flex justify-between gap-30 mx-auto">
          <h1 className="logo text-5xl sm:text-4xl font-bold">Mira</h1>
          <div className="flex font-semibold gap-4">
            <DropdownGrid
              img={'image'}
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
            <Link to="/pricing" className="cursor-pointer text-lg px-2 py-3">Pricing</Link>
            <Link  to="/blog" className="cursor-pointer text-lg px-2 py-3">Blog</Link>
          </div>
          <div className="">
            <button className="text-lg mx-2 cursor-pointer font-semibold">Login</button>
            <button className="text-lg bg-black text-white py-2 px-4 rounded-lg cursor-pointer font-semibold mr-3">
              Sign up
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
