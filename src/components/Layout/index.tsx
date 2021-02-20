import React from 'react';
import dynamic from 'next/dynamic';

import * as S from './styles';

// Dynamic components
const DesktopHeader = dynamic(() => import('components/Layout/Header'));
const Footer = dynamic(() => import('components/Layout/Footer'));

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <DesktopHeader />

      <S.Content>{children}</S.Content>

      <Footer />
    </>
  );
};

export default Layout;
