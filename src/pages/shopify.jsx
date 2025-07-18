import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Shopify = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 text-black">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="grid md:grid-cols-2 lg:grid-col-2 gap-6 text-center bg-green-100 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col items-start space-y-4">
            <h1 className="text-5xl text-start font-semibold uppercase">One inventory, Every channel. Shopify + Mira means no more stockouts.</h1>
            <p className="text-xs my-8 text-black text-start">Connect your Shopify store to Mira to sync in-store and online sales, track inventory in real time, and manage stock across all your locations—from one simple dashboard.</p>
            <Link to="/get-started" className="bg-green-900 text-white py-2 px-4 rounded-lg my-5"> 
              Book demo
            </Link>
          </div>
          <div className="relative w-full h-96 overflow-hidden rounded-xl">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
            >
              <source src="https://usemira.com/videos/arc.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        

        <h2 className="text-4xl mx-5 my-4 pt-20">Optimize inventory. Reduce errors. Grow your margins.</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-start">
          <div className="relative w-full h-96 overflow-hidden rounded-xl my-6">
            <img src="https://usemira.com/_nuxt/img/sync-inventory.ecb6d2b.webp" alt=""  className="w-full h-full object-cover"/>
            <div className="absolute bottom-0 my-10">
              <h4 className="text-white text-lg text-center font-semibold py-3">Sync Inventory Automatically</h4>
              <ul className="text-sm space-y-2 list-disc pl-5">
                <li className="text-white">Sell something in-store? It updates on Shopify.</li>
                <li className="text-white">Sell online? Your Mira stock adjusts instantly.</li>
                <li className="text-white">No more overselling. No more awkward phone calls.</li>
              </ul>
            </div>
          </div>

          <div className="relative w-full h-96 overflow-hidden rounded-xl my-6">
            <img src="https://usemira.com/_nuxt/img/track-all-sales.6a45e7a.webp" alt="" className="w-full h-full object-cover"/>
            <div className="absolute bottom-0 my-10">
              <h4 className="text-white text-center text-lg font-semibold py-3">Track All Sales</h4>
              <ul className="text-sm space-y-2 list-disc pl-5">
                <li className="text-white">View online and offline sales together.</li>
                <li className="text-white">See what’s selling, where, and when.</li>
                <li className="text-white">Make smarter restocking decisions.</li>
              </ul>
            </div>
          </div>

          <div className="relative w-full h-96 overflow-hidden rounded-xl my-6">
            <img src="https://usemira.com/_nuxt/img/see-customers.99f18e1.webp" alt="" className="w-full h-full object-cover"/>
            <div className="absolute bottom-0 my-10">
              <h4 className="text-white text-center text-lg font-semibold py-3">See Customers in Real-Time</h4>
              <ul className="text-sm space-y-2 list-disc pl-5">
                <li className="text-white">Shopify orders and walk-ins? All in one profile.</li>
                <li className="text-white">Track loyalty. Spot patterns. Reward repeat buyers.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 rounded-lg bg-green-100 my-30">
          <div className="mx-auto sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 p-8 text-start">
            <h2 className="logo uppercase text-green-800 my-10 text-3xl">ashcop</h2>
            <p className="pb-5 text-start text-lg">Mira changed everything. Now we have real-time visibility, accurate inventory across all stores, and way fewer errors. It’s been a game-changer for how we manage operations and serve customers.</p>
            <p className="text-black pt-15 font-bold text-2xl">Timilehin Tikolo</p>
            <p className="text-black text-lg">Head of Commercial & Supply Chain</p>
          </div>

          <img src="https://usemira.com/_nuxt/img/ashcorp.6984666.webp" alt=""  className="w-full h-auto bg-cover"/>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 my-15 text-center my-50">
          <h2 className="text-5xl mx-5 my-4 pt-9">Connect Mira to Shopify today</h2>
          <p className="text-md mx-5 mb-8">Bring your online and offline sales together. No more stockouts. No more double work. Just one system—for everything you sell.</p>
          <Link to="/get-started" className="bg-green-900 text-white py-2 px-4 rounded-lg mx-5"> 
            Book demo
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shopify;