import React from 'react';

// Styled components
import * as S from './styles';

// Interfaces
interface ISectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  color?: string;
}

const SectionTitle: React.FC<ISectionTitleProps> = ({
  title,
  color,
  ...rest
}) => {
  return (
    <S.Container {...rest} color={color}>
      <span>★</span>
      <div>{title}</div>
      <span>★</span>
    </S.Container>
  );
};

export default SectionTitle;
