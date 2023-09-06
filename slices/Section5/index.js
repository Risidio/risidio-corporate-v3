import React from 'react';

import { Box, RichText } from '../../components/base';
import Card from '../../components/shared/card';

/**
 * @typedef {import("@prismicio/client").Content.Section5Slice} Section5Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<Section5Slice>} Section5Props
 * @param { Section5Props }
 */
const Section5 = ({ slice }) => {
  return (
    <section className="py-16 bg-bg-lighter">
      <Box className=" flex flex-col justify-center text-center items-center px-10">
        {slice.primary.title ? (
          <RichText
            className="text-black font-bold text-lg mb-10"
            field={slice.primary.title}
          />
        ) : ""
        }

        <RichText
          className="text-4xl font-extralight"
          field={slice.primary.title2}
        />
        <RichText
          className="text-4xl font-light mt-8 mb-5"
          field={slice.primary.title3}
        />
        <RichText className="mb-5 text-sm" field={slice.primary.subtitle} />
        <RichText
          className="max-w-[45rem] text-center text-sm"
          field={slice.primary.comment}
        />
      </Box>
      <Box className="flex flex-col lg:flex-row max-w-[91rem] m-auto">
        {slice?.items?.map((item, i) => (
          <Card
            key={i}
            content={item.description}
            title={item.title}
            url={item.icon?.url}
            alt={item.icon?.alt}
          />
        ))}
      </Box>
    </section>
  );
};

export default Section5;
