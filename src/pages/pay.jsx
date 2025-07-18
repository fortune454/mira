import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Pay = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-800">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <h1 className="font-bold text-8xl my-4 uppercase pb-7">A complete point of sale for your restaurant</h1>
        <Link to="/home" className="text-black border-1 rounded-lg px-4 py-2 mb-7">
          Schedule a demo
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <img src="https://usemira.com/_nuxt/img/pos-banner-1.bbad1e2.png" alt=""  className="w-150 h-150 bg-cover my-8 py-5"/>
          <img src="https://usemira.com/_nuxt/img/pos-banner-2.cefb574.png" alt="" className="w-150 h-150 bg-cover"/>
          <img src="https://usemira.com/_nuxt/img/qr-code.7b13d75.jpeg" alt="" className="pt-70"/>
        </div>


        <h2 className="font-bold text-6xl my-8 pb-5 mx-auto uppercase">Mira is AN ALL-IN-ONE POINT OF SALE system</h2>
        <div className="w-full px-4 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 rounded-lg my-5">
          <div>
            <img src="https://usemira.com/_nuxt/img/manage-your-floor-plan.9d4405a.png" alt="" className="w-full h-auto shadow-xl rounded-2xl"/>
            <h3 className="py-2 font-semibold text-2xl">Manage your floor plan</h3>
            <p className="py-3 text-lg">Keep tabs on all of your tables, create click-and-drag floor plan layouts, with just a few taps.</p>
          </div>
          <div>
            <img src="https://usemira.com/_nuxt/img/advanced-reporting.5f8847f.png" alt="" className="w-full h-auto shadow-xl rounded-2xl"/>
            <h3 className="py-2 font-semibold text-2xl">Advanced reporting</h3>
            <p className="py-3 text-lg">Understand your business, from what sells best to when you’re busiest</p>
          </div>
          <div>
            <img src="https://usemira.com/_nuxt/img/boost-your-customer-loyalty.951e7cc.png" alt="" className="w-full h-auto shadow-xl rounded-2xl"/>
            <h3 className="py-2 font-semibold text-2xl">Boost your customer loyalty</h3>
            <p className="py-3 text-lg">Boost customer loyalty with profiles that track purchases and preferences.</p>
          </div>
          <div>
            <img src="https://usemira.com/_nuxt/img/manage-your-menu-in-a-beat.dcd1eb2.png" alt="" className="w-full h-auto shadow-xl rounded-2xl"/>
            <h3 className="py-2 font-semibold text-2xl">Manage your menu in a beat</h3>
            <p className="py-3 text-lg">Create and customize your menus from the office, remotely, or directly from your POS</p>
          </div>
        </div>
        
        
        <div className="w-full px-4 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 rounded-lg">
          <div className="mx-auto sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <h2 className="font-bold text-5xl my-8 pb-5 uppercase">Increase your revenue</h2>
          <p className="pb-5 my-5 text-2xl">Another way to up-sell to your customers.‍ Tailor your digital menu by the time of the day (breakfast bundle, happy hours,...), add smart recommendations for each dish and increase your average basket by up to 34%.</p>
          </div>
          <img src="https://usemira.com/_nuxt/img/increase-sales.ca71afb.jpg" alt="image4" className="w-full h-auto rounded-lg shadow-lg"/>
        </div>

        <div className="w-full px-4 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 rounded-lg">
          <img src="https://usemira.com/_nuxt/img/know-your-customers.2b3d9d4.jpg" alt="image4" className="w-full h-auto rounded-lg shadow-lg"/>
          <div className="mx-auto sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <h2 className="font-bold text-5xl my-8 pb-5 uppercase">Increase your revenue</h2>
          <p className="pb-5 my-5 text-2xl">Without the right tools, it's almost impossible to know who are the people visiting your restaurant. Are they coming often? What do they usually order?</p>
          <p className="pb-5 my-5 text-2xl">With Mira, collect valuable data and feedback with every order. Access powerful analytics to serve your customers better.</p>
          </div>
        </div>

        <div className="w-full px-4 py-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 rounded-lg">
          <div className="mx-auto sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <h2 className="font-bold text-5xl my-8 pb-5 uppercase">Guarantee your staff high tips</h2>
          <p className="pb-5 my-5 text-2xl">
          Retain your staff. Guarantee your team high tips. 22% tip rate for
          high performing restaurants. Lot’s of customers tip when they have
          the option to. Mira gives you that.</p>
          </div>
          <img src="https://usemira.com/_nuxt/img/boost-reputation.3d1e2de.png" alt="image4" className="w-full h-auto rounded-lg shadow-lg"/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pay;
