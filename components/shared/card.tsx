import { RTNode } from '@prismicio/types';
import Image from 'next/image';
import React from 'react';
import { Box, RichText, Text, Img } from '../base';

interface IProps {
  content: [] | [RTNode, ...RTNode[]] | null | undefined;
  title: [] | [RTNode, ...RTNode[]] | null | undefined;
  url: string;
  alt: string;
}

const Card = ({ content, title, url, alt }: IProps) => {
  return (
    <Box className="text-center flex flex-col justify-center max-w-[22rem] m-auto mt-24">
      <Box className="flex justify-center mb-4">
        <Img src={url} alt={alt} className="text-primary font-bold text-9xl" />
      </Box>

      <Box className="mb-3">
        <RichText className="text-black font-light text-4xl" field={title} />
      </Box>
      <RichText
        className="text-black font-light text-sm mb-6"
        field={content}
      />
    </Box>
  );
};

export default Card;
