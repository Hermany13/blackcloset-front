import React from 'react';
import Image from 'next/image';

// Styled components
import * as S from './styles';

// Images
import GhostImage from '../../assets/404/Ghost.png';

const PageNotFoundContent: React.FC = () => {
  return (
    <S.Container>
      <div className="content">
        <div className="image">
          <img
            src={GhostImage}
            alt="Página não encontrada"
          />
        </div>
        <span>
          Ops! A página não foi encontrada...
        </span>
      </div>
    </S.Container>
  );
}

export default PageNotFoundContent;
