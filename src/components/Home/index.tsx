import React from 'react';

// Components
import Banner from './Banner';
import NewsSection from './NewsSection';
import OfferSection from './OfferSection';
import AboutSection from './AboutSection';

// Styled components
import * as S from './styles';

const HomeLayout: React.FC = () => {
  return (
    <S.Container>
      <Banner />
      <NewsSection />
      <OfferSection />
      <AboutSection />
    </S.Container>
  );
};

export default HomeLayout;
