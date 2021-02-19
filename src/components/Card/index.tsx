import React from 'react';
import Image from 'next/image';

// Styled components
import * as S from './styles';

const Card: React.FC = () => {
  return (
    <S.Container>
      <Image
        src="https://lh3.googleusercontent.com/--d6fY3RBlrY/YC76mW_V9AI/AAAAAAAAAc4/1WGE-klyaTsBiSfj2PxF2v3i8VTUAAV0gCLcBGAsYHQ/s0/1612216763169.jpg"
        alt="Roupa"
        layout="fill"
        objectFit="cover"
      />
      <div className="blur">
        <div className="blur-content">
          <div className="title">Calça jeans leans jenn</div>
          <label>R$110,00</label>
        </div>
      </div>
    </S.Container>
  );
};

export default Card;
