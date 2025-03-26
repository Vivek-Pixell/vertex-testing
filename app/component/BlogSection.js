'use client';
import userIcon from '../../public/icons/user.svg';
import comnt from '../../public/icons/comnt.svg';

import { CalendarMonth, ArrowForward } from '@mui/icons-material';

const blogPosts = [
  {
    date: 'May 19, 2023',
    author: 'Mesbah',
    comments: 'Comments (05)',
    title: 'Innovate  Create  Inspire  your brand to life in ',
    imageUrl:
      'https://images.unsplash.com/photo-1712847333437-f9386beb83e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1bWFufGVufDB8fDB8fHww',
  },
  {
    date: 'May 19, 2023',
    author: 'Mesbah',
    comments: 'Comments (05)',
    title: 'Services does your billboard company offer',
    imageUrl:
      'https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2069',
  },
  {
    date: 'May 19, 2023',
    author: 'Mesbah',
    comments: 'Comments (05)',
    title: 'Types of billboards do you have available',
    imageUrl:
      'https://images.unsplash.com/photo-1513061379709-ef0cd1695189?q=80&w=2000',
  },
];

export default function BlogSection() {
  return (
    <section className="py-12 ">
      <div className=" px-4 md:px-24 lg:px-40 ">
        {/* Section Header */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6  mb-4">
          <div className=" space-y-3">
            <h3 className=" text-lg leading-6 font-semibold text-[#5EB652] tracking-[1.85px]">
              LATEST BLOG
            </h3>
            <h2 className=" md:text-3xl xl:text-5xl text-3xl font-normal tracking-tight xl:leading-[65px] text-gray-900">
              Where The Beat Meets Business Billboard
            </h2>
          </div>
          <div className=" flex items-center text-gray-500 md:pt-6">
            <p>
              Billboard advertising is a powerful marketing too businesBillboard
              advertising is a powerful marketing tool that he businesses gain
              visibility and reach their target audienceses
            </p>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 p-4">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className=" rounded-3xl overflow-hidden shadow-lg group bg-gray-100"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Blog Content */}
              <div className="p-8">
                {/* Meta Info */}
                <div className=" relative flex items-center justify-between mb-6 text-sm text-gray-600">
                  <div className="flex items-center space-x-6">
                    <div className=" flex gap-1 items-center cursor-pointer">
                      <img
                        src={userIcon.src}
                        alt="UserIcon"
                        className="w-4 h-4"
                      />
                      <span className=" text-[16px] text-black">
                        {post.author}
                      </span>
                    </div>
                    <div className="flex space-x-2 items-center cursor-pointer">
                      <img src={comnt.src} alt="UserIcon" className="w-4 h-4" />
                      <span className=" text-[16px] text-black">
                        {post.comments}
                      </span>
                    </div>
                  </div>
                  <div className=" bg-[#175177]  rounded-3xl absolute -right-5 -top-12 flex items-center space-x-2 text-white px-4 py-1 cursor-pointer">
                    <CalendarMonth className="w-4 h-4 p-1 text-yellow-200" />
                    <span className=" text-[16px] font-light font-roboto">
                      {post.date}
                    </span>
                  </div>
                </div>

                {/* Blog Title */}
                <h3 className="text-2xl font-medium text-black mb-6">
                  {post.title}
                </h3>

                {/* Read More Button */}
                <button className="inline-flex items-center text-black hover:text-gray-700 transition-all cursor-pointer">
                  <span className="mr-2 font-medium py-2 px-4 rounded-3xl border border-gray-300 bg-white">
                    Read More <ArrowForward sx={{ width: 15, height: 15 }} />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
