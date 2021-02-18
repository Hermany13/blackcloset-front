import React from 'react';

// Components
import SectionTitle from '../../SectionTitle/index';

// Styled components
import * as S from './styles';

const NewsSection: React.FC = () => {
  return (
    <S.Container>
      <SectionTitle color="#000" title="Novidades" />
    </S.Container>
  );
};

export default NewsSection;
