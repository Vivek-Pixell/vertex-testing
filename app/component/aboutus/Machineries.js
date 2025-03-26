'use client';
import React, { useState } from 'react';

import Image from 'next/image';

const Machineries = () => {
  const [activeTab, setActiveTab] = useState(1);

  const items = [
    { id: 1, image: '/images/f.webp' },
    { id: 2, image: '/images/f1.webp' },
    { id: 3, image: '/images/f.webp' },
    { id: 4, image: '/images/f1.webp' },
    { id: 5, image: '/images/f.webp' },
  ];

  const handleMouseEnter = (id) => {
    setActiveTab(id);
  };

  const handleMouseLeave = () => {
    setActiveTab(null);
  };

  return (
    <div className="w-full py-12">
      <div className="px-4 md:px-24 lg:px-40">
        <div className="space-y-2 flex flex-col">
          <p className="text-lg leading-6 font-semibold text-[#5EB652] tracking-[1.85px]">
            Machineries
          </p>
          <h2 className="md:text-4xl lg:text-5xl text-3xl font-normal md:tracking-tight md:leading-[65px] text-gray-900">
            What We Offer To Our <br /> Clients
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="flex flex-col md:flex-row overflow-x-auto gap-4 ">
            {items.map((item) => (
              <div
                key={item.id}
                onMouseEnter={() => setActiveTab(item.id)}
                onMouseLeave={() => setActiveTab(null)}
                className={`transition-all duration-400 ease-in-out ${
                  activeTab === item.id ? 'w-[1200px]' : 'w-[400px]'
                }`}
              >
                <Image
                  alt={`Machine ${item.id}`}
                  src={item.image}
                  height={400}
                  width={600} // Set max possible width
                  className="h-[400px]  w-[600px] object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Machineries;
