'use client';

import Image from 'next/image';

const services = [
  {
    title: 'OOH Media Assets',
    image: '/images/imagegrid/Area01.webp',
    description: 'Strategic placement of outdoor advertising media',
  },
  {
    title: 'Wayfinding Signages',
    image: '/images/imagegrid/Area02.webp',
    description: 'Intuitive navigation systems for urban spaces',
  },
  {
    title: 'Digital Screens',
    image: '/images/imagegrid/Area03.webp',
    description: 'High-impact digital display solutions',
  },

  {
    title: 'Urban Landing',
    image: '/images/imagegrid/Area04.webp',
    description: 'Custom-made architectural elements',
  },
  {
    title: 'Bespoke Fabrication',
    image: '/images/imagegrid/Area05.webp',
    description: 'Custom-made architectural elements',
  },
];

export default function ImageGrid() {
  return (
    <div className="w-full py-12">
      <div className="px-4 md:px-24 xl:px-40 ">
        <div className="space-y-2 flex flex-col ">
          <p className=" text-lg leading-6 font-semibold text-[#5EB652] tracking-[1.85px]">
            TESTIMONIALS
          </p>
          <h2 className=" md:text-4xl lg:text-5xl  text-3xl font-normal md:tracking-tight md:leading-[65px] text-gray-900">
            What We Offer To Our <br /> Clients
          </h2>
        </div>
        <div className=" grid grid-cols-1 w-full justify-center py-8 lg:grid-cols-5 mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group relative cursor-pointer ">
              <div className="aspect-[2/3]   overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  height={400}
                  width={400}
                  className=" inset-0 h-full w-full object-cover transition-all duration-300
                    filter grayscale group-hover:grayscale-0 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:opacity-0 transition-all duration-500" />
              </div>
              <div className="absolute bottom-0 left-0 right-0  p-4 transform group-hover:scale-110 transition-transform duration-500">
                <h3 className="text-sm md:text-lg lg:text-[12px] xl:text-lg  font-medium text-white">
                  {service.title}
                </h3>
                {/* <p className="mt-2 text-sm text-gray-300 hidden group-hover:block">
                  {service.description}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
