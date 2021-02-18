import React from 'react';
import Img from 'react-cool-img';

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

/**
 * This component is responsable for loading images from the internet
 */
const Image: React.FC<Props> = ({ src, alt, style, className, ...rest }) => {
  return (
    <>
      <Img
        style={{
          width: '100%',
          ...style,
        }}
        className={className}
        src={src}
        alt={alt}
      />
      <noscript>
        <img src={src} alt={alt} {...rest} />
      </noscript>
    </>
  );
};

export default Image;
