'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import Grid from '@mui/material/Grid';
const headings = [
  'More than 1000 successful cases',
  '10 years experience',
  '24 developer partners',
];

export default function StatsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headings.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className=" my-12 md:my-20">
      <div className=" mx-auto px-4 xl:px-40 md:px-24 xl:max-h-[250px]">
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <div className=" text-black xl:text-lg tracking-wide	">
              <p>
                <span className=" text-md font-medium text-black">
                  Vertex
                  <HorizontalRuleIcon sx={{ paddingBottom: '2px' }} />
                </span>
                Lorem ipsum dolor sit amet consectetur. Ipsum aliquet commodo
                tortor fermentum laoreet pretium.
              </p>
              <p className="my-2">
                Adipiscing fermentum odio quisque ultrices nunc turpis nisi
                vulputate eros. In non volutpat pharetra nulla vitae fermentum.
                Semper tellus feugiat sit pellentesque scelerisque hendrerit
                vulputate quam nunc.
              </p>
              <button className="flex items-center text-[#175177]  cursor-pointer my-8 ">
                <span className="mr-4 text-sm font-medium">More about us </span>
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
          </Grid>
          <Grid item xs={12} md={7} className=" max-h-[275px]">
            {/* Top Heading (Static) */}
            <div className="flex flex-col gap-4 overflow-hidden">
              {/* Top Heading (Faded) */}
              <motion.h3
                key={`top-${currentIndex}`}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl  font-semibold text-gray-400 text-center my-2 text-transparent bg-clip-text bg-gradient-to-b from-gray-300 to-gray-700"
              >
                {
                  headings[
                    (currentIndex - 1 + headings.length) % headings.length
                  ]
                }
              </motion.h3>

              {/* Middle Heading (Main, Moves) */}
              <AnimatePresence mode="wait">
                <motion.h3
                  key={`middle-${currentIndex}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-4xl xl:text-5xl font-bold text-black text-center drop-shadow-xl my-4"
                >
                  {headings[currentIndex]}
                </motion.h3>
              </AnimatePresence>

              {/* Bottom Heading (Faded) */}
              <motion.h3
                key={`bottom-${currentIndex}`}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl  font-semibold text-gray-400 text-center my-2 text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-300"
              >
                {headings[(currentIndex + 1) % headings.length]}
              </motion.h3>
            </div>
          </Grid>
        </Grid>
      </div>
    </section>
  );
}
