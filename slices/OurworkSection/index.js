import React from 'react';
import { PrismicLink } from '@prismicio/react';
import { RichText, Img, Box } from '../../components/base';

/**
 * @typedef {import("@prismicio/client").Content.OurworkSectionSlice} OurworkSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<OurworkSectionSlice>} OurworkSectionProps
 * @param { OurworkSectionProps }
 */
const OurworkSection = ({ slice }) => (
  <Box className="flex flex-col items-center">
    <Box className="w-full bg-white flex justify-center">
      <Box className="grid grid-rows-[repeat(2, max-content)] sm:grid-cols-[repeat(3,minmax(217px,max-content))] lg:grid-cols-[repeat(auto-fill,minmax(217px,max-content))] md:gap-y-[80px] gap-x-[30px] justify-start flex-wrap px-[15px] py-[100px] max-w-[990px]">
        {slice?.items?.map((item, i) => (
          <Box className="w-[217px] m-auto my-4" key={i}>
            <Img
              src={item.project_image.url}
              alt={item.project_image.alt}
              className="w-[217px] h-[287px]"
            />
            <RichText
              field={item.project_title}
              className="text-left text-[28px] font-extralight text-black mt-3 box-border block"
            />
              <RichText
                field={item.project_description}
                className="text-[11px] max-h-7"
              />
            <Box className='pt-3 mt-8'>
              {item.project_link.url ? (
                <Box>
                  <PrismicLink
                    field={item.project_link}
                    className="text-[#f9b807] text-[11px] font-bold"
                  >
                    Find Out More
                  </PrismicLink>
                </Box>
              ) : (
                <Box className="text-[#f9b807] text-[11px] font-bold pt-1">
                  Coming Soon
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);

export default OurworkSection;
