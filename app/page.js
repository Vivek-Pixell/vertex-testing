import Image from "next/image";
import Footer from "./component/Footer";
import ComA from "./component/ComA";
import StatsSection from "./component/StatsSection";
import ImageGrid from "./component/ImageGrid";
import BillboardSection from "./component/BillboardSection";
import ImageSignage from "./component/ImageSignage";
import PartnersShowcase from "./component/PartnersShowcase";
import TestimonialsSection from "./component/TestimonialsSection";
import BlogSection from "./component/BlogSection";
import ContactForm from "./component/ContactForm";

export default function Home() {
  return (
    <div className=" bg-gray-50">
      <ComA/>
      <StatsSection/>
      <ImageGrid/>
      <BillboardSection/>
      <ImageSignage/>
      <PartnersShowcase/>
      <TestimonialsSection/>
      <BlogSection/>
      <div className=" md:hidden p-4 m-2 border rounded-2xl bg-black text-white">
        <ContactForm />
      </div>

      <Footer/>

      
    </div>
  );
}
