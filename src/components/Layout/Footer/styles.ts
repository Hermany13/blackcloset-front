import styled from 'styled-components';
import media from 'styled-media-query';
import customMedia from '../../../styles/breakpoints';

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  height: 370px;
  display: flex;
  position: relative;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.quicksand};
  color: ${(props) => props.theme.colors.text.white};

  .content {
    width: ${(props) => props.theme.sizes.baseWidth};
    position: relative;
    padding: 20px;

    ${customMedia.lessThan('minimal')`
        padding-top: 20px;
    `}

    ${media.lessThan('medium')`
      width: ${(props) => props.theme.sizes.baseWidthMobile};
    `}

    .footer-title {
      font-size: 30px;
      margin-top: 40px;

      ${customMedia.lessThan('minimal')`
         margin-top: 20px;
      `}

      ${customMedia.lessThan('phone')`
         font-size: 10vw;
      `}
    }

    p {
      font-size: 10px;
      margin-top: 3px;
    }

    .link-title {
      margin-top: 10px;

      span {
        font-size: 19px;

        &:nth-child(1) {
          margin-top: 10px;
        }
      }

      div {
        margin-top: 10px;

        a:nth-child(2) {
          margin-left: 10px;
        }

        svg {
          cursor: pointer;

          &:hover {
            .a {
              transition: 0.2s;
              fill: ${(props) => props.theme.colors.text.whiteLight};
            }
          }
        }
      }
    }

    .footer-copyright {
      width: 100%;
      text-align: center;
      margin-top: 20px;

      p {
        font-size: 12px;

        ${customMedia.lessThan('phone')`
          font-size: 3vw;
        `}
      }

      span {
        font-size: 13px;

        ${customMedia.lessThan('phone')`
          font-size: 3vw;
        `}
      }
    }
  }
`;
