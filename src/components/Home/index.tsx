import React from 'react';

// Components
import Banner from './Banner';
import NewsSection from './NewsSection';
import OfferSection from './OfferSection';
import AboutSection from './AboutSection';

// Styled components
import * as S from './styles';

// Interfaces
import Product from 'models/Product';

interface Props {
  latestProducts: Product[];
}

const HomeLayout: React.FC<Props> = ({ latestProducts }) => {
  return (
    <S.Container>
      <Banner />
      <NewsSection latestProducts={latestProducts} />
      <OfferSection />
      <AboutSection />
    </S.Container>
  );
};

export default HomeLayout;
