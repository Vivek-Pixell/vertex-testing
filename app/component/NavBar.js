'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('');
  const pathname = usePathname();

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

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center mx-auto space-x-24">
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
                className={`hover:text-green-600 transition ${
                  item.toLocaleLowerCase() === activeTab.toLocaleLowerCase()
                    ? 'text-lg font-semibold text-black bg-white rounded-lg px-3'
                    : 'text-white text-md font-normal'
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
        } absolute top-16 left-0 right-0 bg-gray-800 opacity-50 text-white text-center flex flex-col py-6 space-y-6 md:hidden`}
      >
        {['Home', 'About Us', 'Work', 'Products'].map((item) => (
          <Link
            key={item}
            href={
              item === 'Home'
                ? '/'
                : `/${item.toLowerCase().replace(/\s+/g, '-')}`
            }
            className="text-white text-md font-normal hover:text-gray-300 transition"
          >
            {item}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
