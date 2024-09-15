import React from 'react';
import { Link } from 'react-router-dom';

import { IoIosArrowDown } from 'react-icons/io';
import { PiCalculatorDuotone } from 'react-icons/pi';

import RoutesLogo from '../assets/imgs/routeslogo.svg';

import Pricing1 from '../assets/imgs/menu-pricing1.svg';
import Pricing2 from '../assets/imgs/menu-pricing2.svg';
import Pricing3 from '../assets/imgs/menu-pricing3.svg';

const navItems = [
  { label: 'Pricing', link: '/' },
  {
    label: 'Capabilities',
    link: '/',
    subLinks: [{ label: 'Brand', link: '/', iconImg: Pricing1 }],
  },
];

export const Navbar = () => {
  return (
    <div className="mx-auto bg-white rounded-full flex w-full items-center justify-between px-10 py-8 text-lg z-50">
      <section className="flex items-center gap-5">
        <Link to="/" target="_blank">
          <img src={RoutesLogo} className="lg:w-[150px]" width={120} alt="" />
        </Link>
      </section>

      <section className="flex items-center gap-5">
        <Link to="/" className="relative group px-2 py-3 transition-all">
          <p className="flex cursor-pointer items-center gap-2 text-black group-hover:text-primary font-semibold monaSemibold">
            <span className="lg:text-xl">Pricing</span>
          </p>
        </Link>

        <Link to="/" className="relative group px-2 py-3 transition-all">
          <p className="flex cursor-pointer items-center gap-2 text-black group-hover:text-primary font-semibold monaSemibold">
            <span className="lg:text-xl">Capabilities</span>
            <IoIosArrowDown className="transition-all group-hover:rotate-0" />
          </p>

          <div className="absolute right-0 top-10 hidden w-auto gap-1 rounded-lg bg-white p-3 shadow-md transition-all group-hover:flex">
            <Link
              to="/"
              className="flex flex-col cursor-pointer items-center p-2 text-black hover:text-primary"
            >
              <img
                src={Pricing1}
                className="w-[50px] h-[50px] rounded-lg"
                alt=""
              />
              <span className="font-semibold mt-2">Brand</span>
            </Link>

            <Link
              to="/"
              className="flex flex-col cursor-pointer items-center p-2 text-black hover:text-primary"
            >
              <img
                src={Pricing2}
                className="w-[50px] h-[50px] rounded-lg"
                alt=""
              />
              <span className="font-semibold mt-2">Agency</span>
            </Link>
          </div>
        </Link>

        <Link to="/" className="relative group px-2 py-3 transition-all">
          <p className="flex cursor-pointer items-center gap-2 text-black group-hover:text-primary font-semibold monaSemibold">
            <span className="lg:text-xl">Pricing</span>
          </p>
        </Link>

        <Link to="/" className="relative group px-2 py-3 transition-all">
          <p className="flex cursor-pointer items-center gap-2 text-black group-hover:text-primary font-semibold monaSemibold">
            <span className="lg:text-xl">Pricing</span>
          </p>
        </Link>

        <Link to="/" className="relative group px-2 py-3 transition-all">
          <p className="flex cursor-pointer items-center gap-2 text-black group-hover:text-primary font-semibold monaSemibold">
            <span className="lg:text-xl">Pricing</span>
          </p>
        </Link>
      </section>

      <section className="flex items-center gap-5">
        <button className="py-3 px-8 font-semibold text-white bg-primary transition-all rounded-full hover:bg-blue-400">
          Get Demo
        </button>
      </section>
    </div>
  );
};
