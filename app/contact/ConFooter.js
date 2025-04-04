'use client';

import { Facebook, LinkedIn, Pinterest } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';
import Image from 'next/image';

const ConFooter = () => {
  return (
    <footer className="bg-[#1A1A1A] flex flex-col text-white  pt-16 px-4 sm:px-6 lg:px-8 rounded-t-[2.5rem]">
      <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* About Section */}
        <div className=" flex gap-8 flex-col md:flex-row">
          <div className="space-y-6 lg:p-16">
            <p className=" text-white leading-7 max-w-sm text-lg md:hidden lg:block">
              It Is A Long Established Fact That A Reader Will Be Distracted
            </p>
            <p className="text-white leading-7 font-normal max-w-sm text-md hidden md:block lg:hidden">
              It Is A Long Established Fact
              <br /> That A Reader Will Be Distracted
            </p>
            <div className="flex justify-center md:justify-start space-x-3">
              <a
                aria-label="Facebook"
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 hover:bg-green-600 hover:text-black transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                aria-label="Twitter (X)"
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 hover:bg-green-600 hover:text-black transition-all duration-300"
              >
                <XIcon className="w-5 h-5 " />
              </a>
              <a
                aria-label="LinkedIn"
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 hover:bg-green-600 hover:text-black transition-all duration-300"
              >
                <LinkedIn className="w-5 h-5 " />
              </a>
              <a
                href="#"
                aria-label="Pinterest"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-800 hover:bg-green-600 hover:text-black transition-all duration-300"
              >
                <Pinterest className="w-5 h-5 " />
              </a>
            </div>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-2xl font-normal leading-8 mb-6 text-center md:text-start">
              About
            </h3>
            <ul className="grid grid-cols-2 justify-center md:justify-start md:grid-cols-1 gap-4 font-normal text-lg">
              {['Leadership', 'Diversity', 'Partners', 'ESG'].map(
                (item, index) => (
                  <li key={index} className=" text-center md:text-start">
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white text-center transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className=" flex flex-col">
          <h3 className="text-2xl font-normal leading-8 mb-6 text-center md:text-start">
            Meet Us
          </h3>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative rounded-3xl group cursor-pointer">
              <a
                href="https://maps.app.goo.gl/rKLaUJNHmA9G3qHk7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/Rectangle 56.webp"
                  alt="map"
                  height={200}
                  width={200}
                  className="w-full h-full rounded-3xl cursor-pointer"
                />
              </a>
              <div className="absolute inset-0 bg-black/40  rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            <div className=" flex flex-col">
              <div>
                <h4>Visit Us</h4>
                <p className="text-gray-300 text-sm">
                  Plot no. 1, Vishwakarma industrial Area, Bhankari, Faridabad,
                  Haryana - 128961
                </p>
              </div>
              <div className="mt-3">
                <h4 className="font-semibold">Email Us</h4>
                <p className="text-gray-300 text-sm">support@powervertex.com</p>
              </div>
              <div className="mt-3">
                <h4 className="font-semibold">Call Us</h4>
                <p className="text-gray-300 text-sm">+971-4-576-6770</p>
                <p className="text-gray-300 text-sm">+971-55-983-7007</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 py-8">
        <div className="flex flex-col gap-8 sm:flex-row justify-evenly items-center space-y-4 sm:space-y-0 text-gray-200 text-sm">
          <p className="hidden md:block">
            © Vertex Lightco Industries 2025 | All Rights Reserved
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              title="View Terms & Conditions"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              title="Read our Privacy Policy"
              className="hover:text-white transition"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              title="Contact us for more information"
              className="hover:text-white transition"
            >
              Contact Us
            </a>
          </div>
          <p className=" md:hidden">
            © Vertex Lightco Industries 2025 | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ConFooter;
