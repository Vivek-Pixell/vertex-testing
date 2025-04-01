'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const MakeManage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % data.length);
      setProgress(0);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [activeTab]);

  const data = [
    {
      id: 1,
      heading: 'Make',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed velit cursus, laoreet felis gravida, dapibus nisi. Donec ornare ullamcorper nisl id rutrum. Sed . Donec ornare ullamcorper nisl id rutrum. Sed',
      image: '/images/image207.webp',
    },
    {
      id: 2,
      heading: 'Manage',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed velit cursus, laoreet felis gravida, dapibus nisi. Donec ornare ullamcorper nisl id rutrum. Sed . Donec ornare ullamcorper nisl id rutrum. Sed',
      image: '/images/image1241.webp',
    },
    {
      id: 3,
      heading: 'Install',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed velit cursus, laoreet felis gravida, dapibus nisi. Donec ornare ullamcorper nisl id rutrum. Sed . Donec ornare ullamcorper nisl id rutrum. Sed',
      image: '/images/image205.webp',
    },
  ];

  return (
    <section className=" my-16 md:my-20">
      <div className=" mx-auto px-4 md:px-24 xl:px-40 ">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <Image
              src={data[activeTab].image}
              alt="Make-Manage"
              width={500}
              height={600}
              className=" w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className=" flex flex-col gap-6">
            {data.map((item, index) => (
              <div key={index} className=" flex relative">
                {index === activeTab && (
                  <div
                    className="absolute left-0 w-2 bg-green-700 transition-all duration-200"
                    style={{ height: `${progress}%` }}
                  ></div>
                )}

                <div
                  key={item.id}
                  className={`flex px-8 py-3 text-gray-500 ${index === activeTab ? ' bg-[#26272A]  rounded-r-2xl' : 'bg-[#f5f5f7] text-black rounded-2xl'}  `}
                >
                  <div className=" flex flex-col gap-1">
                    <h2
                      className={`text-3xl font-bold ${index === activeTab ? 'text-white' : 'text-black'}`}
                    >
                      {item.heading}
                    </h2>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeManage;
