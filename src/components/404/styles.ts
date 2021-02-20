import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  .content {
    margin: 0 auto;
    width: ${(props) => props.theme.sizes.baseWidth};
    font-family: ${(props) => props.theme.fonts.quicksand};
    display: grid;
    justify-content: center;
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};

    ${media.lessThan('medium')`
      width: ${(props) => props.theme.sizes.baseWidthMobile};
    `}

    span {
      margin-top: 20px;
    }

    .image {
      margin-top: 30px;
    }
  }
`;
