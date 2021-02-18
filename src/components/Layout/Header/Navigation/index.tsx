import React from 'react';
import Link from 'next/link'

// Styled Components
import * as S from './styles';


const Navigation: React.FC = () => {
  return (
    <S.Container>
      <ul>
        <li>
          <Link href="/">
            <a>Produtos</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Categorias</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Sobre</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Entre em contato</a>
          </Link>
        </li>
      </ul>
    </S.Container>
  )
}

export default Navigation;
