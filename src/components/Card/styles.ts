import styled from 'styled-components';

export const Container = styled.div`
  width: 249px;
  height: 331px;
  background-color: gray;
  position: relative;
  box-shadow: 2px 3px 6px gray;

  &:hover {
    .blur {
      max-height: 100%;
    }
  }

  .blur {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    position: absolute;
    bottom: 0;
    color: #ffffff;
    font-size: 16px;
    font-family: ${(props) => props.theme.fonts.quicksand};
    height: 100%;

    -webkit-transition: max-height 0.5s;
    -moz-transition: max-height 0.5s;
    -ms-transition: max-height 0.5s;
    -o-transition: max-height 0.5s;
    transition: max-height 0.5s;
    overflow: hidden;
    max-height: 80px;

    .blur-content {
      padding: 10px 10px 15px 15px;

      .title {
        margin-bottom: 5px;
      }

      label {
        font-size: 23px;
      }
    }
  }
`;
