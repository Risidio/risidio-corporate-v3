"use client"
import { Box, Img, RichText } from '../../components/base';
import { useCallback, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Carousel from "react-multi-carousel";
import styles from "../../components/shared/style/mulitSlider.module.css";
import "react-multi-carousel/lib/styles.css";
import { PrismicLink } from '@prismicio/react';

/**
 * @typedef {import("@prismicio/client").Content.MultiCarouseSlice} MultiCarouseSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MultiCarouseSlice>} MultiCarouseProps
 * @param { MultiCarouseProps }
 */

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

const MultiCarouse = ({ slice }) => {
  const carouserLength = slice.items.length;
  const [currentIndex, setCurrentIndex] = useState(1);
  const [dotIndex, setDotIndex] = useState(0);
  const currentRef = useRef(1);
  
  const updateCurrentRef = useCallback((newValue) => {
    currentRef.current = newValue;
    setCurrentIndex(((newValue % carouserLength) + carouserLength) % carouserLength);
  }, [currentRef, carouserLength]);

  const CustomLeftArrow = ({onClick}) => {
    return (
      <button className="absolute top-[30%] left-[calc(4%-1px)]" onClick={() => onClick()}>
          <FaChevronLeft color="#f9b807" fontSize="1.5em"/>
      </button>
    );
  }
 
  const CustomRightArrow = ({onClick}) => {
    return (
      <button className="absolute top-[30%] right-[calc(4%+1px)]" onClick={() => onClick()}>
        <FaChevronRight color="#f9b807" fontSize="1.5em"/>
      </button>
    );
  }

  const CustomDot = ({ index, onClick, active, currentRef }) => {
    return (
      <li
        className={active ? "active" : "inactive"}
        onClick={() => {
            (index > dotIndex) ? updateCurrentRef(currentRef.current + (index - dotIndex)) : updateCurrentRef(currentRef.current - (dotIndex - index));
            setDotIndex(index);
            onClick();
          }}>
            
         <div className="px-1">
           <div className={`w-2.5 h-2.5 ${active ? "bg-risidio-yellow" : "bg-gray-200"} rounded-full hover:cursor-pointer`}></div>
         </div>
      </li>
    );
  };

  return (
     <section className="bg-footer-bg bg-cover pt-48">
     <Box className="max-w-screen-xl text-white pb-20 px-10 m-auto">
       <RichText
               field={slice.primary.title}
               className='text-white font-normal text-3xl text-center p-10'
       /> 
       <Box className="lg:block hidden justify-center items-center mb-10">
          <Carousel 
             beforeChange={(nextSlide, { currentSlide }) => {
              if (nextSlide > currentSlide) {
                  updateCurrentRef(currentRef.current + 1);
              } else {
                   updateCurrentRef(currentRef.current - 1);
              }
           }}
              swipeable={false}
              draggable={false}
              showDots={true}
              customDot={<CustomDot currentRef={currentRef}/>}
              responsive={responsive}
              infinite={true}
              keyBoardControl={true}
              customTransition="all .5"
              transitionDuration={500}
              containerClass={styles.carouselContainer}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              slidesToSlide={1}
              customLeftArrow={<CustomLeftArrow />}
              customRightArrow={<CustomRightArrow />}
          >
            {slice.items?.map((slide, index) => (
                <Box
                  key={index}
                  className="p-5 py-20 flex flex-col justify-center items-center w-full h-auto"
                >
               <Img
                    src={slide.image.url}
                    alt={slide.image.alt}
                    className={`w-56 h-72 rounded-lg object-fill transition-opacity shadow-xl
                               ${currentIndex === index ? 'scale-125 opacity-100' : 'scale-100 opacity-60'}`}
                />
                {currentIndex === index && (
                  <>
                      <RichText
                          field={slide.title}
                          className='text-base font-semibold text-white mt-20 py-5 capitalize text-center'
                      />
                      <RichText 
                          field={slide.desctiption}
                          className='font-light text-sm px-6 text-white text-center'
                         />
                      { slide.link?.link_type === "Web" && <PrismicLink 
                                                            field={slide.link}
                                                            target="_blank"
                                                            className='text-risidio-yellow text-justify py-2'
                                                          >
                                                           Learn More 
                                                         </PrismicLink>
                      }
                  </>
                  )
                 }
                </Box>
              ))
            }
          </Carousel>
       </Box>
      {/* 
         Carousel for mobile size
      */}
       <Box className="lg:hidden block text-center mb-10">
          <Carousel 
             responsive={responsive}
             showDots={true}
             customDot={<CustomDot currentRef={currentRef}/>}
             customLeftArrow={<CustomLeftArrow/>}
             customRightArrow={<CustomRightArrow/>}
             beforeChange={(nextSlide, { currentSlide }) => {
              if (nextSlide > currentSlide) {
                  updateCurrentRef(currentRef.current + 1);
              } else {
                   updateCurrentRef(currentRef.current - 1);
              }
           }}
          >
            {slice.items.map((slide, i) => (
               <div 
                  key={i}
                  className='text-center text-white w-full h-auto flex items-center flex-col py-10 space-x-5'
                 >
                 <Img 
                    src={slide.image.url} 
                    alt={slide.image.alt}
                    className="h-72 w-56 rounded-lg object-fill"
                  />
                  <RichText 
                      field={slide.title}
                      className='text-base text-white font-semibold mt-10 capitalize'
                  />
                   <RichText 
                      field={slide.desctiption}
                      className='font-light text-sm text-white'
                   />
                  { slide.link?.link_type === "Web" && <PrismicLink 
                                                         field={slide.link}
                                                         className="text-risidio-yellow text-justify py-3"
                                                        >
                                                         Learn More 
                                                        </PrismicLink>
                  }
               </div>
             )
           )}
          </Carousel>
       </Box>
     </Box>
     </section>
  );
};

export default MultiCarouse;
