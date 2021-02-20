import styled from 'styled-components';
interface ISideMenuProps {
  click?: boolean;
}

export const Container = styled.div`
  width: 25px;
  display: flex;
  justify-content: flex-end;

  .click-listener {
    width: 25px;

    svg {
      height: 25px;
      width: 25px;
      cursor: pointer;
    }
  }
`;

export const SideMenu = styled.div<ISideMenuProps>`
  width: 80%;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  background-color: transparent;
  z-index: 1;

  -webkit-transition: max-width 0.5s;
  -moz-transition: max-width 0.5s;
  -ms-transition: max-width 0.5s;
  -o-transition: max-width 0.5s;
  transition: max-width 0.5s;
  overflow: hidden;
  max-width: ${(props) => (props.click ? '100%' : '0px')};

  .side-menu-content {
    .button-container {
      width: 100%;
      justify-content: flex-end;
      display: flex;
      padding-right: 30px;
      height: 100px;
      align-items: center;

      .click-listener {
        svg {
          height: 25px;
          width: 25px;
          cursor: pointer;
        }
      }
    }

    .side-menu-body {
      height: 100vh;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.8);

      .nav-container {
        nav {
          width: 100%;

          ul {
            display: table;
            justify-content: center;

            li {
              padding: 20px;
              font-size: 6vw;
              width: 100%;
              font-weight: 600;
              transition: 0.2s;

              &:hover {
                background-color: ${(props) => props.theme.colors.primary};
              }
            }
          }
        }
      }
    }
  }
`;
