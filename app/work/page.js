import React from 'react';
import Discover from '../component/works/Discover';
import TopLocations from '../component/works/TopLocations';
import TopWorks from '../component/works/TopWorks';
import OtherWorks from '../component/works/OtherWorks';
import Footer from '../component/Footer';

import ContactForm from '../component/ContactForm';

const page = () => {
  return (
    <div>
      <Discover />
      <TopLocations />
      <TopWorks />
      <OtherWorks />
      <div className=" md:hidden p-4 m-2 border rounded-2xl bg-black text-white">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default page;
