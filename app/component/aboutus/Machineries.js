'use client';
import React, { useState } from 'react';

import Image from 'next/image';
import Grid from '@mui/material/Grid';

const Machineries = () => {
  const items = [
    { id: 1, image: '/images/machine1.webp' },
    { id: 2, image: '/images/machine3.webp' },
    { id: 3, image: '/images/machine4.webp' },
  ];

  const items2 = [
    { id: 1, image: '/images/imageR1.webp' },
    { id: 2, image: '/images/imageR2.webp' },
    { id: 3, image: '/images/imageR4.webp' },
    { id: 3, image: '/images/imageR5.webp' },
  ];

  const items3 = [
    { id: 1, image: '/images/image31.webp' },
    { id: 2, image: '/images/image33.webp' },
    { id: 3, image: '/images/image34.webp' },
  ];
  const items4 = [
    { id: 1, image: '/images/image41.webp' },
    { id: 2, image: '/images/image43.webp' },
    { id: 3, image: '/images/image44.webp' },
  ];

  return (
    <div className="w-full h-full py-16">
      {/* <div className=" flex flex-col gap-6">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={2}>
            <Image
              src={items[0].image}
              alt={`Machine ${items[0].id}`}
              width={400}
              height={400}
              loading="lazy"
              className=" h-[165px] object-cover rounded-r-3xl"
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <div className=" text-[7rem] font-extrabold mx-auto flex items-center justify-center ">
              Crafted
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <Image
              src={items[1].image}
              alt={`Machine ${items[1].id}`}
              width={400}
              height={400}
              loading="lazy"
              className=" h-[165px] object-cover rounded-3xl"
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Image
              src={items[2].image}
              alt={`Machine ${items[2].id}`}
              width={400}
              height={400}
              loading="lazy"
              className=" h-[165px] object-cover rounded-l-3xl"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Image
              src={items2[0].image}
              alt={`Machine ${items2[0].id}`}
              width={400}
              height={400}
              loading="lazy"
              className=" h-[165px] object-cover rounded-r-3xl"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <Image
              src={items2[1].image}
              alt={`Machine ${items2[1].id}`}
              width={400}
              height={400}
              loading="lazy"
              className=" h-[165px] object-cover rounded-3xl"
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <div className=" text-[7rem] font-extrabold mx-auto flex items-center justify-center ">
              By
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <Image
              src={items2[2].image}
              alt={`Machine ${items2[2].id}`}
              width={400}
              height={400}
              loading="lazy"
              className=" h-[165px] object-cover rounded-3xl"
            />
          </Grid>
          <Grid item xs={12} md={1}>
            <Image
              src={items2[3].image}
              alt={`Machine ${items2[3].id}`}
              width={400}
              height={400}
              loading="lazy"
              className=" h-[165px] object-cover rounded-l-3xl"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <Image
              src={items3[0].image}
              alt={`Machine ${items2[0].id}`}
              width={400}
              height={400}
              loading="lazy"
              className=" h-[165px] object-cover rounded-r-3xl"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <div className=" text-[7rem] font-extrabold mx-auto flex items-center justify-center ">
              The
            </div>
          </Grid>
          <Grid item xs={12} md={3.5}>
            <Image
              src={items3[1].image}
              alt={`Machine ${items3[1].id}`}
              width={400}
              height={400}
              loading="lazy"
              className=" h-[165px] object-cover rounded-3xl"
            />
          </Grid>

          <Grid item xs={12} md={2.5}>
            <Image
              src={items3[2].image}
              alt={`Machine ${items3[2].id}`}
              width={400}
              height={400}
              loading="lazy"
              className=" h-[165px] object-cover rounded-l-3xl"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} md={1.5}>
            <Image
              src={items4[0].image}
              alt={`Machine ${items4[0].id}`}
              width={400}
              height={400}
              loading="lazy"
              className=" h-[165px] object-cover rounded-r-3xl"
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <Image
              src={items4[1].image}
              alt={`Machine ${items4[1].id}`}
              width={400}
              height={400}
              loading="lazy"
              className=" h-[165px] object-cover rounded-3xl"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="text-[7rem] font-extrabold mx-auto flex items-center justify-center ">
              Visionaries
            </div>
          </Grid>
          <Grid item xs={12} md={1.5}>
            <Image
              src={items4[2].image}
              alt={`Machine ${items4[2].id}`}
              width={400}
              height={400}
              loading="lazy"
              className=" h-[165px] object-cover rounded-l-3xl"
            />
          </Grid>
        </Grid>
      </div> */}
      <div>
        <Image
          src="/images/team.svg"
          alt="team"
          width={400}
          height={400}
          loading="lazy"
          className=" h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Machineries;
