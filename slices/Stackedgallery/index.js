import React from 'react';

import { Box, Img, RichText } from '../../components/base';

/**
 * @typedef {import("@prismicio/client").Content.StackedgallerySlice} StackedgallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<StackedgallerySlice>} StackedgalleryProps
 * @param { StackedgalleryProps }
 */
const Stackedgallery = ({ slice }) => (
  <section className="bg-white flex flex-col justify-center items-center py-20">
    <span>
      {slice.primary.title ? (
        <RichText
          className="font-bold text-2xl text-center mb-28"
          field={slice.primary.title}
        />
      ) : ""
      }
    </span>
     { slice?.items?.map((item, i) => (
      <Box
        className="flex flex-col max-w-[750px] items-center px-3 text-center"
        key={i}
      >
        <Img src={item.image.url} alt={item.image.alt} />
        <RichText
          className="text-base mt-8 mb-12 font-medium"
          field={item.title}
        />
        <RichText
          className="mb-24 text-[12px] md:text-base"
          field={item.description}
        />
      </Box>
    ))}
  </section>
);

export default Stackedgallery;
