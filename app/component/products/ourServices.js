'use client';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ourServices = () => {
  return (
    <section className=" my-16 md:my-20">
      <div className=" mx-auto px-4 md:px-24 xl:px-40 ">
        <h4 className=" text-lg leading-6 font-semibold text-[#5EB652] tracking-[1.85px] uppercase mb-4">
          Our Services
        </h4>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl md:text-4xl xl:text-[55px] xl:leading-15 font-semibold xl:tracking-tight text-gray-900">
              Where The Beat Meets business Billboard
            </h3>
          </div>
          <div>
            <div className=" ">
              <p className=" text-gray-600 mb-6">
                Billboard advertising is a powerful marketing too
                businesBillboard advertising is a powerful marketing tool that
                he businesses gain visibility and reach their target audienceses
              </p>
              <button className="flex justify-center lg:justify-start items-center gap-2 p-6 transition-all duration-400 py-3 rounded-full border border-[#175177] text-[#175177] hover:border-none hover:bg-[#175177] hover:text-white cursor-pointer">
                <span className="  text-lg font-medium">
                  Contact Us <ArrowForwardIcon fontSize="inherit" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ourServices;
