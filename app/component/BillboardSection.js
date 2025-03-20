'use client';

import Image from 'next/image';
import billboard from './billboard.webp'; // ✅ Image import

import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function BillboardSection() {
  return (
    <section>
      <div className=" px-4 md:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-24 items-center">
          {/* Left Column - Image */}
          <div className="relative rounded-3xl lg:p-8 ">
            <Image
              src={billboard} // ✅ Uses Next.js Image for optimization
              alt="Digital Billboard"
              className="w-full  object-contain xl:object-cover rounded-2xl"
            />
          </div>

          {/* Right Column - Content */}
          <div className="">
            <div>
              <h4 className=" text-lg leading-6 font-semibold text-[#5EB652] tracking-[1.85px] uppercase">
                Why Choose Us
              </h4>
            </div>

            <h2 className="text-3xl md:text-4xl xl:text-5xl xl:leading-15 font-normal xl:tracking-tight text-gray-900">
              The Digi Cybsecure The Transfor Billbord
            </h2>

            <p className="text-gray-500 font-light py-4 mb-8 max-w-[550px]">
              Billboard advertising is a powerful marketing tool that he
              businesses gain visibility and reach their target audience
              Billboard advertising is a powerful marketing tool that he
              businesses Billboard advertising is a powerful marketing tool that
              he businesses gain visibility and reach their target audience
              Billboard advertising is a powerful marketing tool that he
              businesses
            </p>

            <button className="flex justify-center lg:justify-start items-center border gap-2 p-6 transition-all duration-400 py-3 rounded-full text-black hover:border-none hover:bg-[#175177] hover:text-white cursor-pointer">
              <span className=" text-md font-normal">
                About Vertex <ArrowForwardIcon fontSize="inherit" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
