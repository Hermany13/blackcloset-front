import React, { useEffect, useState } from 'react';

// Ultils js
import { setSideMenu } from '../../../../utils/js/animations';

// Components
import Navigation from '../Navigation';
import UserNavigation from '../UserNavigation';

// Styled components
import * as S from './styles';

// Icons
import MenuIcon from '../../../../assets/header/menu-icon.svg';

const MobileMenu: React.FC = () => {
  const [click, setClick] = useState(false);

  useEffect(() => {
    setSideMenu(click);
  }, [click]);

  return (
    <>
      <S.Container className="icon-container">
        <div className="click-listener" onClick={() => setClick(true)}>
          <MenuIcon />
        </div>
      </S.Container>
      <S.SideMenu click={click}>
        <div className="side-menu-content">
          <div className="button-container" onClick={() => setClick(false)}>
            <div className="click-listener" onClick={() => setClick(false)}>
              <MenuIcon />
            </div>
          </div>
          <div className="side-menu-body">
            <div className="clickaway" onClick={() => setClick(false)} />
            <div className="nav-container">
              <Navigation />
              <UserNavigation />
            </div>
          </div>
        </div>
      </S.SideMenu>
    </>
  );
};

export default MobileMenu;
