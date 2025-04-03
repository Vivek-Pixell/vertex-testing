'use client';
import Image from 'next/image';
import React from 'react';

const ContactHero = () => {
  return (
    <div className=" relative h-[83vh] xl:h-screen w-full">
      <Image
        src="/images/imageContact.webp"
        alt="earth background"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute md:pl-20 xl:pl-40 max-w-md lg:max-w-2xl xl:max-w-4xl bottom-15 text-white px-4">
        <h1 className="text-xl md:text-3xl lg:text-4xl xl:text-6xl font-semibold">
          Have a project! <br /> Let’s discuss
        </h1>
        <p className="mt-4 text-2xl font-light  text-justify">
          Connect with us here. Have a great day.
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
