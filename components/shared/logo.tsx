import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { Box, Img } from '../base';

function Logo({ className, width }: { className?: string; width?: string }) {
  const classes = twMerge('w-full cursor-pointer', className);
  const imgWidth = twMerge('w-20', width);
  return (
    <Link href="/">
      <Box className={classes}>
        <Img src="/logo-brand" alt="risidio" className={imgWidth} />
      </Box>
    </Link>
  );
}

export { Logo };
