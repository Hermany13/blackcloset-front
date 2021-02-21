import styled from 'styled-components';
import customMedia from 'styles/breakpoints';

export const Container = styled.section`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  padding: 40px 0;

  .content {
    width: ${(props) => props.theme.sizes.baseWidth};

    ${customMedia.lessThan('fullsize')`
        width: 740px;
    `}

    ${customMedia.lessThan('laptop')`
        width: 320px;
    `}

    ${customMedia.lessThan('phone')`
        width: 320px;
    `}

    ${customMedia.lessThan('iphoneSe')`
        width: 231px;
    `}

    .mobile-message {
      display: none;
      width: 100%;
      text-align: center;
      color: ${(props) => props.theme.colors.text.white};
      font-family: ${(props) => props.theme.fonts.quicksand};

      ${customMedia.lessThan('fullsize')`
        display: block;
      `}
    }
  }
`;
