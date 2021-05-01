import React from 'react';

// Components
import SectionTitle from 'components/SectionTitle';
import Card from 'components/Card';

// Styled components
import * as S from './styles';
import Product from 'models/Product';

const NewsSection: React.FC = () => {
  const data: Product = {
    id: 1,
    slug: 'cals-jenas',
    image:
      'https://lh3.googleusercontent.com/-qvZOUOJYGBY/YC76nZrJ2rI/AAAAAAAAAc8/wj0tC7BM1jUoJJkE5MjL5MiZDIBjhIJyACK8BGAsYHg/s0/1612216763169.jpg',
    name: 'Calça jeans leans jenn',
    price: 120,
    isOffer: 0,
    offerPrice: 0,
    parcels: 5,
    description:
      'Calsa jens da renomada lens marca favorita da mais famosas influencers do Brasil.',
    status: 1,
    created_at: '',
    updated_at: '',
    categories: [
      {
        id: 1,
        label: 'Calsas',
      },
      {
        id: 3,
        label: 'Jeans',
      },
      {
        id: 5,
        label: 'Feminino',
      },
    ],
  };

  return (
    <S.Container>
      <div className="content">
        <SectionTitle color="#000" title="Novidades" />
        <div className="cards-container">
          <Card {...data} />
          <Card {...data} />
          <Card {...data} />
          <Card {...data} />
          <Card {...data} />
          <Card {...data} />
        </div>
      </div>
    </S.Container>
  );
};

export default NewsSection;
