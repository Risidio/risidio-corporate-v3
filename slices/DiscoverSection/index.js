import Link from 'next/link';
import React from 'react';
import { Box, Button, RichText } from '../../components/base';
import Card from '../../components/shared/card';

/**
 * @typedef {import("@prismicio/client").Content.DiscoverSectionSlice} DiscoverSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DiscoverSectionSlice>} DiscoverSectionProps
 * @param { DiscoverSectionProps }
 */
const DiscoverSection = ({ slice }) => (
  <Box className="bg-white pt-56 text-2xl pb-52">
    <Box className="text-center">
      {slice.primary.title ? (
        <RichText
          className="text-black font-bold mt-7 text-[20px] mb-5"
          field={slice.primary.title}
        />
      ) : ""
      }
    </Box>
    <Box className="flex flex-col lg:flex-row max-w-7xl m-auto ">
      {slice?.items?.map((item, i) => (
        <Card
          key={i}
          content={item.content}
          title={item.title}
          url={item.icon.url}
          alt={item.icon.alt}
        />
      ))}
    </Box>
    <Box className="m-auto flex justify-center">
      <Link href="/contact">
        <Button className="bg-primary/[.2] text-primary font-semibold hover:bg-primary hover:text-white from-slate-100 rounded-full px-10 py-4 mt-12 text-xs">
          Interested? Get In Touch
        </Button>
      </Link>
    </Box>
  </Box>
);

export default DiscoverSection;
