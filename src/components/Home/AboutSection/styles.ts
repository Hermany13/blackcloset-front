import styled from 'styled-components';
import customMedia from 'styles/breakpoints';

export const Container = styled.section`
  display: flex;
  justify-content: center;

  .content {
    width: ${(props) => props.theme.sizes.baseWidth};
    padding: 40px 0 80px 0;

    ${customMedia.lessThan('desktop')`
      width: 90%;
    `}

    .about-container {
      display: flex;
      justify-content: center;
      padding-top: 40px;

      ${customMedia.lessThan('desktop')`
        align-items: center;
      `}

      ${customMedia.lessThan('minLaptop')`
         display: grid;
      `}

      .image-container {
        width: 470px;

        ${customMedia.lessThan('minLaptop')`
           width: 70%;
           margin: 0 auto;
        `}

        ${customMedia.lessThan('phone')`
           width: 100%;
        `}
      }

      .text-container {
        font-family: ${(props) => props.theme.fonts.quicksand};
        font-size: 19px;
        height: 443px;
        width: 473px;
        padding: 20px 30px;
        font-weight: 300;

        ${customMedia.lessThan('desktop')`
          font-size: 2vw;
        `}

        ${customMedia.lessThan('minLaptop')`
           font-size: 3vw;
           width: 75%;
           margin: 0 auto;
        `}

        ${customMedia.lessThan('phone')`
           font-size: 4.3vw;
           width: 100%;
           margin: 0 auto;
        `}
      }
    }
  }
`;
