import React from 'react';

// Components
import SectionTitle from '../../SectionTitle/index';
import Card from '../../Card';

// Styled components
import * as S from './styles';

const NewsSection: React.FC = () => {
  return (
    <S.Container>
      <div className="content">
        <SectionTitle color="#000" title="Novidades" />
        <div className="cards-container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </S.Container>
  );
};

export default NewsSection;
