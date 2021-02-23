import React from 'react';

// Components
import SectionTitle from 'components/SectionTitle';
import Card from 'components/Card';

// Styled components
import * as S from './styles';

const NewsSection: React.FC = () => {
  const data = {
    id: 1,
    slug: 'cals-jenas',
    img:
      'https://lh3.googleusercontent.com/-qvZOUOJYGBY/YC76nZrJ2rI/AAAAAAAAAc8/wj0tC7BM1jUoJJkE5MjL5MiZDIBjhIJyACK8BGAsYHg/s0/1612216763169.jpg',
    title: 'Calça jeans leans jenn',
    price: 120,
    isOffer: false,
    offerPrice: 0,
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
      <div className="content">
        <SectionTitle color="#000" title="Novidades" />
        <div className="cards-container">
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
      </div>
    </S.Container>
  );
};

export default NewsSection;
