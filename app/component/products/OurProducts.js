'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const productData = [
  {
    id: 1,
    title: 'Digital Screens',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius, nibh et tincidunt mattis, felis leo varius tellus, tincidunt porttitor mi justo eget est. Quisque dignissim nulla non nisi egestas aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius, nibh et tincidunt mattis, felis leo varius tellus',
    locations: [
      'Ram Mandir',
      'Delhi Metro',
      'Bangalore Airport',
      'Mumbai Airport',
      'Delhi Airport',
    ],
    images: [
      '/images/productPage/image70.webp',
      '/images/productPage/image71.webp',
      '/images/productPage/image733.webp',
      '/images/productPage/image74.webp',
      '/images/productPage/image75.webp',
      '/images/productPage/image76.webp',
      '/images/productPage/image77.webp',
    ],
  },
  {
    id: 2,
    title: 'Urban Landscape Lighting',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius, nibh et tincidunt mattis, felis leo varius tellus, tincidunt porttitor mi justo eget est. Quisque dignissim nulla non nisi egestas aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius, nibh et tincidunt mattis, felis leo varius tellus',
    locations: ['Chennai Metro', 'Hyderabad Airport', 'Kolkata Street'],
    images: [
      '/images/productPage/image71.webp',
      '/images/productPage/image70.webp',
      '/images/productPage/image733.webp',
      '/images/productPage/image74.webp',
      '/images/productPage/image75.webp',
      '/images/productPage/image76.webp',
      '/images/productPage/image77.webp',
    ],
  },
  {
    id: 3,
    title: 'Digital Screens',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius, nibh et tincidunt mattis, felis leo varius tellus, tincidunt porttitor mi justo eget est. Quisque dignissim nulla non nisi egestas aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius, nibh et tincidunt mattis, felis leo varius tellus',
    locations: [
      'Ram Mandir',
      'Delhi Metro',
      'Bangalore Airport',
      'Mumbai Airport',
      'Delhi Airport',
    ],
    images: [
      '/images/productPage/image75.webp',

      '/images/productPage/image70.webp',
      '/images/productPage/image71.webp',
      '/images/productPage/image733.webp',
      '/images/productPage/image74.webp',
      '/images/productPage/image76.webp',
      '/images/productPage/image77.webp',
    ],
  },
  {
    id: 4,
    title: 'OOH Media Assets',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius, nibh et tincidunt mattis, felis leo varius tellus, tincidunt porttitor mi justo eget est. Quisque dignissim nulla non nisi egestas aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius, nibh et tincidunt mattis, felis leo varius tellus',
    locations: [
      'Ram Mandir',
      'Delhi Metro',
      'Bangalore Airport',
      'Mumbai Airport',
      'Delhi Airport',
    ],
    images: [
      '/images/productPage/image76.webp',

      '/images/productPage/image70.webp',
      '/images/productPage/image71.webp',
      '/images/productPage/image733.webp',
      '/images/productPage/image74.webp',
      '/images/productPage/image75.webp',
      '/images/productPage/image77.webp',
    ],
  },
  {
    id: 5,
    title: 'WayFinding Signages',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius, nibh et tincidunt mattis, felis leo varius tellus, tincidunt porttitor mi justo eget est. Quisque dignissim nulla non nisi egestas aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius, nibh et tincidunt mattis, felis leo varius tellus',
    locations: [
      'Ram Mandir',
      'Delhi Metro',
      'Bangalore Airport',
      'Mumbai Airport',
      'Delhi Airport',
    ],
    images: [
      '/images/productPage/image74.webp',

      '/images/productPage/image70.webp',
      '/images/productPage/image71.webp',
      '/images/productPage/image733.webp',
      '/images/productPage/image75.webp',
      '/images/productPage/image76.webp',
      '/images/productPage/image77.webp',
    ],
  },
];

const OurProducts = () => {
  const [activeImages, setActiveImages] = useState(
    productData.map((p) => p.images[0])
  );
  const [intervals, setIntervals] = useState({});

  const startImageRotation = (index) => {
    let imageIndex = 0;

    const interval = setInterval(() => {
      setActiveImages((prevImages) => {
        const newImages = [...prevImages];
        imageIndex = (imageIndex + 1) % productData[index].images.length;
        newImages[index] = productData[index].images[imageIndex];
        return newImages;
      });
    }, 2000);

    setIntervals((prev) => ({ ...prev, [index]: interval }));
  };

  const handleMouseEnter = (index) => {
    if (!intervals[index]) startImageRotation(index);
  };

  const handleMouseLeave = (index) => {
    clearInterval(intervals[index]);
    setIntervals((prev) => {
      const updated = { ...prev };
      delete updated[index];
      return updated;
    });
  };

  return (
    <section className="my-16 md:my-20 md:mb-[170px]">
      <div className="mx-auto px-4 md:px-24 xl:px-40">
        <h4 className=" text-lg leading-6 font-semibold text-[#5EB652] tracking-[1.85px] uppercase mb-6">
          Our Products
        </h4>

        <div className=" grid grid-cols-1 gap-16">
          {productData.map((product, index) => (
            <div
              key={product.id}
              className={`grid grid-cols-1 lg:grid-cols-2  gap-16 mb-6`}
              onMouseEnter={() => {
                handleMouseEnter(index);
              }}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Image Section */}
              <div
                className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <Image
                  src={activeImages[index]}
                  alt="Product"
                  width={500}
                  height={500}
                  className="rounded-3xl h-auto  w-full object-contain shadow-md transition-all duration-500"
                />
              </div>

              {/* Content Section */}
              <div
                className={` flex flex-col gap-0.5 transition-all duration-300 rounded-xl h-full ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <h3 className="text-3xl font-bold">{product.title}</h3>
                <p className=" text-[18px] text-gray-400 font-normal mt-2 md:tracking-wider">
                  {product.description}
                </p>

                {/* Locations */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.locations.map((location, i) => (
                    <div
                      key={i}
                      className=" flex justify-center items-center gap-2  px-3 py-1 border border-gray-300 rounded-full text-gray-600 text-sm"
                    >
                      <svg
                        width="12"
                        height="15"
                        viewBox="0 0 12 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.50833 14.3668C5.50833 14.3668 0.666992 10.2894 0.666992 6.27743C0.666992 4.86294 1.2289 3.50638 2.22909 2.50619C3.22928 1.506 4.58584 0.944092 6.00033 0.944092C7.41481 0.944092 8.77137 1.506 9.77156 2.50619C10.7718 3.50638 11.3337 4.86294 11.3337 6.27743C11.3337 10.2894 6.49233 14.3668 6.49233 14.3668C6.22299 14.6148 5.77966 14.6121 5.50833 14.3668ZM6.00033 8.61076C6.30674 8.61076 6.61016 8.55041 6.89325 8.43314C7.17635 8.31588 7.43357 8.14401 7.65024 7.92734C7.86691 7.71067 8.03878 7.45345 8.15604 7.17035C8.27331 6.88726 8.33366 6.58384 8.33366 6.27743C8.33366 5.97101 8.27331 5.66759 8.15604 5.3845C8.03878 5.1014 7.86691 4.84418 7.65024 4.62751C7.43357 4.41084 7.17635 4.23897 6.89325 4.12171C6.61016 4.00445 6.30674 3.94409 6.00033 3.94409C5.38149 3.94409 4.78799 4.18992 4.35041 4.62751C3.91283 5.06509 3.66699 5.65859 3.66699 6.27743C3.66699 6.89626 3.91283 7.48976 4.35041 7.92734C4.78799 8.36493 5.38149 8.61076 6.00033 8.61076Z"
                          fill="#8987A1"
                        />
                      </svg>
                      <span className=" text-[14px] text-gray-500 font-normal">
                        {location}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Get Quote Button */}
                <button className="mt-6 md:mt-16 lg:mt-8 xl:mt-auto cursor-pointer w-fit rounded-full px-10 py-2 text-gray-500 border-1 border-gray-300  flex items-center justify-center gap-2">
                  <span className=" text-lg text-[#475569] font-medium">
                    Get Quote
                  </span>

                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5459 13.4067L14.7959 20.1567C14.5846 20.368 14.2979 20.4868 13.9991 20.4868C13.7002 20.4868 13.4135 20.368 13.2022 20.1567C12.9908 19.9454 12.8721 19.6587 12.8721 19.3598C12.8721 19.0609 12.9908 18.7743 13.2022 18.5629L18.0312 13.7358H4.25C3.95163 13.7358 3.66548 13.6172 3.4545 13.4063C3.24353 13.1953 3.125 12.9091 3.125 12.6108C3.125 12.3124 3.24353 12.0262 3.4545 11.8153C3.66548 11.6043 3.95163 11.4858 4.25 11.4858H18.0312L13.2041 6.65576C12.9927 6.44442 12.874 6.15777 12.874 5.85888C12.874 5.56 12.9927 5.27335 13.2041 5.06201C13.4154 4.85067 13.7021 4.73193 14.0009 4.73193C14.2998 4.73193 14.5865 4.85067 14.7978 5.06201L21.5478 11.812C21.6527 11.9167 21.7359 12.041 21.7926 12.1779C21.8493 12.3148 21.8784 12.4616 21.8782 12.6097C21.8781 12.7579 21.8486 12.9046 21.7916 13.0414C21.7346 13.1781 21.6511 13.3023 21.5459 13.4067Z"
                      fill="#475569"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
