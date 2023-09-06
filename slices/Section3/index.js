import Link from 'next/link';
import React from 'react';

import { Box, Button, RichText, Text } from '../../components/base';

/**
 * @typedef {import("@prismicio/client").Content.Section3Slice} Section3Slice
 * @typedef {import("@prismicio/react").SliceComponentProps<Section3Slice>} Section3Props
 * @param { Section3Props }
 */
const Section3 = ({ slice }) => {
  return (
    <Box className="text-center max-w-[436px] m-auto mt-52 mb-52">
      <Text className="text-primary font-normal text-9xl h-24">“</Text>

      {slice.primary.description ? (
        <RichText
          className="text-white font-extralight text-3xl sm:text-4xl mb-6"
          field={slice.primary.description}
        />
      ) : ""
      }
      <Box className="title">
        {slice.primary.title ? (
          <RichText
            className="text-white font-bold text-base"
            field={slice.primary.title}
          />
        ) : ""
        }
      </Box>
      <Link href="/about">
        <Button className="bg-zinc-400/[.4] text-primary font-semibold hover:bg-white from-slate-100 rounded-full px-10 py-4 mt-32">
          More About Us
        </Button>
      </Link>
    </Box>
  );
};

export default Section3;
