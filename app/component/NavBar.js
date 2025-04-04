'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Convert pathname to the correct format
    let page =
      pathname === '/'
        ? 'Home'
        : pathname
            .replace(/^\//, '') // Remove leading slash
            .split(/(?=[A-Z])/) // Handle potential dashes
            .map((word, index) =>
              index === 0
                ? word.toLowerCase()
                : word.charAt(0).toUpperCase() + word.slice(1)
            )
            .join('');

    // Map route names to menu labels
    const tabMap = {
      aboutUs: 'About Us',
      products: 'Products',
      work: 'Work',
      contact: 'Contact',
    };

    setActiveTab(tabMap[page] || 'Home');
  }, [pathname]);

  return (
    <nav className="absolute flex justify-center w-full z-50 bg-transparent transition-all duration-300 p-10 mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        {/* <div className="text-white text-xl font-bold">
          <Image src={logo} width={60} height={60} alt="logo" />
        </div> */}

        {/*logo*/}

        <div
          className=" cursor-pointer h-8 w-8"
          onClick={() => router.push('/')}
        >
          <Image
            src="/images/vertex-logo.webp"
            alt="logo"
            width={45}
            height={45}
            className=""
          />
          {/* <svg
            width="50"
            height="50"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="35.1074" height="35.1074" rx="4" fill="#175177" />
            <path
              d="M11.7598 17.2598L14.2472 20.8198L21.5449 10.3711H16.5711L11.7598 17.2598Z"
              fill="#65B842"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.1961 10.3711H7L10.5987 15.5217L14.1961 10.3711ZM15.515 22.5579L17.5 25.3989L28 10.3711H24.0267L15.515 22.5579Z"
              fill="white"
            />
          </svg> */}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center mx-auto space-x-10 xl:space-x-24">
          {['Home', 'About Us', 'Products', 'Work', 'Contact'].map((item) => {
            return (
              <Link
                key={item}
                href={
                  item === 'Home'
                    ? '/'
                    : `/${item
                        .split(' ') // Split into words
                        .map(
                          (word, index) =>
                            index === 0
                              ? word.toLowerCase() // First word lowercase
                              : word.charAt(0).toUpperCase() +
                                word.slice(1).toLowerCase() // Capitalize following words
                        )
                        .join('')}`
                }
                onClick={() => setActiveTab(item)}
                className={`hover:text-green-600 text-lg transition text-white ${
                  item.toLocaleLowerCase() === activeTab.toLocaleLowerCase()
                    ? ' font-semibold'
                    : ' text-md font-normal'
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}

        <button
          className="md:hidden text-white focus:outline-none ml-auto cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute m-2 rounded-2xl top-16 left-0 right-0 bg-gray-800 opacity-50 text-white text-center flex flex-col py-2 space-y-4 md:hidden`}
      >
        {['Home', 'About Us', 'Products', 'Work', 'Contact'].map((item) => {
          return (
            <Link
              key={item}
              href={
                item === 'Home'
                  ? '/'
                  : `/${item
                      .split(' ') // Split into words
                      .map(
                        (word, index) =>
                          index === 0
                            ? word.toLowerCase() // First word lowercase
                            : word.charAt(0).toUpperCase() +
                              word.slice(1).toLowerCase() // Capitalize following words
                      )
                      .join('')}`
              }
              onClick={() => {
                setActiveTab(item);
                setIsOpen(false);
              }}
              className={`m-4 rounded-2xl	text-white text-md font-normal hover:text-gray-300 transition ${item === activeTab ? ' bg-gray-400' : ''}`}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
