import Card from "../app/component/LandindPage/Card";
import Offers from "../app/component/LandindPage/Offers";
import RecentViewProducts from "../app/component/LandindPage/RecentView"
 

export default function Home() {
  return (
    <div className="bg-gray-200 p-8">
       
      <Card />
      <Offers/>
      <RecentViewProducts/>
    </div>
  );
}
