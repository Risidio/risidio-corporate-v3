import { PrismicRichText } from '@prismicio/react';
import { RTNode } from '@prismicio/types';
import { Box } from './box';
import { twMerge } from 'tailwind-merge';
import React from 'react';

interface iRichText {
  className?: string;
  field: [] | [RTNode, ...RTNode[]] | null | undefined;
}
const Root: React.ForwardRefRenderFunction<HTMLDivElement, iRichText> = (
  { className, field, ...props },
  ref
) => {
  const classes = twMerge('font-normal text-base text-black', className);
  return (
    <Box ref={ref} className={classes} {...props}>
       <PrismicRichText field={field} />
    </Box>
  );
};

export const RichText = React.forwardRef(Root);
