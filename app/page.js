import Image from "next/image";
import Footer from "./component/Footer";
import ComA from "./component/ComA";
import StatsSection from "./component/StatsSection";


export default function Home() {
  return (
    <div className=" bg-gray-50">
      <ComA/>
      <StatsSection/>

      <Footer/>

      
    </div>
  );
}
