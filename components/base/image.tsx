/* eslint-disable @next/next/no-img-element */

interface ImgProps {
  src: string;
  width?: number;
  height?: number;
  alt: string;
  className?: string;
}

function Img({ src, width, height, alt, className, ...props }: ImgProps) {
  const params = src?.includes('?');
  let source: string;

  if (params) {
    source = `${src}&w=${width}&h=${height}`;
  } else {
    source = `${src}?w=${width}&h=${height}`;
  }

  return <img src={`${source}`} className={className} alt={alt} {...props} />;
}

export { Img };
