import React from 'react';
import Image from 'next/image';

// Styled components
import * as S from './styles';

// Images
import GhostImage from 'assets/404/Ghost.png';

const PageNotFoundContent: React.FC = () => {
  return (
    <S.Container>
      <div className="content">
        <div className="image">
          <Image
            src={GhostImage}
            alt="Página não encontrada"
            layout="responsive"
            width={1060}
            height={700}
          />
        </div>
        <span>Ops! A página não foi encontrada...</span>
      </div>
    </S.Container>
  );
};

export default PageNotFoundContent;
