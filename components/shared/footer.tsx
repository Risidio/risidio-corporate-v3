"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Box, Text } from '../base';
import { Discord, Instagram, Twitter } from './socialMedial';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const [hover, setHover] = useState('');
  const pathname = usePathname();

  return (
    <section
      className={`${
        pathname === '/' ? 'bg-transparent' : 'bg-footer-bg'
      } bg-cover pt-52`}
    >
      <Box className="max-w-screen-2xl text-white  m-auto">
        <Box className="flex flex-col justify-center items-center mb-56">
          <Text className="text-white font-bold text-3xl mb-5">
            Get in Touch
          </Text>
          <Box className="flex flex-col text-center">
            <span className="text-[36px] font-thin mb-5">Any Questions?</span>
            <span className="w-64 font-light">
              We can most easily be found on Discord - click the link below to
              request an invite - or drop us an email.
            </span>
          </Box>
          <Box className="flex flex-row w-52 justify-between mt-11">
            <Link target="_blank" href="https://discord.com/invite/sQaKVft">
              <Image
                onMouseOver={() => setHover('discord')}
                onMouseLeave={() => setHover('')}
                className="cursor-pointer"
                src={`/img/${
                  hover == 'discord' ? 'discord-light' : 'discord'
                }.svg`}
                alt="discord"
                width={90}
                height={90}
              />
            </Link>

            <Image
              onClick={() => {
                window.location.href = 'mailto:info@risidio.com';
              }}
              onMouseOver={() => setHover('mail')}
              onMouseLeave={() => setHover('')}
              src={`/img/${hover == 'mail' ? 'mail-light' : 'mail'}.svg`}
              alt="Risidio"
              width={90}
              height={90}
              className="cursor-pointer"
            />
          </Box>
        </Box>
        <Box className="bg-black sm:pl-0 pb-32 sm:pb-1 pt-14">
          <Box className="flex flex-col justify-center items-center  sm:flex-row m-auto sm:justify-between max-w-[1400px] sm:pr-9">
            <Box className=" h-20 lg:h-max-content md:flex sm:pl-3">
              <Link href="/">
                <Image
                  src="/img/logoWhite.svg"
                  alt="Risidio"
                  width={250}
                  height={150}
                />
              </Link>
            </Box>
            <Box className="sm:flex flex-col mb-8 hidden">
              <Text className="font-light  text-slate-400 text-base mb-3">
                Sitemap
              </Text>
              <Link
                className="text-white font-medium mb-1 text-xs"
                href="/ourwork"
              >
                Our Work
              </Link>
              <Link
                href="/about"
                className="text-white font-medium mb-1 text-xs"
              >
                About
              </Link>

              <Link
                href="/sustainability"
                className="text-white font-medium mb-1 text-xs"
              >
                Sustainability
              </Link>
            </Box>
            <Box className="sm:flex flex-col text-white mb-8 hidden">
              <span className="font-light text-slate-400 mb-3 text-base">
                Projects
              </span>

              <Link
                target="_blank"
                href=""
                className="text-white font-medium mb-1 text-xs"
              >
                Marketplace
              </Link>
              <Link
                target="_blank"
                href="https://www.indigenft.io/"
                className="text-white font-medium mb-1 text-xs"
              >
                IndigeNFT
              </Link>
              <Link
                target="_blank"
                href="https://thisisnumberone.com/"
                className="text-white font-medium mb-1 text-xs"
              >
                This is #1
              </Link>
            </Box>
            <Box className="sm:flex flex-col hidden">
              <Text className="font-light text-slate-400  text-base mb-3">
                <span>Contact</span>
              </Text>
              <Text className="text-white mb-1 font-medium w-36 text-xs">
                Kemp House 152 - 160 City Road, London EC1V 2NX
              </Text>
              <Text
                onClick={() => {
                  window.location.href = 'mailto:info@risidio.com';
                }}
                className="text-sm text-risidio-yellow cursor-pointer"
              >
                info@risidio.com
              </Text>

              <i className="fab fa-discord"></i>
            </Box>

            <Box className="flex, flex-col, justify-center items-center mt-20 sm:hidden">
              <Text className="text-[#e9493d] mb-6 font-medium  text-xs text-center">
                Contact us
              </Text>
              <Box className="flex justify-center items-start mb-3">
                <Discord className={'w-5 fill-white mr-4'} />
                <Twitter className={'w-[16px] fill-white mr-4'} />
                <Instagram className={'w-[16px] fill-white'} />
              </Box>
              <Text className="text-white text-xs pb-3 pl-2">
                © 2023 Risidio Ltd. All right reserved.
              </Text>
            </Box>
          </Box>
          <Box className=" justify-between pb-3 px-6 hidden sm:flex sm:mt-20">
            <Text className="text-white text-xs">
              © 2023 Risidio Ltd. All right reserved.
            </Text>
            <Text className="text-white text-xs">Privacy Policy</Text>
          </Box>
        </Box>
      </Box>
    </section>
  );
}
