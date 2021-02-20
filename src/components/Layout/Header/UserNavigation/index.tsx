import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Styled Components
import * as S from './styles';

// Images
import LupeIcon from 'assets/header/lupe_icon.png';
import CartIcon from 'assets/header/cart_icon.png';
import PersonIcon from 'assets/header/person_icon.png';

const UserNavigation: React.FC = () => {
  return (
    <S.Container>
      <ul>
        <li>
          <Link href="/">
            <a>
              <Image
                src={LupeIcon}
                alt="Logo Black Closet"
                width={18}
                height={18}
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <Image
                src={CartIcon}
                alt="Logo Black Closet"
                width={18}
                height={18}
              />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <Image
                src={PersonIcon}
                alt="Logo Black Closet"
                width={18}
                height={18}
              />
            </a>
          </Link>
        </li>
      </ul>
    </S.Container>
  );
};

export default UserNavigation;
