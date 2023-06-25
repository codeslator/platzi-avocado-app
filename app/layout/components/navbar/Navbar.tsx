'use client'
import { FC, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Logo from '../../../../public/assets/Iso_Color_White.svg'

const routes = [
  {
    name: 'Home',
    to: '/',
  },
  {
    name: 'About',
    to: '/about',
  },
]

const Navbar: FC = () => {
  const currentRoute = usePathname();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  }
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <Image src={Logo} className="h-8 mr-3" width={36} height={36} alt="Codeslator Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Codeslator Store</span>
          </a>
          <div className="flex md:order-2">
            <button type="button" className="text-white bg-[#45A688] hover:bg-[#30745f] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-[#45A688] dark:hover:bg-[#6ab79f] dark:focus:ring-[#30745f]">Get started</button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className={`items-center justify-between ${!openMenu ? 'hidden' : 'inline'} w-full md:flex md:w-auto md:order-1`} id="navbar-cta">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {routes.map(({ name, to }) => (
                <li key={to}>
                  <Link
                  href={to}
                    className={`block py-2 pl-3 pr-4 ${currentRoute === to ? 'text-white bg-[#45A688] rounded md:bg-transparent md:text-[#45A688] md:p-0 md:dark:text-[#6ab79f]' : 'text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#45A688] md:p-0 md:dark:hover:text-[#6ab79f] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'}`}
                    aria-current="page"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;