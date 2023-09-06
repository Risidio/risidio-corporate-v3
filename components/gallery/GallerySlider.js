"use client"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Img } from "../base";
import styles from "../shared/style/mulitSlider.module.css"
import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Link from "next/link";

const resources = [
      {
        "title": "Find me on Twitter",
        "desctiption": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
        "link": "https://twitter.com/kendalmintcode",
        "imageUrl": "/gallery/1.png"
      },
      {
        "title": "Welcome to Ark Labs",
        "link": "https://ark-labs.co.uk",
        "desctiption": "publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
        "imageUrl": "/gallery/2.png"
      },
      {
        "title": "Some sort of third title",
        "desctiption": "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
        "link": "https://twitter.com/kendalmintcode",
        "imageUrl": "/gallery/3.jpg"
      },

      {
        "title": "Super item number five",
        "desctiption": "graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
        "link": "https://twitter.com/kendalmintcode",
        "imageUrl": "/gallery/4.jpg"
      },
      {
        "title": "Super item number six",
        "desctiption": "design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available",
        "link": "https://twitter.com/kendalmintcode",
        "imageUrl": "/gallery/5.png"
      },
     
    ];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const GallerySlider = () => {
  const length = resources.length;
  const [currentIndex, setCurrentIndex] = useState(1);
  const currentRef = useRef(1);

  const updateCurrentRef = (newValue) => {
    currentRef.current = newValue;
    setCurrentIndex(((currentRef.current % length) + length) % length );
  };

  const CustomLeftArrow = ({onClick, currentRef}) => {
    return (
      <button className="absolute top-[30%] left-[calc(4%-1px)]" onClick={() => {
        updateCurrentRef(currentRef.current - 1);
        onClick();
      }}>
       <FaChevronLeft color="#f9b807" fontSize="1.5em"/>
      </button>
    );
  }

  const CustomRightArrow = ({onClick, currentRef}) => {
    return (
      <button className="absolute top-[30%] right-[calc(4%+1px)]" onClick={() => {
          updateCurrentRef(currentRef.current + 1);
          onClick();
        }}>
        <FaChevronRight color="#f9b807" fontSize="1.5em"/>
      </button>
    );
  }
  

  return (
    <>
     <section className="bg-footer-bg bg-cover pt-48">
     <Box className="max-w-screen-xl text-white pb-20 px-10 m-auto">
      <h1 className='text-white font-normal text-3xl  text-center p-10'>Our Initiatives</h1>
       <Box className="lg:block hidden justify-center items-center mb-10">
          <Carousel 
              swipeable={false}
              draggable={false}
              showDots={false}
              responsive={responsive}
              infinite={true}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass={styles.carouselContainer}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              slidesToSlide={1}
              customLeftArrow={<CustomLeftArrow currentRef={currentRef} direction="left" />}
              customRightArrow={<CustomRightArrow currentRef={currentRef} direction="right" />}
          >
            {resources.map((slide, index) => (
                <Box
                  key={index}
                  className="p-5 py-20 flex flex-col justify-center items-center w-full h-auto"
                >
                <Img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className={`w-56 h-72 rounded-lg object-fill transition-opacity shadow-xl
                              ${currentIndex === index ? "scale-150 opacity-100" : "scale-100 opacity-60"}`}
                />
                {currentIndex === index && (
                  <>
                    <h2 className='text-base font-semibold mt-20 py-5'>{slide.title.toUpperCase()}</h2>
                      <p className='font-light text-sm py-5'> 
                        {slide.desctiption}
                      </p>
                    <Link href="#" className='text-risidio-yellow text-justify'>Find Out More</Link>
                  </>
                  )
              }
                </Box>
              ))
            }
          </Carousel>
       </Box>

       <Box className="lg:hidden block text-center mb-10">
          <Carousel 
             responsive={responsive}
             showDots={true}
             customLeftArrow={<CustomLeftArrow currentRef={currentRef} direction="left" />}
             customRightArrow={<CustomRightArrow currentRef={currentRef} direction="right" />}
          >
            {resources.map((slide, i) => (
               <div className='text-center w-full h-auto flex items-center flex-col' key={i}>
                 <Img 
                   src={slide.imageUrl} 
                   alt={slide.title}
                   className="h-72 w-72 rounded-lg object-fill"
                  />
                 <h2 className='text-base font-semibold mt-10'>{slide.title.toUpperCase()}</h2>
                 <div className='font-light text-sm'> 
                    {slide.desctiption}
                  </div>
                 <Link href="#" className='text-risidio-yellow text-justify my-5'>Find Out More</Link>
               </div>
             )
           )}
          </Carousel>
       </Box>
     </Box>
     </section>
    </>
  );
}

export default GallerySlider;