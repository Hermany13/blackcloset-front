import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Styled components
import * as S from './styles';

// Icons
import CartIcon from '../../assets/card/cart-icon.svg';

const Card: React.FC = () => {
  return (
    <S.Container>
      <Image
        src="https://lh3.googleusercontent.com/-qvZOUOJYGBY/YC76nZrJ2rI/AAAAAAAAAc8/wj0tC7BM1jUoJJkE5MjL5MiZDIBjhIJyACK8BGAsYHg/s0/1612216763169.jpg"
        alt="Roupa"
        layout="fill"
        objectFit="cover"
      />
      <div className="blur">
        <div className="blur-content">
          <div className="title">Calça jeans leans jenn</div>
          <label>R$110,00</label>
          <div className="parcels">5x 22,00 sem juros</div>
          <div className="cat-container">
            <div className="cat">Calsas</div>
            <div className="cat">Jeans</div>
            <div className="cat">Feminino</div>
          </div>
          <div className="text-align-container">
            <div className="description-container">
              Calsa jens da renomada lens marca favorita da mais famosas
              influencers do Brasil.
            </div>
          </div>
          <div className="button-cart">
            <Link href="#">
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
