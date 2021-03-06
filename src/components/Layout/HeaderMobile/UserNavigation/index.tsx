import React from 'react';
import Link from 'next/link';

// Styled Components
import * as S from './styles';

// Images
import PersonIcon from '../../../../assets/header/person_icon.svg';
import CartIcon from '../../../../assets/header/cart_icon.svg';
import LupeIcon from '../../../../assets/header/lupe_icon.svg';

const UserNavigation: React.FC = () => {
  return (
    <S.Container className="user-navigation">
      <ul>
        <li>
          <Link href="/">
            <a>
              <LupeIcon />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>
              <CartIcon />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/registrar">
            <a>
              <PersonIcon />
            </a>
          </Link>
        </li>
      </ul>
    </S.Container>
  );
};

export default UserNavigation;
