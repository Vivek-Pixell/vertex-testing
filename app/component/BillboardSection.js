"use client";

import Image from "next/image";
import billboard from "./billboard.webp"; // ✅ Image import

import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';


export default function BillboardSection() {
  return (
    <section>
      <div className=" px-4 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-24 items-center">
          {/* Left Column - Image */}
          <div className="relative rounded-3xl lg:p-8 ">
            <Image
              src={billboard} // ✅ Uses Next.js Image for optimization
              alt="Digital Billboard"
              className="w-full object-cover rounded-2xl"
            />
          </div>

          {/* Right Column - Content */}
          <div className="">
            <div>
              <h4 className="text-md leading-[70px] font-medium text-[#5EB652] tracking-[0.75px] uppercase">
                Why Choose Us
              </h4>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl leading-15 font-normal tracking-tight text-gray-900">
              The Digi Cybsecure The Transfor Billbord
            </h2>

            <p className="text-gray-500 font-light py-6 text-justify">
              Billboard advertising is a powerful marketing tool that he
              businesses gain visibility and reach their target audience
              Billboard advertising is a powerful marketing tool that he
              businesses Billboard advertising is a powerful marketing tool that
              he businesses gain visibility and reach their target audience
              Billboard advertising is a powerful marketing tool that he
              businesses
            </p>

            <button className="flex justify-center lg:justify-start items-center border gap-2 p-6 transition-all duration-400 py-3 rounded-full text-black hover:border-none hover:bg-[#175177] hover:text-white cursor-pointer">
              <span className=" text-md font-normal">About Vertex <TrendingFlatIcon/></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
