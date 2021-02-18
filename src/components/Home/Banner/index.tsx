import React from 'react';

// Components
import Image from '../../../components/Image';

// Styled components
import * as S from './styles';

// Images
import BlackBanner from '../../../assets/home/banner.jpg';

const Banner: React.FC = () => {
  return (
    <S.Container>
          <div className="content-hover">
            <div className="content">
              <Image src={BlackBanner} alt="Banner black closet"/>
            </div>
          </div>
          <div className="blur">

          </div>
    </S.Container>
  );
}

export default Banner;
