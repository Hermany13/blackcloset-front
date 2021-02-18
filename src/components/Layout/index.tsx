import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import * as S from './styles';

// Dynamic components
const DesktopHeader = dynamic(() => import('../../components/Layout/Header'));
const Footer = dynamic(() => import('../../components/Layout/Footer'));

const Layout: React.FC = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    ) {
      setIsMobile(true);
    }
  }, []);

  return (
    <>
      <DesktopHeader />

      <S.Content>{children}</S.Content>

      <Footer />
    </>
  );
};

export default Layout;
