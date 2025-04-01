import Image from 'next/image';
import React from 'react';
import NavBar from '../NavBar';

const ProductHeroSec = () => {
  return (
    <div className=" relative h-[83vh] xl:h-screen w-full mb-16">
      <Image
        src="/images/productBg.webp"
        alt="earth background"
        layout="fill"
        objectFit="cover"
      />
      <NavBar />
      <div className="absolute md:pl-20 lg:pl-40 max-w-md lg:max-w-2xl xl:max-w-4xl bottom-20 text-white px-4">
        <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-6xl font-normal">
          Weaving Your Dreams into Unforgettable Adventures
        </h1>
        <p className="mt-4 text-sm  text-justify ">
          Discover the captivating allure of Arctic wonders, from stunning
          landscapes to vibrant culture, on an <br /> unforgettable journey
          throught the North.
        </p>
      </div>
    </div>
  );
};

export default ProductHeroSec;
