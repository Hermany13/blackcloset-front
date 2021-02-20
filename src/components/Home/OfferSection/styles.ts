import styled from 'styled-components';
import customMedia from 'styles/breakpoints';

export const Container = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  padding: 40px 0;

  /* TODO REMOVE MAARGIN */
  margin-bottom: 40px;

  .content {
    width: ${(props) => props.theme.sizes.baseWidth};

    ${customMedia.lessThan('fullsize')`
        width: 750px;
    `}

    ${customMedia.lessThan('laptop')`
        width: 370px;
    `}

    ${customMedia.lessThan('phone')`
        width: 90%;
    `}
  }
`;
