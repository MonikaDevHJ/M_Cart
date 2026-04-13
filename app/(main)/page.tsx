import Card from "../component/LandindPage/Card";
import Offers from "../component/LandindPage/Offers";
import RecentViewProducts from "../component/LandindPage/RecentView";
import Footer from "../component/Footer";

export default function Home() {
  return (
    <div className="bg-gray-200 p-8">
      <Card />
      <Offers />
      <RecentViewProducts />
      <Footer />
    </div>
  );
}
