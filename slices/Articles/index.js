import React from 'react';
import { PrismicLink } from '@prismicio/react';
import { RichText, Img, Box, Text } from '../../components/base';

/**
 * @typedef {import("@prismicio/client").Content.ArticlesSlice} ArticlesSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ArticlesSlice>} ArticlesProps
 * @param { ArticlesProps }
 */
const Articles = ({ slice }) => {
  if (!slice.primary.article_title) return;
  return (
   <Box className="bg-[#f5f5f5] py-28">
    <Box className="">
      <Text className="font-bold text-[17px] text-center mb-24">
        Recent Articles Written By Our Team
      </Text>
    </Box>
    <Box className="flex flex-col sm:flex-row items-center justify-between max-w-[625px] px-3 m-auto">
        <Box className="w-[280px] mb-12 sm:mb-0">
          <Img
            src={slice.primary.article_image.url}
            alt={slice.primary.article_image.alt}
            className="w-[280px] h-[200px] mb-[5px]"
          />
          <PrismicLink field={slice.primary.article_link}>
            <span className="text-[#f9b807] text-[11px]">
              {/* {slice.primary.article_date.toString()} */}
            </span>
            <RichText
              field={slice.primary.article_title}
              className="text-base font-medium my-2"
            />
            <RichText
              field={slice.primary.article_summary}
              className="text-[11px] text-left"
            />
          </PrismicLink>
        </Box>
    </Box>
  </Box>
);
}

export default Articles;
