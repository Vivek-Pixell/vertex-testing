'use client';
import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import NavBar from '../../component/NavBar';
import { useRouter } from 'next/navigation';
import ImageSignage from '../../component/ImageSignage';
import TopLocationImages from '../../component/works/TopLocationImages';
import Footer from '../../component/Footer';

const categories = [
  { name: 'All', slug: 'all' },
  { name: 'VM & RD', slug: 'vm-rd' },
  { name: 'Digital', slug: 'digital' },
  { name: 'Wayfinder', slug: 'wayfinder' },
  { name: 'Street Furniture', slug: 'street-furniture' },
  { name: 'Billboard', slug: 'billboard' },
];

const WorkDetail = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug;

  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryClick = (categorySlug) => {
    setActiveCategory(categorySlug);
    // Optionally, update URL for SEO using router.push(`/work/${params.slug}?category=${categorySlug}`)
  };

  return (
    <div className="">
      <div className=" flex w-full">
        <div className=" relative h-[17vh]  w-full">
          <Image
            src="/images/image 73.webp"
            alt="earth background"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="w-full py-16">
        <div className="px-4 md:px-24 xl:px-40">
          <div className=" sticky top-0 z-10 bg-white pb-4">
            <div className=" flex gap-4 pt-6 items-center">
              <Image
                src="/icons/arrow_back.svg"
                alt="arrowbackicon"
                height={30}
                width={30}
                className=" cursor-pointer"
                onClick={() => router.back()}
              />
              <h1 className=" text-4xl font-semibold">
                {slug
                  .replace(/-/g, ' ')
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </h1>
            </div>

            <div className="mt-4 flex text-sm md:text-lg md:justify-center overflow-scroll md:overflow-visible mx-auto">
              {categories.map((category, index) => (
                <div
                  key={category.slug}
                  className="flex items-center"
                  style={
                    index !== categories.length - 1
                      ? { borderRight: '2px solid gray' }
                      : {}
                  }
                >
                  <button
                    onClick={() => handleCategoryClick(category.slug)}
                    className={` hover:text-green-600 ${
                      activeCategory === category.slug
                        ? 'font-semibold text-black'
                        : 'text-gray-400'
                    } cursor-pointer px-4`}
                  >
                    {category.name}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <TopLocationImages selectedCategory={activeCategory} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WorkDetail;
