'use client';
import React from 'react';
import ImageSignage from '../ImageSignage';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

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

const gridSizes = [4, 8, 8, 4, 4, 8, 8, 4]; // Define alternating sizes

const TopWorks = () => {
  return (
    <div className="w-full py-12">
      <div className="px-4 md:px-24 lg:px-40 ">
        <div className="space-y-2 flex flex-col ">
          <p className=" text-lg leading-6 font-semibold text-[#5EB652] tracking-[1.85px]">
            OUR TOP WORKS
          </p>
          <h2 className=" md:text-4xl lg:text-5xl  text-3xl mb-4 font-normal md:tracking-tight md:leading-[55px] text-gray-900">
            Lorem Ipsum Dolor Sit <br /> Amet Consectetur
          </h2>
        </div>
        <div className="">
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
                      src={src}
                      alt={`Signage ${index + 1}`}
                      fill
                      style={{ objectFit: 'cover' }}
                      quality={100}
                      priority
                      className=" h-auto w-auto"
                    />

                    {/* Hidden White Block - Shows on Hover */}
                    <Box
                      className="hover-content "
                      sx={{
                        justifyContent: 'center',
                        borderRadius: '14px',
                        width: '98%',
                        backgroundColor: 'rgba(255, 255, 255, 1)',
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
    </div>
  );
};

export default TopWorks;
