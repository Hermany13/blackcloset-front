import React from 'react';

// Components
import SectionTitle from 'components/SectionTitle';
import Card from 'components/Card';

// Styled components
import * as S from './styles';

// Interfaces
import Product from 'models/Product';

interface Props {
  latestProducts: Product[];
}

const NewsSection: React.FC<Props> = ({ latestProducts }) => {
  return (
    <S.Container>
      <div className="content">
        <SectionTitle color="#000" title="Novidades" />
        <div className="cards-container">
          {latestProducts.map((product: Product) => {
            return <Card {...product} />;
          })}
        </div>
      </div>
    </S.Container>
  );
};

export default NewsSection;
