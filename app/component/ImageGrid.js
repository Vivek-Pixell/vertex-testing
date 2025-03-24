'use client';

const services = [
  {
    title: 'OOH Media Assets',
    image:
      'https://images.unsplash.com/photo-1513061379709-ef0cd1695189?q=80&w=1000',
    description: 'Strategic placement of outdoor advertising media',
  },
  {
    title: 'Wayfinding Signages',
    image:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000',
    description: 'Intuitive navigation systems for urban spaces',
  },
  {
    title: 'Digital Screens',
    image:
      'https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVpbGRpbmd8ZW58MHx8MHx8fDA%3D',
    description: 'High-impact digital display solutions',
  },

  {
    title: 'Urban Landing',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Custom-made architectural elements',
  },
  {
    title: 'Bespoke Fabrication',
    image:
      'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1000',
    description: 'Custom-made architectural elements',
  },
];

export default function ImageGrid() {
  return (
    <div className="w-full py-12">
      <div className="px-4 md:px-40 ">
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
                <img
                  src={service.image}
                  alt={service.title}
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
