import React from 'react';

import { Box, Img, RichText } from '../../components/base';

/**
 * @typedef {import("@prismicio/client").Content.TeamGallerySlice} TeamGallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TeamGallerySlice>} TeamGalleryProps
 * @param { TeamGalleryProps }
 */
const TeamGallery = ({ slice }) => (
  <section className="bg-[#f5f5f5] flex flex-col justify-center items-center py-40 md:py-64">
    <Box className="mb-20">
      <span>
        {slice.primary.title ? (
          <RichText
            className="font-bold text-2xl text-center mb-9"
            field={slice.primary.title}
          />
        ) : ""
        }
      </span>
      <RichText
        className="text-black  text-2xl"
        field={slice.primary.subtitle}
      />
    </Box>
    <Box className="max-w-[1866px] flex flex-col  lg:flex-row mx-12">
      {slice?.items?.map((item, i) => (
        <Box key={i} className="flex flex-row items-start mb-12 lg:mb-0 mr-6">
          <Img className="mr-4" src={item.image.url} alt={item.image.alt} />
          <Box className="flex flex-col">
            <RichText className="text-black mb-2 " field={item.title} />
            <RichText
              className="text-black mb-2 text-xs"
              field={item.subtitle}
            />
            <RichText
              className="text-black max-w-[27rem] md:text-[14px] text-[12px]"
              field={item.description}
            />
          </Box>
        </Box>
      ))}
    </Box>
  </section>
);

export default TeamGallery;
