import styled from 'styled-components';
import customMedia from '../../../styles/breakpoints';

export const Container = styled.div`
  width: 100%;
  text-align: center;
  position: relative;

  .content-hover {
    width: 100%;
    display: flex;
    justify-content: center;

    .content {
      width: ${(props) => props.theme.sizes.baseWidth};
    }
  }

  .blur {
    position: absolute;
    width: 100%;
    top: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;

    .title-container {
      ${customMedia.lessThan('desktop')`
        width: 700px;
      `}

      ${customMedia.lessThan('laptop')`
        width: 500px;
      `}

      ${customMedia.lessThan('tablet')`
        width: 400px;
      `}

      ${customMedia.lessThan('phone')`
        width: 300px;
      `}
    }
  }
`;
