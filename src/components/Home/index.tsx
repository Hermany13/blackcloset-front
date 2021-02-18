import React from 'react';

// Components
import Banner from './Banner';
import NewsSection from './NewsSection';

// Styled components
import * as S from './styles';

const HomeLayout: React.FC = () => {
  return (
    <S.Container>
      <Banner />
      <NewsSection />
    </S.Container>
  );
};

export default HomeLayout;
