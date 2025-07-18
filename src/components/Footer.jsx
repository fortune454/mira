import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return(
      <footer className="bg-[#061a19] mt-10 rounded-t-4xl text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          <h1 className="logo font-bold uppercase text-3xl sm:text-4xl lg:text-5xl">Mira</h1>
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-xl">Products</h3>
            <Link to="/pos">Point of sale</Link>
            <Link to="/pay">Pay at table</Link>
            <Link to="/online">Online ordering</Link>
            <Link to="/qr">QR digital menus</Link>
            <Link to="/shopify">Shopify+</Link>
            <Link to="/mirahome">Mira</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-xl">Legal</h3>
            <Link to="/terms">Terms of use</Link>
            <Link to="/policy">Privacy policy</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-xl">Contact</h3>
            <Link>Email: hello@mira.com</Link>
            <Link>Phone: +234 803 520 7311</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-xl">Social</h3>
            <Link to="/twitter">Twitter</Link>
            <Link to="/instagram">Instagram</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="font-bold text-xl">Company</h3>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About us</Link>
            <Link to="/pricing">Pricing</Link>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 py-4 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-sm">© 2024 Mira. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Mira is a product of Mira Technologies Ltd.</p>
        </div>
      </footer>
  )
};

export default Footer;