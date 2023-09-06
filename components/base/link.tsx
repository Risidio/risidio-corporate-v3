import {
  EmptyLinkField,
  FilledContentRelationshipField,
  FilledLinkToMediaField,
  FilledLinkToWebField,
} from '@prismicio/types';
import { Box } from './box';
import { twMerge } from 'tailwind-merge';
import React from 'react';
import { PrismicLink } from '@prismicio/react';

interface iLink {
  className?: string;
  children: React.ReactNode;
  field:
    | EmptyLinkField<'Any'>
    | FilledLinkToWebField
    | FilledContentRelationshipField<string, string, unknown>
    | FilledLinkToMediaField
    | null
    | undefined;
}
export const PrismicHREF = ({
  className,
  field,
  children,
  ...props
}: iLink) => {
  const classes = twMerge('font-normal text-base text-black', className);
  return (
    <Box className={classes} {...props}>
      <PrismicLink field={field}>{children}</PrismicLink>
    </Box>
  );
};
