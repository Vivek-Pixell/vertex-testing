"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const headings = [
  "More than 1000 successful cases",
  "10 years experience",
  "24 developer partners",
];

export default function StatsSection() {
  const [currentHeading, setCurrentHeading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeading((prev) => (prev + 1) % headings.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" mt-12 md:mt-16">
      <div className=" mx-auto px-4 md:px-24 lg:px-32 ">
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] xl:grid-cols-[35%_65%] 2xl:grid-cols-[30%_70%] gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6 md:py-6">
            <p className="text-black md:text-xl xl:text-xl 2xl:text-2xl">
              <span className=" text-md font-medium text-black">
                Vertex
                <HorizontalRuleIcon sx={{ paddingBottom: "2px" }} />
              </span>
              Lorem ipsum dolor sit amet consectetur. Ipsum aliquet commodo
              tortor fermentum laoreet pretium.
            </p>
            <p className="text-black text-justify md:text-xl  xl:text-xl 2xl:text-2xl  ">
              Adipiscing fermentum odio quisque ultrices nunc turpis nisi
              vulputate eros. In non volutpat pharetra nulla vitae fermentum.
              Semper tellus feugiat sit pellentesque scelerisque hendrerit
              vulputate quam nunc.
            </p>
            <button className="flex items-center text-[#175177] font-semibold cursor-pointer md:text-xl  xl:text-xl 2xl:text-2xl gap-1">
              <span>
                More about us{" "}
                
              </span>
              <svg
                width="55"
                height="13"
                viewBox="0 0 55 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_179_9)">
                  <path
                    d="M1.4191 6.54758H53.2977M53.2977 6.54758L48.2919 11.5534M53.2977 6.54758L48.2919 1.54175"
                    stroke="#175177"
                    strokeWidth="0.910151"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_179_9">
                    <rect
                      width="53.6989"
                      height="11.832"
                      fill="white"
                      transform="translate(0.508942 0.631592)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>

          {/* Right Column with Animated Headings */}
          <div className="h-[200px] flex flex-col gap-4 items-center justify-center">
            {/* <AnimatePresence mode="wait">
              <motion.h3
                initial={{ opacity: 0.5, y: 70 }}
                animate={{ opacity: 0.9, y: -15 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.8 }}

                
               className=" text-4xl md:text-5xl font-semibold text-black text-center ">
                {
                  headings[
                    (currentHeading - 1 + headings.length) % headings.length
                  ]
                }
              </motion.h3>
            </AnimatePresence> */}

            <AnimatePresence mode="wait">
              <motion.h3
                key={currentHeading}
                initial={{ opacity: 0.5, y: 25 }}
                animate={{ opacity: 1, y: -15 }}
                exit={{ opacity: 0, y: -60 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl xl:text-[2.74rem] 2xl:text-7xl font-semibold text-black text-center drop-shadow-xl"
              >
                {headings[currentHeading]}
              </motion.h3>
            </AnimatePresence>
            {/* <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className=" text-3xl md:text-2xl font-bold text-gray-400 text-center"
            >
              {headings[(currentHeading + 1) % headings.length]}
            </motion.h3> */}
          </div>
        </div>
      </div>
    </section>
  );
}
