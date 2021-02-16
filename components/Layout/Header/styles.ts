import styled from 'styled-components';
import media from 'styled-media-query';


export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  height: 148px;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.colors.text.white};
  font-family: ${(props) => props.theme.fonts.quicksand};

  a {
    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.text.whiteLight};
    }

    img {
      height: 100%;
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    width: ${(props) => props.theme.sizes.baseWidth};

    ${media.lessThan('medium')`
      width: ${(props) => props.theme.sizes.baseWidthMobile};
    `}

    .navigation-side {
      margin: 63px 0;
      display: flex;
      justify-content: space-around;
      width: 72%;
    }
  }
`;
