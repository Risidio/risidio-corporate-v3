"use client";
import React, { useState } from 'react';
import { Box } from '../base';
import Image from 'next/image';
import logo from './../../public/risidio_logo_white.svg';
import discord from './../../public/discord.svg';
import twitter from './../../public/twitter.svg';
import instagram from './../../public/instagram.svg';
import Link from 'next/link';
import styles from './style/animations.module.css';
import { usePathname } from 'next/navigation'

function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const pathname = usePathname();

  const handleSelectItem = (item: string) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSelectedItem(item);
    setTimeout(() => {
      setIsOpenMenu(!isOpenMenu);
      setIsAnimating(false);
    }, 400);
  };

  const resetSelectItem = () => {
    if(isAnimating) return;
    setSelectedItem('');
    if(isOpenMenu){
      
      setTimeout(() => {
        setIsOpenMenu(!isOpenMenu);
        setIsAnimating(false);
      }, 400);
    }
  };

  const toggleMenu = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setTimeout(() => {
      setIsOpenMenu(!isOpenMenu);
      setIsAnimating(false);
    }, 400);
  };

  return (
    <Box
      className={`px-4 sm:px-12 py-2 flex justify-between items-center bg-black ${
        pathname === '/contact' && 'sm:bg-bg-purple'
      }`}
    >
      <nav className="flex w-full md:flex items-center justify-between h-14">
        <Link href="/">
          <Image
            src={logo}
            alt="risidio logo"
            className="w-[140px] h-[55px] inline"
            onClick={() => resetSelectItem()}
          />
        </Link>

        {isOpenMenu ? (
          <Box
            className={`bg-black h-screen md:hidden z-10 mt-16 fixed w-full left-0 top-[-0px] transition-all ease-in duration-500 flex flex-col items-center ${
              isOpenMenu ? styles.menuContainer : ''
            } ${isOpenMenu && styles.slideDown} ${
              isAnimating && styles.slideUp
            }`}
          >
            <ul
              className={`flex flex-col items-center md:hidden mt-10 ${styles.menuItem}`}
            >
              <li
                className={`text-white mx-4 my-6 md:my-0 text-2xl font-[200] `}
                onClick={() => handleSelectItem('ourwork')}
              >
                <Link
                  href="/ourwork"
                  className={`${
                    selectedItem === 'ourwork' ? styles.li_selected : ''
                  }`}
                >
                  Our Work
                </Link>
              </li>
              <li
                className={`text-white mx-4 my-6 md:my-0 text-2xl font-[200] `}
                onClick={() => handleSelectItem('about')}
              >
                <Link
                  href="/about"
                  className={`${
                    selectedItem === 'about' ? styles.li_selected : ''
                  }`}
                >
                  About
                </Link>
              </li>
              <li
                className={`text-white mx-4 my-6 md:my-0 text-2xl font-[200] `}
                onClick={() => handleSelectItem('sustainability')}
              >
                <Link
                  href="/sustainability"
                  className={`${
                    selectedItem === 'sustainability' ? styles.li_selected : ''
                  }`}
                >
                  Sustainability
                </Link>
              </li>
              <li
                className={`text-white mx-4 my-6 md:my-0 text-2xl font-[200] `}
                onClick={() => handleSelectItem('articles')}
              >
                <Link
                  href="/articles"
                  className={`${
                    selectedItem === 'articles' ? styles.li_selected : ''
                  }`}
                >
                  Articles
                </Link>
              </li>
              <li
                className={`text-[#5fbdc1] mx-4 my-6 md:my-0 text-2xl font-medium `}
                onClick={() => handleSelectItem('contact')}
              >
                <Link
                  href="/contact"
                  className={`${
                    selectedItem === 'contact' ? styles.li_selected : ''
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <Box className={styles.bottomContainerWrapper}>
              <Box className={`fixed bottom-0 mb-8 ${styles.bottomContainer}`}>
                <Box className="flex justify-center mb-4">
                  <Link href="https://discord.com/invite/sQaKVft">
                    <Image
                      src={discord}
                      alt="discord logo"
                      className="w-[18.75px] h-[15px]"
                    />
                  </Link>
                  <Link href="https://twitter.com/Risidio1">
                    <Image
                      src={twitter}
                      alt="twitter logo"
                      className="w-[18.75px] h-[15px] mx-2"
                    />
                  </Link>
                  <Link href="https://www.instagram.com/risidio_official/">
                    <Image
                      src={instagram}
                      alt="instagram logo"
                      className="w-[18.75px] h-[15px]"
                    />
                  </Link>
                </Box>
                <Box className="flex text-white font-light text-xs">
                  Terms & conditions • Privacy policy
                </Box>
              </Box>
            </Box>
          </Box>
        ) : ""
        }

        <ul className="hidden md:mt-3 md:flex md:flex-row md:items-center md:z-auto md:static md:w-auto md:py-0 md:pl-0 md:opacity-100 md:transition-none">
          <li className="text-white my-0 font-navFont text-navbar pl-0 md:pr-0 hover:underline hover:text-[#5fbdc1] lg:ml-5 ml-2">
            <Link href="/ourwork">Our Work</Link>
          </li>
          <li className="text-white my-0 font-navFont text-navbar pl-0 md:pr-0 hover:underline hover:text-[#5fbdc1] lg:ml-10 ml-8">
            <Link href="/about">About</Link>
          </li>
          <li className="text-white my-0 font-navFont text-navbar pl-0 md:pr-0 hover:underline hover:text-[#5fbdc1] lg:ml-10 ml-8">
            <Link href="/sustainability">Sustainability</Link>
          </li>
          <li className="text-white my-0 font-navFont text-navbar pl-0 md:pr-0 hover:underline hover:text-[#5fbdc1] lg:ml-10 ml-8">
            <Link href="/articles">Articles</Link>
          </li>
        </ul>

        <div className="inline-block md:hidden text-[hsla(0,0%,100%,.5)] border rounded-md border-[hsla(0,0%,100%,.1);] py-1 px-3 h-[40px]">
          <button className="flex items-center" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className=" w-[30px] h-[30px] "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <Link href="/contact" className="hidden md:flex md:ml-auto">
          <div className="hidden mr-4 px-1.5 py-px rounded-full md:flex justify-center items-center bg-[#ffffff33] w-32 h-10 hover:bg-white">
            <button className="rounded-full bg-transparent text-[#5fbdc1] text-button">
              Contact
            </button>
          </div>
        </Link>
      </nav>
    </Box>
  );
}

export default Navbar;
