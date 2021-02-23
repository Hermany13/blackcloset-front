import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Styled components
import * as S from './styles';

// Icons
import CartIcon from '../../assets/card/cart-icon.svg';

// Interfaces
interface ICategorie {
  id: number;
  label: string;
}

interface ICardProps {
  id: number;
  slug: string;
  img: string;
  title: string;
  price: number;
  isOffer: boolean;
  offerPrice: number;
  parcels: number;
  categories: ICategorie[];
  description: string;
}

const Card: React.FC<ICardProps> = ({
  id,
  slug,
  img,
  title,
  categories,
  description,
  isOffer,
  offerPrice,
  parcels,
  price,
}) => {
  // Refactors
  const { offerPriceFormated, priceFormated, parcellsPrice } = useMemo(
    () => ({
      offerPriceFormated: offerPrice.toLocaleString('pt-br', {
        minimumFractionDigits: 2,
      }),
      priceFormated: price.toLocaleString('pt-br', {
        minimumFractionDigits: 2,
      }),
      parcellsPrice: isOffer
        ? (offerPrice / parcels).toLocaleString('pt-br', {
            minimumFractionDigits: 2,
          })
        : (price / parcels).toLocaleString('pt-br', {
            minimumFractionDigits: 2,
          }),
    }),
    [isOffer, offerPrice],
  );

  return (
    <S.Container>
      <Image src={img} alt="Roupa" layout="fill" objectFit="cover" />
      <div className="blur">
        <div className="blur-content">
          <div className="title">{title}</div>
          {isOffer ? (
            <label>R${offerPriceFormated}</label>
          ) : (
            <label>R${priceFormated}</label>
          )}
          {isOffer ? <span className="is-offer">R${priceFormated}</span> : ''}
          <div className="parcels">
            {parcels}x {parcellsPrice} sem juros
          </div>
          <div className="cat-container">
            {categories.map((cat) => {
              return (
                <div className="cat" key={cat.id}>
                  {cat.label}
                </div>
              );
            })}
          </div>
          <div className="text-align-container">
            <div className="description-container">{description}</div>
          </div>
          <div className="button-cart">
            <Link href={`/produto/${slug}/${id}`}>
              <a>
                <CartIcon />
                Mais detalhes
              </a>
            </Link>
          </div>
        </div>
      </div>
    </S.Container>
  );
};

export default Card;
