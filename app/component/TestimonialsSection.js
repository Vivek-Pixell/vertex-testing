'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const testimonials = [
  {
    id: 1,
    name: `John Pearson`,
    position: `CEO of DHL`,
    company: `DHL`,
    quote: `"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra congue orci aliquam vehicula. Curabitur faucibus ante eu ullamcorper vulputate. Ut metus eros, tempor vitae sem id, convallis rhoncus diam. Aliquam viverra congue orci aliquam vehicula."`,
    image: `/images/dgl-logo.png`,
    videoThumbnail: `https://media.istockphoto.com/id/121199853/photo/closeup-of-guy-working-on-a-laptop-indoor.webp?a=1&b=1&s=612x612&w=0&k=20&c=1cFqSPIjH981E69lJFNrRiqUDDsOqHfRdpW2CKu9sSc=`,
  },
  {
    id: 2,
    name: `Jane Smith`,
    position: `CMO of FedEx`,
    company: `FedEx`,
    quote: `"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer facilisis felis non dolor suscipit, a facilisis justo fringilla. Nam sed tincidunt sapien. Aliquam erat volutpat."`,
    image: `data:image/jpeg;base64,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`,
    videoThumbnail: `https://media.istockphoto.com/id/169883022/photo/smart-business-man-using-laptop-while-looking-at-you.jpg?s=612x612&w=0&k=20&c=5FpJgEjpNzrNxRgjj69zdWEBco2UIAsxsP2ffodqzhk=`,
  },
  {
    id: 3,
    name: `Michael Johnson`,
    position: `COO of UPS`,
    company: `UPS`,
    quote: `"Proin ullamcorper nisl nec ante hendrerit, at tincidunt ex sodales. Suspendisse ac justo eu augue luctus imperdiet. Sed vel ex tristique, suscipit nunc non, sagittis libero. Duis fermentum velit ut augue maximus hendrerit."`,
    image: `data:image/png;base64,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`,
    videoThumbnail: `https://media.istockphoto.com/id/171402594/photo/laptop-at-home-man-using-laptop.jpg?s=612x612&w=0&k=20&c=KxIUFlXSp3KgdzLTTbeYByGg79EuXRqRNCoes8dxnII=`,
  },
];

const TestimonialsSection = () => {
  console.log('image ' + testimonials[0].image);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className=" py-8 px-4 md:px-24 xl:px-40">
      <div className="container">
        <div className=" lg:w-1/2 mb-6">
          <div className="mb-6">
            <h4 className=" text-lg leading-6 font-semibold text-[#5EB652] tracking-[1.85px]">
              TESTIMONIALS
            </h4>
          </div>
          <div>
            <h2 className=" xl:text-5xl   text-3xl xl:max-w-[600px] font-normal tracking-tight xl:leading-[65px] text-gray-900">
              What Our Customers Speak About Us
            </h2>
          </div>
        </div>

        <div className="flex flex-col mx-auto lg:flex-row gap-10 ">
          {/* Video thumbnail with play button */}
          <div className="w-full lg:w-1/2 relative rounded-lg overflow-hidden shadow-lg max-w-[500px] ">
            <div className="aspect-w-16 aspect-h-9 bg-gray-200">
              <img
                src={currentTestimonial.videoThumbnail}
                alt={`Video thumbnail for ${currentTestimonial.name}`}
                className="object-cover w-full max-h-[300px]"
              />
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-[#175177] hover:bg-blue-800 text-white rounded-lg p-2 px-6 transition-all duration-300 transform hover:scale-110 cursor-pointer">
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
                </button>
              </div> */}
            </div>
          </div>
          {/* Testimonial content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <blockquote className="text-lg font-light italic text-black mb-6">
              {currentTestimonial.quote}
            </blockquote>

            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
                  {currentTestimonial?.company ? (
                    <Image
                      src={currentTestimonial?.image}
                      alt={`${currentTestimonial.name}'s company logo`}
                      width={40}
                      height={40}
                      className=" object-cover"
                      priority
                    />
                  ) : (
                    <span className="font-bold text-lg">
                      {currentTestimonial.company}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <p className="font-bold text-[#175177] mb-1">
                  {currentTestimonial.name}
                </p>
                <p className="text-gray-500">{currentTestimonial.position}</p>
              </div>
            </div>
            <div className="flex justify-end mt-auto self-end  gap-3">
              <button
                onClick={prevTestimonial}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                  currentIndex === 0
                    ? 'border-gray-300 text-gray-400 cursor-not-allowed' // Disabled state
                    : 'border-[#175177] hover:bg-gray-400 cursor-pointer'
                }`}
                aria-label="Previous testimonial"
                disabled={currentIndex === 0}
              >
                <ArrowBackIcon
                  fontSize="small"
                  className={
                    currentIndex === 0 ? 'text-gray-400' : 'text-[#175177]'
                  }
                />
              </button>
              <button
                onClick={nextTestimonial}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
                  currentIndex === testimonials.length - 1
                    ? 'border-gray-300 text-gray-400 cursor-not-allowed' // Disabled state
                    : 'border-[#175177] hover:bg-gray-400 cursor-pointer'
                }`}
                aria-label="Next testimonial"
                disabled={currentIndex === testimonials.length - 1}
              >
                <ArrowForwardIcon
                  fontSize="small"
                  className={
                    currentIndex === testimonials.length - 1
                      ? 'text-gray-400'
                      : 'text-[#175177]'
                  }
                />
              </button>
            </div>
          </div>
        </div>

        {/* Navigation buttons */}
      </div>
    </section>
  );
};

export default TestimonialsSection;
