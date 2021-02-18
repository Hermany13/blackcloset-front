import styled from 'styled-components';

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
  }
`
