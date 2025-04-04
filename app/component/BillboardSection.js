'use client';

import Image from 'next/image';
import billboard from './billboard.webp'; // ✅ Image import

import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
export default function BillboardSection() {
  return (
    <section>
      <div className="py-12 md:py-0 px-4 md:px-24 xl:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-24 items-center">
          {/* Left Column - Image */}
          <div className="relative rounded-3xl lg:p-8 ">
            <Image
              src={billboard} // ✅ Uses Next.js Image for optimization
              alt="Digital Billboard showcasing Vertex's advertising solutions"
              className="w-full  object-contain xl:object-cover rounded-2xl"
              priority
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

            <p className="text-gray-500 text-sm py-4 mb-2 md:mb-8 max-w-[550px]">
              Billboard advertising is a powerful marketing tool that he
              businesses gain visibility and reach their target audience
              Billboard advertising is a powerful marketing tool that he
              businesses Billboard advertising is a powerful marketing tool that
              he businesses gain visibility and reach their target audience
              Billboard advertising is a powerful marketing tool that he
              businesses
            </p>
            <Link href="/aboutUs">
              <button className="flex justify-center lg:justify-start items-center border gap-2 p-6 transition-all duration-400 py-3 rounded-full text-black hover:border-none hover:bg-[#175177] hover:text-white cursor-pointer">
                <span className=" text-md font-normal">
                  About Vertex <ArrowForwardIcon fontSize="inherit" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
