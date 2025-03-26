// 'use client';

// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import React from 'react';

// const images = [
//   '/images/sinage1.webp',
//   '/images/sinage2.webp',
//   '/images/sinage3.webp',
//   '/images/sinage4.webp',
//   '/images/sinage2.webp',
// ];

// const InfiniteImageScroller = () => {
//   return (
//     <div className="relative overflow-hidden w-full bg-black py-6">
//       <motion.div
//         className="flex space-x-6"
//         animate={{
//           x: ['0%', '-100%'], // Move from 0% to -100% (full width)
//         }}
//         transition={{
//           repeat: Infinity, // Infinite looping
//           duration: 10, // Adjust speed (lower is faster)
//           ease: 'linear', // Smooth continuous motion
//         }}
//       >
//         {/* Render images twice for seamless looping */}
//         {[...images, ...images, ...images, ...images].map((src, index) => (
//           <div key={index} className="flex-shrink-0">
//             <Image
//               src={src}
//               alt={`Sign ${index + 1}`}
//               width={150}
//               height={150}
//               className="object-cover"
//             />
//           </div>
//         ))}
//       </motion.div>
//     </div>
//   );
// };

// export default InfiniteImageScroller;

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

const images = [
  '/images/sinage1.webp',
  '/images/sinage4.webp',
  '/images/sinage1.webp',
  '/images/sinage4.webp',
];

const InfiniteImageScroller = () => {
  return (
    <div className="relative overflow-hidden w-full  py-6">
      <motion.div
        className="flex space-x-6"
        animate={{
          x: ['0%', '-100%'], // Move from 0% to -100% (full width)
        }}
        transition={{
          repeat: Infinity, // Infinite looping
          duration: 10, // Adjust speed (lower is faster)
          ease: 'linear', // Smooth continuous motion
        }}
      >
        {/* Render images multiple times for seamless looping */}
        {[...images, ...images, ...images, ...images, ...images].map(
          (src, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex-shrink-0 mx-4 ${isEven ? 'h-[250px] w-[250px]' : 'h-[200px] w-[150px]'} my-auto`}
              >
                <Image
                  src={src}
                  alt={`Sign ${index + 1}`}
                  width={isEven ? 220 : 150}
                  height={isEven ? 250 : 170}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
            );
          }
        )}
      </motion.div>
    </div>
  );
};

export default InfiniteImageScroller;
