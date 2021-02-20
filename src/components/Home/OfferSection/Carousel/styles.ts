import styled from 'styled-components';
import customMedia from 'styles/breakpoints';
import media from 'styled-media-query';

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  position: relative;
  margin-top: 50px;
  margin-bottom: 70px;

  button {
    background: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.text.whiteLight};
    width: 40px;
    height: 40px;
    border-radius: 25px;
    transition: 0.2s;
    margin-left: 20px;
    margin-right: 20px;

    ${media.lessThan('medium')`
      margin: 0 auto;
      margin-bottom: 10px;
      margin-top: 10px;
    `}

    &:hover {
      background-color: ${(props) => props.theme.colors.text.white};

      svg {
        .a {
          fill: ${(props) => props.theme.colors.text.whiteLight};
        }
      }
    }

    svg {
      width: 19px;
      height: 19px;
      color: #fff;
    }
  }
`;

export const Items = styled.div`
  display: flex;
  flex: 1;

  overflow-x: auto;
  scroll-behavior: smooth;

  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  .card-container {
    margin: 0 22px;

    > div {
      box-shadow: none;

      ${customMedia.lessThan('phone')`
        width: 200px;
      `}

      ${customMedia.lessThan('iphoneSe')`
        width: 180px;
      `}
    }

    .blur {
      .blur-content {
        .title {
          ${customMedia.lessThan('iphoneSe')`
            font-size: 4.6vw;
          `}
        }
      }
    }
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ButtonControls = styled.div`
  display: flex;
  justify-content: space-between;
`;
