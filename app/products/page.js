import React from 'react';
import ProductHeroSec from '../component/products/ProductHeroSec.js';
import OurServices from '../component/products/ourServices.js';
import MakeManage from '../component/products/MakeManage.js';
import OurProducts from '../component/products/OurProducts.js';
import Footer from '../component/Footer.js';

import ContactForm from '../component/ContactForm';

const page = () => {
  return (
    <div>
      <ProductHeroSec />
      <OurServices />
      <MakeManage />
      <OurProducts />
      <div className=" md:hidden p-4 m-2 border rounded-2xl bg-black text-white">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default page;
