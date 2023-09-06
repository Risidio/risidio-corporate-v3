'use client'
import React, { useState } from 'react';
import { Box, RichText, Text } from '../../components/base';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/**
 * @typedef {import("@prismicio/client").Content.FooterSectionSlice} FooterSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<FooterSectionSlice>} FooterSectionProps
 * @param { FooterSectionProps }
 */

const FooterSection = ({ slice }) => {
  const [hover, setHover] = useState('');
  return (
    <section className="bg-footer-bg bg-cover pt-52">
      <Box className="max-w-screen-2xl text-white pb-20  m-auto">
        <Box className="flex flex-col justify-center items-center mb-56">
          <RichText
            className="text-white font-bold text-3xl mb-5"
            field={slice.primary.title}
          />
          <Box className="flex flex-col text-center">
            <span className="text-[36px] font-thin mb-5">
              {slice.primary.subtitle}
            </span>
            <span className="w-64 font-light">{slice.primary.content}</span>
          </Box>
          <Box className="flex flex-row w-52 justify-between mt-11">
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
        <Box className="bg-black pl-4 sm:pl-0">
          <Box className="flex flex-col  sm:flex-row m-auto justify-between max-w-[1400px] pr-9">
            <Box className="hidden h-20 lg:h-max-content md:flex">
              <Link href="/">
                <Image
                  src="/img/logoWhite.svg"
                  alt="Risidio"
                  width={300}
                  height={200}
                />
              </Link>
            </Box>
            <Box className="flex flex-col mb-8">
              <RichText
                className="font-light  text-slate-400 text-base mb-3"
                field={slice.primary.title1}
              />

              <Link
                href="/about"
                className="text-white font-medium mb-1 text-xs"
              >
                About
              </Link>
              <Link
                className="text-white font-medium mb-1 text-xs"
                href="/ourwork"
              >
                Our Work
              </Link>
              <Link
                href="/sustainability"
                className="text-white font-medium mb-1 text-xs"
              >
                Sustainability
              </Link>
            </Box>
            <Box className="flex flex-col text-white mb-8">
              <span className="font-light text-slate-400 mb-3 text-base">
                {slice.primary.title2}
              </span>

              <Link href="" className="text-white font-medium mb-1 text-xs">
                Marketplace
              </Link>
              <Link
                href="https://www.indigenft.io/"
                className="text-white font-medium mb-1 text-xs"
              >
                IndigeNFT
              </Link>
              <Link
                href="https://thisisnumberone.com/"
                className="text-white font-medium mb-1 text-xs"
              >
                This is #1
              </Link>
            </Box>
            <Box className="flex flex-col">
              <Text className="font-light text-slate-400  text-base mb-3">
                <span>{slice.primary.title3}</span>
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

              <FontAwesomeIcon icon="fa-brands fa-discord" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Text className="text-white text-xs pb-3 pl-2">
        © 2023 Risidio Ltd. All right reserved.
      </Text>
    </section>
  );
};

export default FooterSection;
