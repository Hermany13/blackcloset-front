import React from 'react';

// Components
import Banner from './Banner';

// Styled components
import * as S from './styles';

const HomeLayout: React.FC = () => {
  return (
    <S.Container>
      <Banner />
    </S.Container>
  );
}

export default HomeLayout;
