import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";


const QR = () => {
  return (
    <div>
      <div className="w-full min-h-screen bg-gray-100 text-black">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          <h1 className="text-8xl font-bold mb-6 uppercase">The FASTEST way to order & PAY AT YOUR RESTAURANT</h1>
          <p className="text-xl mb-8">Customers scan the QR code on their table to instantly access a digital menu,‍ they can order and pay for food and beverages on their mobile devices safely and quickly, without waiting for a server.</p>
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 text-lg">
            <Link to="/get-started" className="bg-black text-white py-2 px-4 rounded-lg"> 
              Get started for free
            </Link>
            <Link to="/schedule-demo" className="text-lg px-3 py-2 border-1 border-black rounded-lg hover:bg-gray-200 transition-colors">
              Schedule a demo
            </Link>
          </div>
        </div>

        <div>
          <img src="https://usemira.com/_nuxt/img/digital-menu.e65ada9.jpg" alt="" className="w-250 h-auto mx-auto rounded-2xl shadow-lg"/>
        </div>

        <div className="w-full px-4 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 rounded-lg mx-auto my-5">
          <div className="mx-6 sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <h2 className="font-bold text-7xl my-8 pb-5 uppercase">Pay in seconds in restaurant</h2>
            <div className="flex w-70 gap-8 text-xl border-2 border-gray-300 bg-green-300 rounded-full">
              <p className="bg-green-600 rounded-full py-3 px-4 ">Scan</p>
              <p className="py-3 px-4">Order</p>
              <p className="py-3 px-4">Pay</p>
            </div>
            <p className="my-6 pb-5 text-2xl">
              Customers only need to whip out their phone, use their camera to scan the QR, tap the link that comes up.
            </p>
            <Link className="border-1 py-3 px-3 rounded-lg mx-auto text-xl">
              Get started
            </Link>
          </div>
          <div>
            <img src="https://usemira.com/_nuxt/img/mira-app.927ff24.png" alt="image"/>
          </div>
        </div>

        <div className="my-10">
          <h2 className="font-bold text-6xl my-4 uppercase text-center">Join leading hospitality & entertainment brands</h2>
          <div className="flex justify-center mx-10 space-x-4">
            <img src="https://usemira.com/_nuxt/img/restaurant-4.05f7915.jpeg" alt="image" className="w-1/3 rounded-lg bg-cover"/>
            <img src="https://usemira.com/_nuxt/img/restaurant-1.f1a380e.jpg" alt="image" className="w-1/3 rounded-lg bg-cover"/>
            <img src="https://usemira.com/_nuxt/img/restaurant-3.82dcbe9.jpeg" alt="image" className="w-1/3 rounded-lg bg-cover"/>
          </div>
        </div>

        <div className="w-full px-4 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 rounded-lg my-10">
          <div className="mx-auto sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <h2 className="font-bold text-5xl my-8 pb-5 uppercase">Delight your guests</h2>
          <p className="pb-5 my-5 text-2xl">When you're busy, struggling to find a waiter can be frustrating for your guests, especially when they're hungry or thirsty.</p>
          <p className="pb-5 my-5 text-2xl">With Mira's seamless QR order and pay solution, let your customers order whenever they want and enable your staff to focus on building personal interactions.</p>
          </div>
          <img src="https://usemira.com/_nuxt/img/order-guest.ad69687.jpg" alt="image4" className="w-full h-auto rounded-lg shadow-lg"/>
        </div>

        <div className="w-full px-4 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 rounded-lg my-10">
          <img src="https://usemira.com/_nuxt/img/know-your-customers.2b3d9d4.jpg" alt="image4" className="w-full h-auto rounded-lg shadow-lg"/>
          <div className="mx-auto sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <h2 className="font-bold text-5xl my-8 pb-5 uppercase">Know your customers better</h2>
          <p className="pb-5 my-5 text-2xl">Without the right tools, it's almost impossible to know who are the people visiting your restaurant. Are they coming often? What do they usually order?</p>
          <p className="pb-5 my-5 text-2xl">With Mira, collect valuable data and feedback with every order. Access powerful analytics to serve your customers better.</p>
          </div>
        </div>

        <div className="w-full px-4 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 rounded-lg my-10">
          <div className="mx-auto sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <h2 className="font-bold text-5xl my-8 pb-5 uppercase">Increase your revenue</h2>
          <p className="pb-5 my-15 text-2xl">Another way to up-sell to your customers.‍ Tailor your digital menu by the time of the day (breakfast bundle, happy hours,...), add smart recommendations for each dish and increase your average basket by up to 34%.</p>
          </div>
          <img src="https://usemira.com/_nuxt/img/increase-sales.ca71afb.jpg" alt="image4" className="w-full h-auto rounded-lg shadow-lg"/>
        </div>

        <div className="w-full px-4 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 rounded-lg my-10">
          <img src="https://usemira.com/_nuxt/img/boost-reputation.3d1e2de.png" alt="image4" className="w-full h-auto rounded-lg shadow-lg"/>
          <div className="mx-auto sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <h2 className="font-bold text-5xl my-8 pb-5 uppercase">Guarantee your staff high tips</h2>
          <p className="pb-5 my-5 text-2xl">
          Retain your staff. Guarantee your team high tips. 22% tip rate for
          high performing restaurants. Lot’s of customers tip when they have
          the option to. Mira gives you that.</p>
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

        <Footer />
      </div>
    </div>
  );
};

export default QR;
