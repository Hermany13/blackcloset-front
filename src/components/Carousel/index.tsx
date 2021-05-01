import React, { useRef, useCallback } from 'react';

// Components
import Card from 'components/Card';

// Styled components
import * as S from './styles';

// Icons
import RightIcon from '../../assets/home/right_icon.svg';
import LeftIcon from '../../assets/home/left_icon.svg';
import Product from 'models/Product';

const Carousel: React.FC = () => {
  const itemsRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: 'prev' | 'next') => {
    const ammountToScroll = direction === 'prev' ? -880 : 880;
    itemsRef.current?.scrollBy(ammountToScroll, 0);
  }, []);

  const data: Product = {
    id: 1,
    slug: 'cals-jenas',
    image:
      'https://lh3.googleusercontent.com/-qvZOUOJYGBY/YC76nZrJ2rI/AAAAAAAAAc8/wj0tC7BM1jUoJJkE5MjL5MiZDIBjhIJyACK8BGAsYHg/s0/1612216763169.jpg',
    name: 'Calça jeans leans jenn',
    price: 120,
    isOffer: 1,
    offerPrice: 73,
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
      <button
        type="button"
        onClick={() => scroll('prev')}
        style={{ paddingRight: '2px' }}
        aria-label="Slides anteriores"
      >
        <RightIcon />
      </button>

      <S.Items ref={itemsRef}>
        <div className="card-container">
          <Card {...data} />
        </div>
        <div className="card-container">
          <Card {...data} />
        </div>
        <div className="card-container">
          <Card {...data} />
        </div>
        <div className="card-container">
          <Card {...data} />
        </div>
        <div className="card-container">
          <Card {...data} />
        </div>
        <div className="card-container">
          <Card {...data} />
        </div>
      </S.Items>

      <button
        type="button"
        onClick={() => scroll('next')}
        style={{ paddingLeft: '2px' }}
        aria-label="Próximos slides"
      >
        <LeftIcon />
      </button>
    </S.Container>
  );
};

export default Carousel;
