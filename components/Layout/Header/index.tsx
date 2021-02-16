import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Components
import Navigation from './Navigation';
import UserNavigation from './UserNavigation';

// Styled Components
import * as S from './styles';

// Images
import LogoImage from '../../../assets/Header/LogoHeader.png';

const DesktopHeader: React.FC = () => {
  return (
    <S.Container>
      <div className="content">
        <Link href="/">
          <a>
            <Image
              src={LogoImage}
              alt="Logo Black Closet"
              width={276}
              height={148}
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
}

export default DesktopHeader;
