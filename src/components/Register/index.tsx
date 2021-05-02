import React from 'react';

// Styled component
import * as S from './styles';

const RegisterLayout: React.FC = () => {
  return (
    <S.Container>
      <div className="blur" />
      <div className="body-container">
        <div className="content">
          <div className="form-container"></div>
        </div>
      </div>
    </S.Container>
  );
};

export default RegisterLayout;
