import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0;

  .content {
    width: ${(props) => props.theme.sizes.baseWidth};

    .cards-container {
      padding: 40px 0;
      display: grid;
      gap: 80px;
      justify-content: center;
      grid-template-columns: auto auto auto;
    }
  }
`;
