'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const OtherWorks = () => {
  const router = useRouter();

  const topLocationData = [
    {
      id: 1,
      name: 'Mumbai Metro',
      city: 'Mumbai, Maharashtra',
      slug: 'mumbai-metro',
      image: '/images/location7.webp',
    },
    {
      id: 2,
      name: 'Delhi Airport',
      city: 'New Delhi',
      slug: 'delhi-airport',
      image: '/images/location8.webp',
    },
    {
      id: 3,
      name: 'The Oberoi udaivilas, Udaipur',
      city: 'Udaipur, India',
      slug: 'oberoi-udaivilas',
      image: '/images/location9.webp',
    },
    {
      id: 4,
      name: 'Banglore Airport',
      city: 'Bangalore, Karnataka',
      slug: 'bangalore-airport',
      image: '/images/location10.webp',
    },
  ];

  const handleClick = (slug) => {
    router.push(`/work/${slug}`);
  };

  return (
    <div className="w-full py-16">
      <div className="px-4 md:px-24 xl:px-40 ">
        <div className="space-y-2 mb-6 flex flex-col">
          <p className="text-lg leading-6 font-semibold text-green-700 tracking-[1.85px]">
            OTHER WORKS
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {topLocationData.map((location) => (
            <div
              key={location.id}
              className=" flex flex-col gap-2"
              onClick={() => handleClick(location.slug)}
            >
              <div className=" h-80 relative overflow-hidden  rounded-lg shadow-md">
                <img
                  className="object-cover w-full h-full rounded-2xl hover:scale-115 transition-all duration-500 cursor-pointer"
                  src={location.image}
                  alt={location.name}
                />
              </div>

              <div className="">
                <div className=" w-full  text-black text-md font-medium cursor-pointer">
                  {location.name}
                </div>
                <div className="flex items-center gap-1 cursor-pointer">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_349_10396)">
                      <path
                        d="M8 13.9333L11.3 10.6333C11.9526 9.98066 12.397 9.14914 12.577 8.2439C12.7571 7.33867 12.6646 6.40039 12.3114 5.54769C11.9582 4.695 11.36 3.96619 10.5926 3.45343C9.82519 2.94068 8.92296 2.66699 8 2.66699C7.07704 2.66699 6.17481 2.94068 5.40739 3.45343C4.63997 3.96619 4.04183 4.695 3.68861 5.54769C3.33539 6.40039 3.24294 7.33867 3.42297 8.2439C3.603 9.14914 4.04741 9.98066 4.7 10.6333L8 13.9333ZM8 15.8187L3.75734 11.576C2.91823 10.7369 2.34679 9.66777 2.11529 8.50389C1.88378 7.34 2.0026 6.13361 2.45673 5.03726C2.91086 3.9409 3.6799 3.00384 4.66659 2.34455C5.65328 1.68527 6.81332 1.33337 8 1.33337C9.18669 1.33337 10.3467 1.68527 11.3334 2.34455C12.3201 3.00384 13.0891 3.9409 13.5433 5.03726C13.9974 6.13361 14.1162 7.34 13.8847 8.50389C13.6532 9.66777 13.0818 10.7369 12.2427 11.576L8 15.8187ZM8 8.66665C8.35362 8.66665 8.69276 8.52618 8.94281 8.27613C9.19286 8.02608 9.33334 7.68694 9.33334 7.33332C9.33334 6.9797 9.19286 6.64056 8.94281 6.39051C8.69276 6.14046 8.35362 5.99999 8 5.99999C7.64638 5.99999 7.30724 6.14046 7.05719 6.39051C6.80715 6.64056 6.66667 6.9797 6.66667 7.33332C6.66667 7.68694 6.80715 8.02608 7.05719 8.27613C7.30724 8.52618 7.64638 8.66665 8 8.66665ZM8 9.99999C7.29276 9.99999 6.61448 9.71904 6.11438 9.21894C5.61429 8.71884 5.33334 8.04057 5.33334 7.33332C5.33334 6.62608 5.61429 5.9478 6.11438 5.4477C6.61448 4.94761 7.29276 4.66666 8 4.66666C8.70725 4.66666 9.38552 4.94761 9.88562 5.4477C10.3857 5.9478 10.6667 6.62608 10.6667 7.33332C10.6667 8.04057 10.3857 8.71884 9.88562 9.21894C9.38552 9.71904 8.70725 9.99999 8 9.99999Z"
                        fill="#7B61FF"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_349_10396">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className=" text-sm text-gray-600">
                    {location.city}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OtherWorks;
