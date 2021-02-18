import styled from 'styled-components';
import media from 'styled-media-query';

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
      ${media.lessThan('925px')`
        width: 700px;
      `}

      ${media.lessThan('820px')`
        width: 500px;
      `}

      ${media.lessThan('600px')`
        width: 400px;
      `}

      ${media.lessThan('440px')`
        width: 300px;
      `}
    }
  }
`;
