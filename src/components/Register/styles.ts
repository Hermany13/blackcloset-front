import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;

  .blur {
    width: 100%;
    height: 100vh;
    filter: blur(8px);
    -webkit-filter: blur(8px);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background: url('https://i.ibb.co/b3f4bPt/banner.jpg');
  }

  .body-container {
    background-color: rgba(0, 0, 0, 0.5);
    width: ${(props) => props.theme.sizes.baseWidth};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;

    .content {
      width: ${(props) => props.theme.sizes.baseWidth};
      display: flex;
      justify-content: center;
      align-items: center;

      .form-container {
        width: 90%;
        height: 767px;
        background-color: #fff;
        border-radius: 25px;
      }
    }
  }
`;
