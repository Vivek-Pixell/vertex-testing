import Image from 'next/image';
import React from 'react';
import HeroSection from '../component/aboutus/HeroSection';
import AboutUsPage from '../component/aboutus/AboutUsPage.js';
import Footer from '../component/Footer.js';
import ScrollingImages from '../component/aboutus/ScrollingImages';
import CoreValues from '../component/aboutus/CoreValues';
import Machineries from '../component/aboutus/Machineries';
import ContactForm from '../component/ContactForm';

const page = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <AboutUsPage />
      <ScrollingImages />
      <CoreValues />
      <Machineries />
      <div className=" md:hidden p-4 m-2 border rounded-2xl bg-black text-white">
        <ContactForm />
      </div>
      <Footer />
      {/* <Footer /> */}
    </>
  );
};

export default page;
