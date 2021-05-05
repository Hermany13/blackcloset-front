import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Styled components
import * as S from './styles';

// Icons
import CartIcon from '../../assets/card/cart-icon.svg';

// Interfaces
import Product from 'models/Product';
import Category from 'models/Category';

const Card: React.FC<Product> = (product: Product) => {
  // Refactors
  const { offerPriceFormatted, priceFormatted, parcelsPrice } = useMemo(
    () => ({
      offerPriceFormatted: product.offerPrice.toLocaleString('pt-br', {
        minimumFractionDigits: 2,
      }),
      priceFormatted: product.price.toLocaleString('pt-br', {
        minimumFractionDigits: 2,
      }),
      parcelsPrice:
        product.isOffer === 1
          ? (product.offerPrice / product.parcels).toLocaleString('pt-br', {
              minimumFractionDigits: 2,
            })
          : (product.price / product.parcels).toLocaleString('pt-br', {
              minimumFractionDigits: 2,
            }),
    }),
    [product.isOffer, product.offerPrice],
  );

  console.log(product.categories);

  return (
    <S.Container>
      <Image src={product.image} alt="Roupa" layout="fill" objectFit="cover" />
      <div className="blur">
        <div className="blur-content">
          <div className="title">{product.name}</div>
          {product.isOffer === 1 ? (
            <label>R${offerPriceFormatted}</label>
          ) : (
            <label>R${priceFormatted}</label>
          )}
          {product.isOffer === 1 ? (
            <span className="is-offer">R${priceFormatted}</span>
          ) : (
            ''
          )}
          <div className="parcels">
            {product.parcels}x {parcelsPrice} sem juros
          </div>
          <div className="cat-container">
            {product.categories.map((cat: Category) => {
              return (
                <div className="cat" key={cat.id}>
                  {cat.name}
                </div>
              );
            })}
          </div>
          <div className="text-align-container">
            <div className="description-container">{product.description}</div>
          </div>
          <div className="button-cart">
            <Link href={`/produto/${product.slug}/${product.id}`}>
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
