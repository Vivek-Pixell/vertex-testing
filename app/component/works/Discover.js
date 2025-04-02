import React from 'react';
import Navbar from '../NavBar';
import Image from 'next/image';

const Discover = () => {
  return (
    <div className=" relative h-[83vh] xl:h-screen w-full mb-16">
      <Image
        src="/images/bg-image.webp"
        alt="earth background"
        layout="fill"
        objectFit="cover"
        priority={true}
      />
      <div className="absolute w-full h-full bottom-16 flex justify-center items-center text-white px-4">
        <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl  font-semibold">
          Discover the most engaging places
        </h1>
      </div>
    </div>
  );
};

export default Discover;
