import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const Online = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 text-black">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <h1 className="font-bold text-8xl my-4 uppercase pb-7">Powerful ordering solution for delivery</h1>
        <p>Turn your social media or website into a selling machine. Let your best customers order directly from Instagram or WhatsApp. Say hello to another direct revenue stream.</p>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 text-lg">
          <Link to="/get-started" className="bg-black text-white py-2 px-4 rounded-lg"> 
            Get started for free
          </Link>
          <Link to="/schedule-demo" className="text-lg px-3 py-2 border-1 border-black rounded-lg hover:bg-gray-200 transition-colors">
            Schedule a demo
          </Link>
        </div>

        <div>
          <img src="https://usemira.com/_nuxt/img/direct-order-hero.8c79de4.jpg" alt="" className="w-full h-auto rounded-2xl shadow-lg"/>
        </div>

         <div className="w-full px-4 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 rounded-lg">
          <div className="mx-auto sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <h2 className="font-bold text-5xl my-8 pb-5 uppercase">Take direct orders from customers.</h2>
          <p className="pb-5 my-5 text-2xl">Paying high commissions for your loyal customers is painful and hurts your profit margin.</p>
          <p className="pb-5 my-5 text-2xl">With Mira commission-free ordering from Instagram, WhatsApp or your website, offer your best customers an easy and fast way to order from you directly and reward them for doing so.</p>
          <Link className="border-1 py-3 px-3 rounded-lg mx-auto text-xl">
            Get started
          </Link>
          </div>
          <img src="https://usemira.com/_nuxt/img/better-customer-experience.556db34.jpg" alt="image4" className="w-full h-auto rounded-xl shadow-lg"/>
        </div>


        <h2 className="font-bold text-5xl my-8 pb-5 uppercase">Increase Sales, Not Commission Fees.</h2>
        <div className="w-full px-4 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 rounded-lg">
          <div className="mx-auto sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <h3 className="font-bold text-2xl my-2 pb-2 ">Increase your profits</h3>
            <p className=" my-2 text-xl">By taking direct orders from your customers, you can eliminate high commission fees and boost your profit margins.</p>
            <h3 className="font-bold text-2xl my-3 pb-2 ">Boost customer satisfaction</h3>
            <p className=" my-2 text-xl">Receive glowing reviews and avoid order issues by ensuring all your orders reach the right hands at the right time.</p>
            <h3 className="font-bold text-2xl my-3 pb-2 ">Sync all orders</h3>
            <p className=" my-2 text-xl">Save time and labor costs by directly syncing all your online orders with your existing POS system.</p>
          </div>
          <img src="https://usemira.com/_nuxt/img/direct-order-increase-sales.95b1547.png" alt="image4" className="w-full h-auto rounded-xl shadow-lg"/>
        </div>

        <h2 className="font-bold text-5xl my-8 pb-5 uppercase">GIVE YOUR CUSTOMERS OPTIONS</h2>
        <div className="w-full px-4 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 rounded-lg">
          <img src="https://usemira.com/_nuxt/img/give-customer-options.787463f.jpg" alt="image4" className="w-full h-auto rounded-xl shadow-lg"/>
          <div className="mx-auto sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            
            <h3 className="font-bold text-2xl my-2 pb-2 ">Pickup</h3>
            <p className=" my-2 text-xl">Give customers the convenience to pick up orders in person for free. Flexible settings for fulfillment windows, order schedules, and cut-off times keep your kitchen running smooth.</p>
            <h3 className="font-bold text-2xl my-3 pb-2 ">Delivery</h3>
            <p className=" my-2 text-xl">Personalize your online ordering platform with the ability to set your preferred delivery radius, delivery fees, and fulfillment provider.</p>
            <h3 className="font-bold text-2xl my-3 pb-2 ">Offers discounts</h3>
            <p className=" my-2 text-xl">Incentivize your customers to order from you directly and reward their loyalty via digital discounts.</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 rounded-4xl bg-[#163418] shadow-lg my-15">
          <form action="">
            <h2 className="font-bold text-5xl my-8 pb-8 uppercase text-white text-center">Get started with pay at table</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mb-4 mx-10">
              <input type="text" placeholder="First Name"  className="text-white py-4 px-4 my-2 rounded-2xl placeholder:text-white placeholder:font-semibold bg-[#2d6930] focus:outline-none"/>
              <input type="text" placeholder="Last Name" className="text-white py-4 px-4 my-2 rounded-2xl placeholder:text-white placeholder:font-semibold bg-[#2d6930] focus:outline-none"/>
              <input type="email" placeholder="Email" className="col-span-2 text-white py-4 px-4 my-2 rounded-2xl placeholder:text-white placeholder:font-semibold bg-[#2d6930] focus:outline-none"/>
              <input type="text" placeholder="Restaurant Address" className="text-white py-4 px-4 my-2 rounded-2xl placeholder:text-white placeholder:font-semibold col-span-2 bg-[#2d6930] focus:outline-none"/>
              <input type="text" placeholder="Restaurant name" className="text-white py-4 px-4 my-2 rounded-2xl placeholder:text-white placeholder:font-semibold bg-[#2d6930] focus:outline-none"/>
              <input type="number" placeholder="Phone Number" className="text-white py-4 px-4 my-2 rounded-2xl placeholder:text-white placeholder:font-semibold bg-[#2d6930] focus:outline-none"/>
            </div>
            <button type="submit" className="bg-[white] mx-10 text-black py-4 px-8 rounded-2xl">Get in touch with the team</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Online;