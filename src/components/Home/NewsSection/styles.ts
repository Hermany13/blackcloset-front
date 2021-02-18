import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  .container {
    width: ${(props) => props.theme.sizes.baseWidth};
  }
`;
