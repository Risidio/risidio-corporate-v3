import React from 'react';
import { twMerge } from 'tailwind-merge';

interface TextAreaProps extends React.ComponentProps<'textarea'> {
  className?: string;
}

const Root: React.ForwardRefRenderFunction<
  HTMLTextAreaElement,
  TextAreaProps
> = ({ className, ...props }, ref) => {
  const classes = twMerge(
    'block w-full placeholder-gray-60 appearance-none rounded-md border border-gray-30 px-3 py-2 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-brand-500 sm:text-sm',
    className
  );
  return <textarea rows={4} ref={ref} className={classes} {...props} />;
};

export const TextArea = React.forwardRef(Root);
