'use client';
import Image from 'next/image';
import React from 'react';

const CoreValues = () => {
  const valueData1 = [
    {
      title: 'Value 1',
      description:
        'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.',
      icon: (
        <svg
          width="44"
          height="45"
          viewBox="0 0 44 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.573975" width="44" height="44" rx="9" fill="#F5F8FF" />
          <path
            d="M22 14.574V15.574M22 29.574V30.574M15.0718 18.574L15.9378 19.074M28.0622 26.074L28.9282 26.574M28.9282 18.574L28.0622 19.074M15.9378 26.074L15.0718 26.574M26 22.574C26 20.3648 24.2091 18.574 22 18.574C19.7908 18.574 18 20.3648 18 22.574C18 24.7831 19.7908 26.574 22 26.574C24.2091 26.574 26 24.7831 26 22.574Z"
            stroke="#252432"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      image: null,
    },
    {
      title: 'Value 2',
      description:
        'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.',
      icon: (
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.666748"
            y="0.573975"
            width="44"
            height="44"
            rx="9"
            fill="#F5F8FF"
          />
          <path
            d="M20.9109 15.4435C21.6689 14.0537 23.6646 14.0537 24.4226 15.4435L25.639 17.6739C25.9266 18.2014 26.4361 18.5716 27.0267 18.6821L29.5238 19.1498C31.0799 19.4412 31.6966 21.3392 30.6089 22.4896L28.8636 24.3356C28.4509 24.7722 28.2562 25.3712 28.3335 25.967L28.6605 28.4864C28.8642 30.0563 27.2496 31.2294 25.8194 30.5505L23.5244 29.461C22.9816 29.2034 22.3518 29.2034 21.8091 29.461L19.5141 30.5505C18.0839 31.2294 16.4693 30.0563 16.673 28.4864L16.9999 25.967C17.0773 25.3712 16.8826 24.7722 16.4699 24.3356L14.7246 22.4896C13.6369 21.3392 14.2536 19.4412 15.8097 19.1498L18.3068 18.6821C18.8973 18.5716 19.4069 18.2014 19.6945 17.6739L20.9109 15.4435Z"
            stroke="#252432"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      ),
      image: null,
    },
    {
      title: 'Value 3',
      description:
        'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.',
      icon: (
        <svg
          width="45"
          height="45"
          viewBox="0 0 45 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.333496"
            y="0.573975"
            width="44"
            height="44"
            rx="9"
            fill="#F5F8FF"
          />
          <path
            d="M20.3335 29.574H16.3335C14.6766 29.574 13.3335 28.2309 13.3335 26.574V17.574C13.3335 15.9171 14.6766 14.574 16.3335 14.574H28.3335C29.9904 14.574 31.3335 15.9171 31.3335 17.574V26.574C31.3335 28.2309 29.9904 29.574 28.3335 29.574H24.3335M20.3335 29.574V32.574M20.3335 29.574H24.3335M24.3335 29.574V32.574M20.3335 32.574H24.3335M20.3335 32.574H19.3335M24.3335 32.574H25.3335"
            stroke="#252432"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      image: null,
    },
    {
      title: 'Value 4',
      description:
        'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.',
      icon: (
        <svg
          width="44"
          height="45"
          viewBox="0 0 44 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.573975" width="44" height="44" rx="9" fill="#F5F8FF" />
          <path
            d="M13.1187 24.331L17.3639 30.4069L29.819 12.574H21.3301L13.1187 24.331Z"
            fill="#65B842"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.2815 12.574H5L11.142 21.3645L17.2815 12.574ZM19.5326 33.3733L22.9204 38.222L40.8408 12.574H34.0596L19.5326 33.3733Z"
            fill="white"
          />
        </svg>
      ),
      image: '/images/image4c.webp', // Replace with actual image path
    },
    {
      title: 'Value 5',
      description:
        'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.',
      icon: (
        <svg
          width="44"
          height="45"
          viewBox="0 0 44 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.573975" width="44" height="44" rx="9" fill="#F5F8FF" />
          <path
            d="M18 19.574L20.5335 21.0941C21.7287 21.8112 21.8423 23.5002 20.7539 24.3708L18 26.574M23 26.574H28M17 31.574H29C30.6569 31.574 32 30.2309 32 28.574V16.574C32 14.9171 30.6569 13.574 29 13.574H17C15.3432 13.574 14 14.9171 14 16.574V28.574C14 30.2309 15.3432 31.574 17 31.574Z"
            stroke="#252432"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const valueData2 = [
    {
      title: 'Value 6',
      description:
        'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.',
      icon: (
        <svg
          width="44"
          height="45"
          viewBox="0 0 44 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.573975" width="44" height="44" rx="9" fill="#F5F8FF" />
          <path
            d="M19.0101 22.324C19.4243 22.324 19.7601 21.9882 19.7601 21.574C19.7601 21.1598 19.4243 20.824 19.0101 20.824V22.324ZM19.0001 20.824C18.5859 20.824 18.2501 21.1598 18.2501 21.574C18.2501 21.9882 18.5859 22.324 19.0001 22.324V20.824ZM25.01 22.324C25.4243 22.324 25.76 21.9882 25.76 21.574C25.76 21.1598 25.4243 20.824 25.01 20.824V22.324ZM25 20.824C24.5858 20.824 24.25 21.1598 24.25 21.574C24.25 21.9882 24.5858 22.324 25 22.324V20.824ZM16.7782 19.324H27.222V17.824H16.7782V19.324ZM29.4653 21.4014L30.0038 28.4014L31.4994 28.2864L30.9609 21.2864L29.4653 21.4014ZM27.7604 30.824H16.2397V32.324H27.7604V30.824ZM13.9964 28.4014L14.5348 21.4014L13.0392 21.2864L12.5008 28.2864L13.9964 28.4014ZM16.2397 30.824C14.9291 30.824 13.8958 29.7082 13.9964 28.4014L12.5008 28.2864C12.3332 30.4644 14.0553 32.324 16.2397 32.324V30.824ZM30.0038 28.4014C30.1043 29.7082 29.0711 30.824 27.7604 30.824V32.324C29.9448 32.324 31.6669 30.4644 31.4994 28.2864L30.0038 28.4014ZM27.222 19.324C28.3977 19.324 29.3752 20.2292 29.4653 21.4014L30.9609 21.2864C30.8106 19.3326 29.1815 17.824 27.222 17.824V19.324ZM16.7782 17.824C14.8187 17.824 13.1895 19.3326 13.0392 21.2864L14.5348 21.4014C14.625 20.2292 15.6025 19.324 16.7782 19.324V17.824ZM24.25 16.574V18.574H25.75V16.574H24.25ZM19.7501 18.574V16.574H18.2501V18.574H19.7501ZM22 14.324C23.2427 14.324 24.25 15.3313 24.25 16.574H25.75C25.75 14.5029 24.0711 12.824 22 12.824V14.324ZM22 12.824C19.929 12.824 18.2501 14.5029 18.2501 16.574H19.7501C19.7501 15.3313 20.7574 14.324 22 14.324V12.824ZM19.0101 20.824H19.0001V22.324H19.0101V20.824ZM25.01 20.824H25V22.324H25.01V20.824Z"
            fill="#252432"
          />
        </svg>
      ),
      image: '/images/image6c.webp',
    },
  ];

  return (
    <div className="w-full py-16">
      <div className="px-4 md:px-24 xl:px-40">
        <div className="space-y-2 mb-4 flex flex-col">
          <p className="text-lg leading-6 font-semibold text-[#5EB652] tracking-[1.85px]">
            CORE VALUES
          </p>
          <h2 className="md:text-4xl lg:text-5xl text-3xl font-normal md:tracking-tight md:leading-[65px] text-gray-900">
            lorem Ipsom Dolor Sit <br /> Amet. Consectetur Adip...
          </h2>
        </div>

        {/* Grid Layout */}

        <div className="grid grid-cols-1 gap-4 w-full mx-auto xl:grid-cols-[3fr_1fr]">
          {/* Left Section (3/4 width) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {valueData1.map((value, index) => (
              <div
                key={index}
                className={`flex flex-col bg-gray-100 min-h-[200px] rounded-2xl p-6 space-y-2
          ${index === 3 ? 'lg:col-span-2' : ''}
        `}
              >
                <div
                  className={`${index === 3 ? 'grid grid-cols-1 lg:grid-cols-2' : ''} gap-4`}
                >
                  <div className={` flex flex-col gap-2 `}>
                    <span className="">{value.icon}</span>
                    <h3 className="text-lg font-semibold">{value.title}</h3>
                    <p className="text-[15px] font-light text-gray-600 text-justify">
                      {value.description}
                    </p>
                  </div>
                  {value.image && (
                    <Image
                      src={value.image}
                      alt={value.title}
                      height={300}
                      width={300}
                      className=" w-full h-full  rounded-2xl"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Section (1/4 width) */}
          <div className="grid  bg-gray-100 rounded-2xl p-6 space-y-2">
            {valueData2.map((value, index) => (
              <div
                key={index}
                className="grid xl:grid-cols-1 gap-4 lg:grid-cols-2 grid-cols-1 "
              >
                <div className="flex flex-col gap-2 ">
                  <span className="">{value.icon}</span>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="text-[15px] font-light text-gray-600 text-justify">
                    {value.description}
                  </p>
                </div>
                {value.image && (
                  <Image
                    src={value.image}
                    alt={value.title}
                    height={300}
                    width={300}
                    className=" w-full h-full  rounded-2xl"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
