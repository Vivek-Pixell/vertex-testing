'use client';
import React from 'react';
import Grid from '@mui/material/Grid';

const AboutUsPage = () => {
  const stat = [
    { value: '99%', content: 'Customer Satisfaction' },
    { value: '720+', content: 'Projects Completed' },
    { value: '12092', content: 'Advertising Panels' },
    { value: '200+', content: 'Workforce member' },
  ];

  return (
    <section className=" my-12 md:my-20">
      <div className=" mx-auto px-4 md:px-24 lg:px-40 ">
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <div>
              <h4 className=" text-lg leading-6 font-semibold text-[#5EB652] tracking-[1.85px] uppercase">
                About Us
              </h4>
              <p className=" text-black text-lg py-4 mb-8 max-w-[550px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                quis finibus urna, vel vestibulum neque. Duis dictum, tellus
                rutrum mollis egestas, massa leo vehicula odio, sit amet tempus
                eros mauris vel lectus. Quisque lorem felis, volutpat in arcu
                at, elementum tristique libero. Proin sollicitudin quis neque
                sed consectetur.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              {stat.map((item, index) => (
                <Grid key={index} item xs={6} md={6} lg={6}>
                  <div className=" p-4 xl:min-w-[200px] border xl:py-8 justify-center flex flex-col border-gray-300 rounded-2xl">
                    <div className=" text-2xl lg:text-4xl text-center xl:text-6xl">
                      {item.value}
                    </div>
                    <div className=" text-center">{item.content}</div>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default AboutUsPage;
