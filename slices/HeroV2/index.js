import React from 'react';

import { RichText, Box } from '../../components/base';

/**
 * @typedef {import("@prismicio/client").Content.HeroV2Slice} HeroV2Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroV2Slice>} HeroV2Props
 * @param { HeroV2Props }
 */
const HeroV2 = ({ slice }) => (
  <section className="flex flex-col justify-center items-center  text-center bg-static-bg min-h-[382px] bg-no-repeat bg-center bg-cover">
    <Box>
      {slice.primary.title ? (
        <RichText
          className="text-white font-bold text-2xl mb-8"
          field={slice.primary.title}
        />
      ) : (
        <h2>Template slice, update me!</h2>
      )}
    </Box>
    {slice.primary.description ? (
      <RichText
        className="text-white text-lg font-light  md:text-[22px] max-w-xs sm:max-w-full"
        field={slice.primary.description}
      />
    ) : (
      <p>start by editing this slice from inside Slice Machine!</p>
    )}
  </section>
);

export default HeroV2;
