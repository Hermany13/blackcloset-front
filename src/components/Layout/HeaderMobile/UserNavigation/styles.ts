import styled from 'styled-components';

export const Container = styled.div`
  width: 96px;

  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;

    li {
      list-style: none;

      &:hover {
        svg {
          .a {
            fill: ${(props) => props.theme.colors.text.whiteLight};
          }
        }
      }

      svg {
        max-height: 17px;

        .a {
          transition: 0.2s;
        }
      }
    }
  }
`;
