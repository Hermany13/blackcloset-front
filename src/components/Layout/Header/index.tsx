import React from 'react';
import Link from 'next/link';

// Components
import Navigation from './Navigation';
import UserNavigation from './UserNavigation';
import Image from 'next/image';

// Styled Components
import * as S from './styles';

// Images
import logoimage from '../../../assets/Header/logo_header.png';

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
          <Navigation />
          <UserNavigation />
        </div>
      </div>
    </S.Container>
  );
};

export default DesktopHeader;
