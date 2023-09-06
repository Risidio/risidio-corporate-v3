"use client"

import React, { useState } from 'react';
import { Box, Img, RichText } from '../../components/base';
import Head from 'next/head';
import { formatDate, getShortText, getSlug } from '@/utils';
import Link from 'next/link';
import { FaRegClock } from 'react-icons/fa';
import dynamic from 'next/dynamic';

const Pagination = dynamic(() => import('../../components/shared/Pagination'))
const Tabs = dynamic(() => import('../../components/shared/Tabs'))
const RecentArticles = dynamic(() => import('./RecentArticles'))

interface ArticleDate {
  primary : {
    article_date: number
  }
}

interface ArticleCategory {
  primary : {
    article_category: string
  }
}

export default function Articles({ slices}: any) {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCategory, setCurrentCategory] = useState("All");

  const itemsPerPage = 16; 
  let items = slices ?? [];
  items = Object.values(items);
  let currentItems = [];

  // Recent Articles
  let recentArticles = items.slice().sort((a: ArticleDate, b: ArticleDate) => a.primary.article_date - b.primary.article_date);

  // Get the category of items
  const categories = new Set() ;
  items.map((item: { primary: { article_category: unknown; }; }) => {categories.add(item.primary.article_category)});

  // Filter the data
  items = currentCategory !== "All" ? items.filter((item: ArticleCategory) => item.primary.article_category === currentCategory) : items;

  // Pagination
  const totalItems = items.length;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category);
    setCurrentPage(1)
 };

 const handlePageChange = (pageNumber: number) => {
   setCurrentPage(pageNumber);
};

return (
   <>
    <Head>
      <title>Articles</title>
    </Head>
    <RecentArticles items={recentArticles} />
    <Box className="bg-[#f5f5f5] py-28 px-5">
       <Box className='flex justify-center max-w-screen-xl m-auto py-5'>
           <Tabs
              items={[...categories]} 
              currentCategory={currentCategory}
              onCategoryChange={handleCategoryChange}
            />
       </Box>
       <Box className="grid 
                       grid-cols-1
                       sm:grid-cols-2
                       md:grid-cols-3
                       lg:grid-cols-4
                       max-w-screen-xl 
                       m-auto">
      
        { currentItems?.map((item: any, i: any) => {
         const arcicleSummary = item.primary.article_summary ? getShortText(item.primary.article_summary[0].text) : "";
         const slug = item.primary.slug[0] ? getSlug(item.primary.slug[0].text) : "";
         const date = formatDate(item.primary.article_date);
         return (
            <Box 
                key={i} 
                className="mb-5 hover:bg-white hover:rounded-lg hover:shadow-lg p-5">
                <Link href={`articles/${slug}`}>
                  <Box className="relative w-full group">
                     <div className="sm:aspect-square w-full h-full">
                         <Img
                              src={item.primary.article_image.url}
                              alt={item.primary.article_image.alt}
                              className="w-full h-full rounded-lg hover:opacity-90"
                         />
                    </div>
                </Box>
                 <Box>
                       <RichText
                          field={item.primary.article_title}
                          className="text-[.8rem] font-semibold text-center mb-2 py-2 text-risidio-yellow sm:min-h-[3.5rem]"
                       />
                      <div className="text-[0.8rem] mt-5 text-gray-900 sm:min-h-[6rem]">
                         { arcicleSummary }
                      </div>

                      <Box className="flex items-center w-full sm:mt-5 py-3 justify-between text-gray-700">
                         <span className="text-[.8rem]"> {date} </span>
                         <div className="flex items-center text-[.8rem]">
                            <FaRegClock/>
                            <RichText
                               field={item.primary.article_read_time}
                               className="text-[.8rem] ml-2"
                             />m
                        </div>
                      </Box>
                 </Box>
               </Link>
           </Box>
         )})}
       </Box>

      { totalItems > itemsPerPage &&  (
         <Box className='flex justify-center max-w-screen-xl m-auto py-5'>
            <Pagination
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
         </Box>
       )}
   </Box>
   </>
 );
}
