import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Navbar from '../NavBar';

const HeroSection = () => {
  return (
    <div className=" relative h-[83vh] xl:h-screen w-full">
      <Image
        src="/images/imageMountain.webp"
        alt="earth background"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute md:pl-20 xl:pl-40 max-w-md lg:max-w-2xl xl:max-w-4xl bottom-15 text-white px-4">
        <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-6xl font-normal">
          Weaving Your Dreams into Unforgettable Experience
        </h1>
        <p className="mt-4 text-[16px]  text-justify ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
          finibus urna, vel vestibulum neque. Duis dictum, tellus rutrum mollis
          egestas.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
