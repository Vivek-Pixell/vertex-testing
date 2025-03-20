'use client'
import { useEffect } from "react";

import ComA from "./component/ComA";
import StatsSection from "./component/StatsSection";
import ImageGrid from "./component/ImageGrid";
import BillboardSection from "./component/BillboardSection";
import Footer from "./component/Footer";
import BlogSection from "./component/BlogSection";
import TestimonialsSection from "./component/TestimonialsSection";
import PartnersShowcase from "./component/PartnersShowcase";
import ImageSignage from "./component/ImageSignage";
import ContactForm from "./component/ContactForm";


export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on page reload
  }, []);
  return (
    <div className=" bg-gray-200">

      <ComA />
      <StatsSection />
      <ImageGrid />
      <BillboardSection />
      <ImageSignage />
      <PartnersShowcase />
      <TestimonialsSection />
      <BlogSection />
      <div className=" md:hidden p-4 m-2 border rounded-2xl bg-black text-white">
        <ContactForm />
      </div>
      <Footer />

    </div>
  );
}