import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Helpers
import { isMobile } from 'utils/helpers/DeviceHelper';

// Components
import Navigation from './Navigation';
import UserNavigation from './UserNavigation';
import MobileMenu from './MobileMenu';

// Styled Components
import * as S from './styles';

// Images
import logoimage from 'assets/header/logoheader.png';

const DesktopHeader: React.FC = () => {
  return (
    <S.Container>
      <div className="content">
        <Link href="/">
          <a>
            <Image
              src={logoimage}
              alt="Logo Black Closet"
              height={144}
              width={270}
              className="logo"
            />
          </a>
        </Link>
        <div className="navigation-side">
          {isMobile() ? (
            <MobileMenu />
          ) : (
            <>
              <Navigation />
              <UserNavigation />
            </>
          )}
        </div>
      </div>
    </S.Container>
  );
};

export default DesktopHeader;
