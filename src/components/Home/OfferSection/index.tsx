import React from 'react';

// Components
import SectionTitle from 'components/SectionTitle';
import Carousel from 'components/Carousel';

// Styled components
import * as S from './styles';

const OfferSection: React.FC = () => {
  return (
    <S.Container>
      <div className="content">
        <SectionTitle color="#fff" title="Ofertas" />
        <div className="carousel-container">
          <Carousel />
        </div>
        <div className="mobile-message">Arraste para visualizar mais</div>
      </div>
    </S.Container>
  );
};

export default OfferSection;
