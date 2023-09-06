"use client"
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Button } from '@mui/material';
import { Box, Img, PrismicHREF, RichText, Text } from '../../components/base';
import Link from 'next/link';

/**
 * @typedef {import("@prismicio/client").Content.GallerySlice} GallerySlice
 * @typedef {import("@prismicio/react").SliceComponentProps<GallerySlice>} GalleryProps
 * @param { GalleryProps }
 */
const Gallery = ({ slice }) => {
  return (
    <Box className="text-center w-full bg-white m-auto py-40">
      <Box>
        {slice.primary.title ? (
          <RichText
            className="text-black font-bold text-base mb-10"
            field={slice.primary.title}
          />
        ) : ""
        }
      </Box>

      {slice.primary.subtitle ? (
        <RichText
          className="text-black font-extralight text-4xl mb-24"
          field={slice.primary.subtitle}
        />
      ) : ""
      }
      <Box className="max-w-6xl m-auto">
        <Carousel
          autoPlay={false}
          animation="slide"
          NavButton={({ onClick, className, style, next, prev }) => {
            // Other logic
            return (
              <Button onClick={onClick} className={className} style={style}>
                {next && <Img className="h-14" src="/img/arrow-right.png" />}
                {prev && <Img className="h-14" src="/img/arrow-left.png" />}
              </Button>
            );
          }}
          activeIndicatorIconButtonProps={{
            style: {
              color: '#5fbdc1', // 2
            },
          }}
          indicatorIconButtonProps={{
            className: 'fill-primary',
          }}
          indicatorContainerProps={{
            className:
              'max-w-[200px] m-auto mt-10 flex justify-center space-x-3.5',
          }}
          navButtonsAlwaysVisible={true}
          navButtonsProps={{
            className:
              'group-hover:bg-transparent group-hover-brightness-0 group-hover-opacity-0 top-[26%] hidden md:block ',
          }}
          navButtonsWrapperProps={{
            className: 'bg-transparent hover:brightness-0 group',
          }}
        >
          {slice?.items?.map((item, i) => (
            <Box
              className="flex md:flex-row flex-col items-center md:items-left  md:px-40 justify-center"
              key={i}
            >
              <Box className="md:mr-14 mr-0">
                <Img
                  src={item.image.url}
                  className=" max-w-[200px] h-[190px] md:h-[234px]"
                  alt={item.image.alt}
                />
              </Box>
              <Box className="flex flex-col mt-5 md:mt-0 text-center md:text-left justify-center">
                <RichText
                  className="text-lg md:font-[500] font-bold mb-3"
                  field={item.title}
                />
                <Box className="max-w-[18rem] text-[12px] md:text-[14px] font-light">
                  <RichText field={item.content} className="text-[14px] " />
                </Box>
                <Box className="mt-9 flex flex-row justify-between  max-w-[18rem]">
                  {slice.primary.type === 'what-we-do' ? (
                    item.link1 ? (
                      <PrismicHREF
                        className="text-purple text-[14px] hover:text-primary font-bold "
                        field={item.link1}
                      >
                        Find Out More
                      </PrismicHREF>
                    ) : (
                      <Text className="text-purple text-[14px] hover:text-primary font-bold ">
                        Coming soon
                      </Text>
                    )
                  ) : (
                    <Link
                      className="text-risidio-yellow text-[14px] font-bold hover:text-primary"
                      href="/ourwork"
                    >
                      Find out more
                    </Link>
                  )}
                  {slice.primary.type === 'what-we-do' && (
                    <Link
                      className="text-black text-[14px] font-bold hover:text-primary"
                      href="/ourwork"
                    >
                      See All Projects
                    </Link>
                  )}
                </Box>
              </Box>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default Gallery;
