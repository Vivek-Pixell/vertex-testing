'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import logo1 from '../../public/icons/Vector1.svg';
import logo2 from '../../public/icons/Vector2.svg';
import logo3 from '../../public/icons/Vector3.svg';
import logo4 from '../../public/icons/Vector4.svg';
import logo5 from '../../public/icons/Vector5.svg';

const partners = [
  { id: 1, name: 'LogoIpsum', logo: logo1 },
  { id: 2, name: 'LogoIpsum', logo: logo2 },
  { id: 3, name: 'LogoIpsum', logo: logo3 },
  { id: 4, name: 'LogoIpsum', logo: logo4 },
  { id: 5, name: 'LogoIpsum', logo: logo5 },
];

const PartnersShowcase = () => {
  // const [rotation, setRotation] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;
  //     setRotation(scrollY); // Keeps rotation within 360 degrees
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <section className="py-16 px-4 md:px-40">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-gray-800 text-lg md:text-xl mb-8">
          Join Over 150 Companies Who Trust Vertex
        </h2>

        {/* Partner Logos */}
        <div className="flex flex-wrap justify-evenly items-center gap-8  mb-16">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex flex-col-2 md:flex-col-5 gap-4 items-center space-y-2"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                priority
                className="w-[150px] h-auto object-contain transition-transform duration-300 ease-linear"
                // style={{ transform: `rotate(${rotation}deg)` }}
              />
              {/* <h3 className="font-bold text-xl pb-2 text-black">
                {partner.name}
              </h3> */}
            </div>
          ))}
        </div>

        {/* Video Showcase */}
        <div className="relative overflow-hidden rounded-2xl shadow-lg mx-auto">
          <video
            src="/videos/video1.mp4" // ✅ Correct path: Remove "videos/" since it's in "public"
            className="object-cover w-full h-auto lg:h-[85vh]"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            onError={(e) => console.error('Video error:', e)}
          >
            <source src="/video1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Play Button */}
          <button
            className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/50 transition duration-300"
            aria-label="Play video"
          >
            <div className="bg-blue-600 hover:bg-blue-700 pl-1 text-white rounded-full w-15 h-15 flex items-center justify-center transition transform hover:scale-110 cursor-pointer">
              <svg
                width="20"
                height="30"
                viewBox="0 0 29 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.0232 13.9504L5.36096 1.14035C4.91341 0.870018 4.40181 0.724048 3.87899 0.717515C3.35617 0.710981 2.84108 0.844121 2.38691 1.10319C1.93274 1.36225 1.55596 1.73785 1.29546 2.1912C1.03497 2.64455 0.900209 3.15922 0.905097 3.68206V29.289C0.905241 29.8099 1.04321 30.3214 1.305 30.7717C1.56679 31.2219 1.94307 31.5949 2.39562 31.8527C2.84818 32.1105 3.3609 32.2439 3.88172 32.2394C4.40253 32.235 4.91289 32.0928 5.36096 31.8272L27.0232 19.0268C27.4653 18.7659 27.8316 18.3943 28.0862 17.9485C28.3407 17.5028 28.4745 16.9984 28.4745 16.4851C28.4745 15.9718 28.3407 15.4674 28.0862 15.0217C27.8316 14.5759 27.4653 14.2043 27.0232 13.9434V13.9504Z"
                  fill="white"
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default PartnersShowcase;
