import React from 'react';

// Components
import Image from 'next/image';

// Styled components
import * as S from './styles';

// Images
import BlackBanner from 'assets/home/banner.jpg';
import BannerTitle from 'assets/home/title.png';

const Banner: React.FC = () => {
  return (
    <S.Container>
      <div className="content-hover">
        <div className="content">
          <Image
            src={BlackBanner}
            alt="Banner black closet"
            layout="intrinsic"
            height={506}
            width={1060}
          />
        </div>
      </div>
      <div className="blur">
        <div className="title-container">
          <Image
            src={BannerTitle}
            alt="Banner black closet"
            layout="intrinsic"
            height={120}
            width={650}
          />
        </div>
      </div>
    </S.Container>
  );
};

export default Banner;
