import Link from 'next/link';
import React from 'react';
import { Box, RichText, Button } from '../../components/base';

/**
 * @typedef {import("@prismicio/client").Content.SectionSliceSlice} SectionSliceSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SectionSliceSlice>} SectionSliceProps
 * @param { SectionSliceProps }
 */
const SectionSlice = ({ slice }) => {
  return (
    <>
      <Box className="mb-16">
        <Box className="h-48 w-0 border-l-[0.1px] m-auto border-[#ffffff80] border-solid"></Box>
      </Box>

      <Box className="text-center m-auto mb-96">
        <span className="title">
          { slice.primary.title ? (
            <RichText
              className="text-white font-bold text-2xl mb-5"
              field={slice.primary.title}
            />
          ) : ""
          }
        </span>

        {slice.primary.subtitle ? (
          <RichText
            className="text-white font-medium text-[1rem] mt-9 mb-7"
            field={slice.primary.subtitle}
          />
        ) : ""
        }
        {slice.primary.content ? (
          <Box className="max-w-[45rem] mx-4 sm:m-auto ">
            <span className="text-white font-light text-sm sm:text-[20px]   mb-5">
              {slice.primary.content}
            </span>
          </Box>
        ) : ""
        }
        {slice.primary.description ? (
          <Box className="max-w-[43.5rem] mx-4 sm:m-auto">
            <RichText
              className="text-white font-light mt-7 text-sm sm:text-[20px] mb-5"
              field={slice.primary.description}
            />
          </Box>
        ) : ""
        }
        <Box className="w-80 m-auto mt-10 flex justify-between">
          <Link href="/about">
            <Button className="bg-primary font-semibold hover:bg-white hover:text-primary rounded-full px-10">
              About Us
            </Button>
          </Link>
          <Link href="/ourwork">
            <Button className="bg-zinc-400/[.4] text-primary font-semibold hover:bg-white from-slate-100 rounded-full px-10">
              Our Work
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};
export default SectionSlice;
