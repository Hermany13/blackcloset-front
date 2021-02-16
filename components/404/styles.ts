import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .content {
    margin: 0 auto;
    width: ${(props) => props.theme.sizes.baseWidth};
    font-family: ${(props) => props.theme.fonts.quicksand};
    display: grid;
    justify-content: center;
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};

    span {
      margin-top: 20px;
    }

    .image {
      margin-top: 30px;
      img {
        width: 800px;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
