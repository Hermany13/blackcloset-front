import React from 'react';
import dynamic from 'next/dynamic';

// Ultils
import { isMobile } from 'utils/helpers/DeviceHelper';

import * as S from './styles';

// Dynamic components
const DesktopHeader = dynamic(() => import('components/Layout/Header'));
const MobileHeader = dynamic(() => import('components/Layout/HeaderMobile'));
const Footer = dynamic(() => import('components/Layout/Footer'));

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <MobileHeader />
      <DesktopHeader />
      <S.Content>{children}</S.Content>
      <Footer />
    </>
  );
};

export default Layout;
