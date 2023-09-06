'use client'
import { usePathname } from 'next/navigation'
import React from 'react';
import { Box, RichText } from '../../components/base';

/**
 * @typedef {import("@prismicio/client").Content.DescriptionSlice} DescriptionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<DescriptionSlice>} DescriptionProps
 * @param { DescriptionProps }
 */
const Description = ({ slice }) => {
  const pathname = usePathname();
  const titleCalss = (pathname === '/sustainability') ? 'text-4xl font-extralight ' : 'font-bold text-2xl';
  
  return (
    <section
      className={`${
        pathname === '/sustainability' ? 'bg-white' : 'bg-bg-lighter'
      } flex flex-col justify-center items-center py-40`}
    >
      <Box className="max-w-[859px]">
        <span>
          {slice.primary.title ? (
            <RichText
              className={`text-center mb-9 ${titleCalss}`}
              field={slice.primary.title}
            />
          ) : ""
          }
        </span>
        {slice.primary.subtitle ? (
          <RichText
            className="text-center text-black font-light text-2xl mb-9"
            field={slice.primary.subtitle}
          />
        ) : ""}

       {slice.primary.description1 ? (
          <RichText
            className="text-center text-black font-light text-xl mb-9"
            field={slice.primary.description1}
          />
        ) : ""}

        {slice?.items?.map((item, i) => (
          <Box key={i} className="px-3">
            <RichText
              className="text-center mb-4 text-[14px]"
              field={item.description}
            />
          </Box>
        ))}
      </Box>
    </section>
  );
};

export default Description;
