import styled from 'styled-components';
import customMedia from '../../styles/breakpoints';
interface IProps {
  color?: string;
}

export const Container = styled.div<IProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${(props) => props.theme.fonts.quicksand};
  font-size: 49px;
  font-weight: 300;
  text-transform: uppercase;
  color: ${(props) => props.color};

  ${customMedia.lessThan('phone')`
      font-size: 9vw;
  `}

  span {
    font-size: 20px;
    margin: 0 16px;
  }
`;
