import styled from 'styled-components';
import media from 'styled-media-query';
import customMedia from 'styles/breakpoints';

export const Container = styled.header`
  background-color: ${(props) => props.theme.colors.primary};
  height: 148px;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.colors.text.white};
  font-family: ${(props) => props.theme.fonts.quicksand};

  ${customMedia.lessThan('tablet')`
      height: 100px;
  `}

  ${media.lessThan('medium')`
      display: none;
  `}

  a {
    transition: 0.2s;

    &:hover {
      color: ${(props) => props.theme.colors.text.whiteLight};
    }
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: ${(props) => props.theme.sizes.baseWidth};

    ${media.lessThan('medium')`
      width: ${(props) => props.theme.sizes.baseWidthMobile};
    `}

    .navigation-side {
      display: flex;
      justify-content: space-around;
      width: 72%;

      ${media.lessThan('medium')`
        width: 100%;
        justify-content: flex-end;
        padding-right: 30px;

        .styles__Container-hw22j0-0 {
          width: 25px;

          .click-listener {
           width: 25px;

            svg {
              height: 25px;
              width: 25px;
              cursor: pointer;
            }
          }
        }
      `}
    }
  }
`;
