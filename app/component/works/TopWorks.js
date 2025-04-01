'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';

const images = [
  '/images/sinage1.webp',
  '/images/sinage2.webp',
  '/images/sinage3.webp',
  '/images/sinage4.webp',
  '/images/sinage1.webp',
  '/images/sinage2.webp',
  '/images/sinage3.webp',
  '/images/sinage4.webp',
];

const gridSizes = [5, 7, 7, 5, 5, 7, 7, 5];

const TopWorks = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full py-16">
      <div className="px-4 md:px-24 lg:px-40 ">
        <div className="space-y-2 flex flex-col">
          <p className="text-lg leading-6 font-semibold text-[#5EB652] tracking-[1.85px]">
            OUR TOP WORKS
          </p>
          <h2 className="md:text-4xl lg:text-5xl text-3xl mb-4 font-normal md:tracking-tight md:leading-[55px] text-gray-900">
            Lorem Ipsum Dolor Sit <br /> Amet Consectetur
          </h2>
        </div>
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {images.map((src, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  md={gridSizes[index]}
                  sx={{ height: '320px', width: '100%', borderRadius: '30px' }}
                >
                  <Paper
                    className=" cursor-pointer"
                    onClick={() => setSelectedImage(src)}
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
                      '&:hover .overlay': {
                        opacity: 1,
                      },
                    }}
                  >
                    {/* Background Image */}
                    <Image
                      src={src}
                      alt={`Signage ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      quality={100}
                      priority
                    />

                    {/* Dark Overlay */}
                    <Box
                      className="overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay instead of blur
                        opacity: 0,
                        transition: 'opacity 0.4s ease-in-out',
                      }}
                    />

                    {/* Hover Content */}
                    <Box
                      className="hover-content"
                      sx={{
                        justifyContent: 'center',
                        borderRadius: '14px',
                        width: '90%',
                        backgroundColor: 'rgba(255, 255, 255, 0.9)', // Solid white background
                        padding: 2,
                        margin: 2,
                        opacity: 0,
                        transform: 'translateY(100%)',
                        transition: 'all 0.6s ease-in-out',
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'black',
                          paddingBottom: '10px',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        Transform Billboard
                        <span className="flex-1 border-b ml-1 border-black max-w-[40px]"></span>
                      </Typography>
                      <Typography fontWeight="bold">
                        Outdoor The Most Advertising
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        </div>
      </div>
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
    </div>
  );
};

export default TopWorks;
