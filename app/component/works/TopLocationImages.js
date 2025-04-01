'use client'; // Needed for Next.js App Router

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const categoryImages = {
  all: [
    { id: 1, src: '/images/image201.webp' },
    { id: 2, src: '/images/image202.webp' },
    { id: 3, src: '/images/image203.webp' },
    { id: 4, src: '/images/image204.webp' },
    { id: 5, src: '/images/image205.webp' },
    { id: 6, src: '/images/image206.webp' },
    { id: 7, src: '/images/image207.webp' },
    { id: 8, src: '/images/image208.webp' },
  ],
  'vm-rd': [
    { id: 9, src: '/images/image207.webp' },
    { id: 10, src: '/images/sinage2.webp' },
    { id: 11, src: '/images/sinage3.webp' },
    { id: 12, src: '/images/sinage4.webp' },
  ],
  digital: [
    { id: 13, src: '/images/image206.webp' },
    { id: 14, src: '/images/sinage2.webp' },
    { id: 15, src: '/images/sinage3.webp' },
    { id: 16, src: '/images/sinage4.webp' },
  ],
  wayfinder: [
    { id: 17, src: '/images/image202.webp' },
    { id: 18, src: '/images/sinage2.webp' },
    { id: 19, src: '/images/sinage3.webp' },
    { id: 20, src: '/images/sinage4.webp' },
  ],
  'street-furniture': [
    { id: 21, src: '/images/image204.webp' },
    { id: 22, src: '/images/sinage2.webp' },
    { id: 23, src: '/images/sinage3.webp' },
    { id: 24, src: '/images/sinage4.webp' },
  ],
  billboard: [
    { id: 25, src: '/images/sinage1.webp' },
    { id: 26, src: '/images/sinage2.webp' },
    { id: 27, src: '/images/sinage3.webp' },
    { id: 28, src: '/images/sinage4.webp' },
  ],
};

// const images = [
//   '/images/image201.webp',
//   '/images/image202.webp',
//   '/images/image203.webp',
//   '/images/image204.webp',
//   '/images/image205.webp',
//   '/images/image206.webp',
//   '/images/image207.webp',
//   '/images/image208.webp',
// ];

const gridSizes = [7, 5, 5, 7, 7, 5, 5, 7];

export default function TopLocationImages({ selectedCategory }) {
  const images = categoryImages[selectedCategory] || categoryImages['all'];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="">
      <Box sx={{ flexGrow: 1, padding: 4 }}>
        <Grid container spacing={3}>
          {images.map((image, index) => (
            <Grid
              key={index}
              item
              xs={12}
              md={gridSizes[index]}
              sx={{ height: '400px', width: '100%', borderRadius: '30px' }}
            >
              <Paper
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'end',
                  borderRadius: '20px',
                  height: '100%',
                  width: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  '&:hover .hover-content': {
                    opacity: 1,
                    transform: 'translateY(0)',
                  },
                }}
              >
                {/* Background Image */}

                <Image
                  src={image.src}
                  alt={`Signage ${index + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  quality={100}
                  priority
                  className="h-auto w-auto hover:scale-110 transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/85  flex justify-center items-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="md:hidden absolute top-4 right-4 text-white"
              onClick={() => setSelectedImage(null)}
            >
              <CloseIcon />
            </button>
            <div
              className="relative  rounded-lg shadow-lg max-w-3xl xl:max-w-6xl xl:h-[85vh] px-4"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              <img
                src={selectedImage}
                alt="Selected"
                className="max-w-full h-full px-4  rounded-lg"
              />
            </div>
          </div>
        )}
      </Box>
    </div>
  );
}
