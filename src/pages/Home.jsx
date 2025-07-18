import React from "react";
import Header from "../components/Header";
import image from "../assets/shutter.jpg";
import image2 from "../assets/drag.jpg";
import image3 from "../assets/shop 2.jpg";
import image4 from "../assets/facebook.png";
import image5 from "../assets/twitter.png";
import image6 from "../assets/link.png";
// import { Link } from "react-router-dom";
import Footer from "../components/Footer";


const Home = () => {

  
  return(
    <div className="">
      <Header />

      <div className="max-w-8xl mx px-8 md:px-12 lg:px-16 py-18 space-y-8">
        <h1 className="text-5xl md:text-4xl lg:text-5xl font-bold text-start uppercase font-fugaz-one">
          Create an online ordering system for your small business
        </h1>
        <div className="md:block md:space-y-2 lg:flex items center space-x-4 text-sm py-2 sm:text-base font-moderat">
          <p className="text-gray-600">Zia Yusuf</p>
          <p className="text-gray-500">August 05, 2024</p>
          <p className="text-gray-500">Grow with Mira</p>
        </div>
        <img
          src="https://images.ctfassets.net/4ge29kda8i22/52OQBavwAZd9K6NllSZ4KR/d91bdbbc189585ed5fcdd651cbc27d60/iPhone-elevated-vs2.jpg?w=1000"
          alt="Ordering System"
          className="w-full rounded-lg shadow-md"
        />
      </div>

      {/* CONTENT SECTION */}
      <div className="w-180 mx-auto px-4 py-2 sm:px-6 lg:px-8 md:text-md text-start lg:text-xl space-y-5 text-gray-800">
        <p className="text-black pb-4">
          If you want to take your business online to reach more customers and provide better service to the ones you have, it might seem like a stressful process. This guide is to help you take your business online without hassle.
        </p>

        <section>
          <h3 className="text-xl sm:text-2xl font-bold uppercase mb-4">What an online ordering system is.</h3>
          <img src={image} alt="Online Ordering" className="w-full h-auto rounded-lg mb-4" />
          <p className="text-black pb-4">
            Online ordering allows customers to order food or products directly from your website or app. It streamlines the ordering process, making it easy for customers to browse your menu, select items, customize their orders, and pay online. With an online ordering system, you can take orders 24/7, reduce wait times, and increase order accuracy.
          </p>
        </section>

        <section>
          <h3 className="text-xl sm:text-2xl md:text-xl font-bold uppercase">What to look for in an online ordering system</h3>
          <img src={image2} alt="Ordering Features" className="w-full h-auto rounded-lg mb-4" />
          <ul className="space-y-4 pl-5 list-disc">
            <li>
              <span className="font-semibold">User-Friendly Interface:</span> The system should be easy for both you and your customers to navigate. A clean, intuitive design will encourage more orders
            </li>
            <li>
              <span className="font-semibold">Customization Options:</span> Look for a system that allows you to customize your menu, add photos, and write detailed descriptions. This helps showcase your products and makes it easier for customers to find what they want.
            </li>
            <li>
              <span className="font-semibold">Integration Capabilities:</span> Ensure the system can integrate with your existing POS system, website, and social media channels. This will help sync your operations.
            </li>
            <li>
              <span className="font-semibold">Payment Processing:</span> A good system should support various payment options, including debit cards, and bank transfers.
            </li>
            <li>
              <span className="font-semibold">Order Management:</span> The system should offer robust order management features, allowing you to track orders in real time, manage inventory, and generate reports. It should also allow you to set custom schedules according to your time.
            </li>
            <li>
              <span className="font-semibold">Customer Support:</span> Choose a system with reliable customer support. You want to be able to get help quickly if any issues arise.
            </li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl sm:text-2xl font-bold uppercase mb-4">The best online ordering system for your small business.</h3>
          <img src={image3} alt="Shop" className="w-full h-auto rounded-lg mb-4" />
          <p className="text-black pb-4">
             Mira is the best partner to take your business online. Offering an all-in-one solution that’s designed with small businesses in mind. Here’s why you should use Mira to take your business online:
          </p>
            <p className="text-black pb-4">
                <span className="font-semibold">All-In-One Solution:</span> 
                    Mira combines online ordering, payment processing, and order management in one easy-to-use platform, mobile included.
            </p>
          <p className="text-black pb-4">
            <span className="font-semibold">Customization:</span> With Mira, you can easily customize your menu, add enticing photos, and write detailed descriptions to attract customers. You can also allow customers to schedule orders ahead of time for pickup or delivery.
          </p>
          <img
            src="https://images.ctfassets.net/4ge29kda8i22/50AHZ1NetVQzPxTNUdSlmf/36993a65b96dabf5c1d9e9aa27b1d879/Screenshot_2024-07-23_at_10.53.35_PM.png"
            alt="Customization Example"
            className="w-full h-auto rounded-lg my-4"
          />
          <p className="text-black pb-4">
            <span className="font-semibold">Payment Flexibility:</span> Mira supports various payment methods, ensuring that your customers can pay in the way that’s most convenient for them.
          </p>
          <p className="text-black pb-4">
            <span className="font-semibold">Real-Time Order Tracking:</span> Mira’s order management system allows you to track orders in real time, manage inventory, and generate detailed reports to help you make informed business decisions.
          </p>
          <img
            src="https://images.ctfassets.net/4ge29kda8i22/7j2Uw43w6ZFzP3LC0X9NZo/7d9946f41d3b7036ba0cc921ee9d9b75/Screenshot_2024-07-23_at_10.29.24_PM.png"
            alt="Analytics"
            className="w-full h-auto rounded-lg my-4"
          />
           <img src="https://images.ctfassets.net/4ge29kda8i22/7j2Uw43w6ZFzP3LC0X9NZo/7d9946f41d3b7036ba0cc921ee9d9b75/Screenshot_2024-07-23_at_10.29.24_PM.png" alt="imgs" className="w-full h-auto rounded-lg my-4"/>
          <p className="text-black pb-4">
            <span className="font-semibold">Reliable Support:</span> Mira offers excellent customer support to help you with any issues that may arise, ensuring that your online ordering system runs smoothly.
          </p>
          <p className="text-black pb-4">
            Creating an online ordering system for your business doesn’t have to be complicated. With the right platform, like Mira, you can offer your customers a convenient way to order their favourite items and keep your business running efficiently.
            <span className="font-semibold underline cursor-pointer">online ordering system</span> and transform your business.
          </p>
          <p className="text-black pb-4">
            Ready to take your business to the next level? Explore Mira’s <span className="font-semibold underline cursor-pointer">online ordering system</span> and see how it can transform your operations and boost your sales.
          </p>
        </section>
      </div>

      {/* SOCIAL SECTION */}
      <div className="flex justify-center items-center gap-6 my-10">
        <img src={image4} alt="Facebook" className="w-10 h-10 cursor-pointer" />
        <img src={image5} alt="Twitter" className="w-10 h-10 cursor-pointer" />
        <img src={image6} alt="LinkedIn" className="w-10 h-10 cursor-pointer" />
      </div>
      <Footer />
    </div>
  )
}
export default Home;