import React from 'react';

// Styled components
import * as S from './styles';

// Images
import GhostImage from '../../assets/404/Ghost.png';
import Image from '../Image';

const PageNotFoundContent: React.FC = () => {
  return (
    <S.Container>
      <div className="content">
        <div className="image">
          <Image
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
