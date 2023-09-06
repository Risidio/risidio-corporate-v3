"use client";
import React from 'react'
import { Box, Img, RichText } from '../../components/base'
import Carousel from 'react-material-ui-carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import { getSlug } from '@/utils';
import { Button } from '@mui/material';

function RecentArticles({items}) {
  return (
    <section className="bg-static-bg min-h-[382px] bg-no-repeat bg-center bg-cover">
       <Box className="max-w-screen-md text-white py-20 px-10 m-auto">
         <h1 className="text-white font-semibold text-2xl w-full text-center">Risidio Articles</h1>
          <Carousel 
                 animation="slide"
                 NavButton={({ onClick, className, style, next, prev }) => {
                   return (
                     <Button
                          onClick={onClick} 
                          className={`
                                     ${className} 
                                      relative 
                                    `} 
                           style={style}
                      >
                       {next && <div className="border rounded-full p-3 border-risidio-yellow text-2xl"><FaChevronRight color="#f9b807"/></div>}
                       {prev && <div className="border rounded-full p-3 border-risidio-yellow text-2xl"><FaChevronLeft color="#f9b807"/></div>}
                     </Button>
                   );
                 }}
                 activeIndicatorIconButtonProps={{
                   style: {
                      color: '#f9b807',
                   },
                 }}
                 indicatorIconButtonProps={{
                   className: 'fill-primary',
                 }}
                 indicatorContainerProps={{
                   className:
                     'max-w-[200px] m-auto mt-1 flex justify-center space-x-2',
                 }}
                 navButtonsAlwaysVisible={true}
                 navButtonsProps={{
                   className:
                     `top-[26%] sm:top-[30%] md:block`,
                 }}
                 navButtonsWrapperProps={{
                   className: 'group',
                 }}
          >
            {items.map((item, i) => {
               const slug = item.primary.slug[0] ? getSlug(item.primary.slug[0].text) : "";
               return (
                    <div 
                        key={i}
                        className='text-center text-white w-full h-auto flex items-center flex-col py-5'
                      >
                      <Link href={`articles/${slug}`}>
                          <Img 
                            src={item.primary.article_image.url}
                            alt={item.primary.article_image.alt}
                            className="h-[250px] rounded-lg object-contain"
                            />
                      </Link>
                  
                      <Link href={`articles/${slug}`}>
                          <RichText 
                              field={item.primary.article_title}
                              className='text-base text-white mt-8 font-semibold capitalize'
                            />
                          <RichText 
                            field={item.primary.article_summary}
                            className='font-light text-sm text-white mt-3'
                          />
                        </Link>
                    </div>
               )
            }
           )}
          </Carousel>
       </Box>
     </section>
  )
}

export default RecentArticles
