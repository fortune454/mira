import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import image from "../assets/image.png"


const Pos = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 text-black">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <h1 className="font-bold text-7xl my-4 uppercase">The fastest way to pay in your restaurant </h1>
        <div>
          <ul className="text-lg space-y-3 mx-auto max-w-5xl">
            <li className="list-disc pl-5">
              <p className="list-item">Scan the QR code</p>
              <p className="list-item">View the bill & split if if you'd like</p>
              <p className="list-item">Add a tip</p>
              <p className="list-item">Pay in Seconds</p>
              <p className="list-item">Leave a review</p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 text-lg">
          <Link to="/get-started" className="bg-black text-white py-2 px-4 rounded-lg"> 
            Get started for free
          </Link>
          <Link to="/schedule-demo" className="text-lg px-3 py-3 border-1 border-black rounded-lg hover:bg-gray-200 transition-colors">
            Schedule a demo
          </Link>
        </div>

        <div>
          <h2 className="font-bold text-5xl my-4 uppercase text-center">Trusted by leading restaurant</h2>
          <div className="flex justify-center space-x-4">
            <img src="https://usemira.com/_nuxt/img/restaurant-4.05f7915.jpeg" alt="image" className="w-1/3 rounded-lg bg-cover"/>
            <img src="https://usemira.com/_nuxt/img/restaurant-1.f1a380e.jpg" alt="image" className="w-1/3 rounded-lg bg-cover"/>
            <img src="https://usemira.com/_nuxt/img/restaurant-3.82dcbe9.jpeg" alt="image" className="w-1/3 rounded-lg bg-cover"/>
          </div>
        </div>

        <div className="w-full px-4 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 rounded-lg my-5">
          <div className="mx-auto sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <h2 className="font-bold text-6xl my-8 pb-5 uppercase">Pay in seconds in restaurant</h2>
            <div className="flex w-70 gap-8 text-xl border-2 border-gray-300 bg-green-300 rounded-full">
              <p className="bg-green-600 rounded-full py-3 px-4 ">Scan</p>
              <p className="py-3 px-4">Split</p>
              <p className="py-3 px-4">Pay</p>
            </div>
            <p className="my-6 pb-5 text-xl">
              Customers only need to whip out their phone, use their camera to scan the QR, tap the link that comes up.
            </p>
            <Link className="border-1 py-3 px-3 rounded-lg mx-auto text-xl">
              Get started
            </Link>
          </div>
          <div>
            <img src={image} alt="image"/>
          </div>
        </div>

        <div className="w-full px-4 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 rounded-lg">
          <div className="mx-auto sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <h2 className="font-bold text-5xl my-8 pb-5 uppercase">Better customer experience</h2>
          <p className="pb-5 my-5 text-2xl">Waiting too long to ask for the bill and again for it to come can be frustrating for your customers.</p>
          <p className="pb-5 my-5 text-2xl">Give your guests the freedom to pay and easily split their bill as soon as they're ready. Take the pressure off staff & let them focus on providing excellent service</p>
          </div>
          <img src="https://usemira.com/_nuxt/img/better-customer-experience.556db34.jpg" alt="image4" className="w-full h-auto rounded-lg shadow-lg"/>
        </div>

        <div className="w-full px-4 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 rounded-lg">
          <div className="mx-auto sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <h2 className="font-bold text-5xl my-8 pb-5 uppercase">Get actionable insights</h2>
          <p className="pb-5 my-5 text-2xl">A backend dashboard to manage all your payments, and to collect valuable data that drives business growth</p>
          <ul className="list-disc pl-5">
            <li>
              <p className="py-4 text-2xl list-item">Identify top performing staff members</p>
              <p className="py-4 text-2xl list-item">Analyze guest feedback</p>
            </li>
          </ul>
          </div>
          <img src="https://usemira.com/_nuxt/img/actionable-insights.17d630e.png" alt="image5" className="w-full h-auto rounded-lg shadow-lg"/>
        </div>

        <div className="w-full px-4 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 rounded-lg">
          <img src="https://usemira.com/_nuxt/img/direct-order-boost-reputation.39ccd74.jpg" alt="image6" className="w-full h-auto rounded-lg shadow-lg" />
          <div className="mx-auto sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <h2 className="font-bold text-5xl my-8 pb-5 uppercase">Boost your Reputation</h2>
          <p className="pb-5 my-5 text-2xl">50% of customers leave a review after paying with Mira. Reply to all your reviews in seconds with a single dashboard.</p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 rounded-4xl bg-[#163418] shadow-lg">
        <div>
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

export default Pos;