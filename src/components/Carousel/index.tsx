import React, { useRef, useCallback } from 'react';

// Components
import Card from 'components/Card';

// Styled components
import * as S from './styles';

// Icons
import RightIcon from '../../assets/home/right_icon.svg';
import LeftIcon from '../../assets/home/left_icon.svg';

const Carousel: React.FC = () => {
  const itemsRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: 'prev' | 'next') => {
    const ammountToScroll = direction === 'prev' ? -880 : 880;
    itemsRef.current?.scrollBy(ammountToScroll, 0);
  }, []);

  const data = {
    id: 1,
    slug: 'cals-jenas',
    img:
      'https://lh3.googleusercontent.com/-qvZOUOJYGBY/YC76nZrJ2rI/AAAAAAAAAc8/wj0tC7BM1jUoJJkE5MjL5MiZDIBjhIJyACK8BGAsYHg/s0/1612216763169.jpg',
    title: 'Calça jeans leans jenn',
    price: 110,
    isOffer: true,
    offerPrice: 73,
    parcels: 5,
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
    description:
      'Calsa jens da renomada lens marca favorita da mais famosas influencers do Brasil.',
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
          <Card
            id={data.id}
            categories={data.categories}
            description={data.description}
            img={data.img}
            isOffer={data.isOffer}
            offerPrice={data.offerPrice}
            parcels={data.parcels}
            price={data.price}
            slug={data.slug}
            title={data.title}
          />
        </div>
        <div className="card-container">
          <Card
            id={data.id}
            categories={data.categories}
            description={data.description}
            img={data.img}
            isOffer={data.isOffer}
            offerPrice={data.offerPrice}
            parcels={data.parcels}
            price={data.price}
            slug={data.slug}
            title={data.title}
          />
        </div>
        <div className="card-container">
          <Card
            id={data.id}
            categories={data.categories}
            description={data.description}
            img={data.img}
            isOffer={data.isOffer}
            offerPrice={data.offerPrice}
            parcels={data.parcels}
            price={data.price}
            slug={data.slug}
            title={data.title}
          />
        </div>
        <div className="card-container">
          <Card
            id={data.id}
            categories={data.categories}
            description={data.description}
            img={data.img}
            isOffer={data.isOffer}
            offerPrice={data.offerPrice}
            parcels={data.parcels}
            price={data.price}
            slug={data.slug}
            title={data.title}
          />
        </div>
        <div className="card-container">
          <Card
            id={data.id}
            categories={data.categories}
            description={data.description}
            img={data.img}
            isOffer={data.isOffer}
            offerPrice={data.offerPrice}
            parcels={data.parcels}
            price={data.price}
            slug={data.slug}
            title={data.title}
          />
        </div>
        <div className="card-container">
          <Card
            id={data.id}
            categories={data.categories}
            description={data.description}
            img={data.img}
            isOffer={data.isOffer}
            offerPrice={data.offerPrice}
            parcels={data.parcels}
            price={data.price}
            slug={data.slug}
            title={data.title}
          />
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
