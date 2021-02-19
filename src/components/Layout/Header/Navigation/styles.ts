import styled from 'styled-components';
import customMedia from '../../../../styles/breakpoints';

export const Container = styled.nav`
  width: 480px;

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;

    li {
      list-style: none;
      font-size: 20px;
      font-weight: 300;

      ${customMedia.lessThan('desktop')`
          font-size: 2vw;
      `}
    }
  }

  ${customMedia.lessThan('desktop')`
     width: 70%;
  `}
`;
