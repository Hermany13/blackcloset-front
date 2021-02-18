import React from 'react';

// Styled components
import * as S from './styles';

// SVGs
import FacebookIcon from '../../../assets/footer/facebook-Icon.svg';
import InstagramIcon from '../../../assets/footer/instagram-Icon.svg';
import WhatsappIcon from '../../../assets/footer/whatsapp-Icon.svg';
import GmailIcon from '../../../assets/footer/gmail-Icon.svg';

const Footer: React.FC = () => {
  return (
    <S.Container>
      <div className="content">
        <div className="footer-title">
          Black Closet Store
        </div>
        <p>
          CNPJ - 50.940.970/0001-45
        </p>
        <p>
          Rua Prof. Maria Aparecida Godoy Valente 825 - Cruzeiro SP
        </p>
        <div>
          <div className="link-title">
            <span>Siga-nos:</span>
            <div>
              <a
                href="https://www.facebook.com/blackclost"
                target="_blank"
                title="Página da Black Closet no facebook"
                rel="noopener"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/black_closet.store/"
                target="_blank"
                title="Página da Black Closet no instagram"
                rel="noopener"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
          <div className="link-title">
            <span>Entre em contato:</span>
            <div>
              <a
                href="https://wa.me/5512992336256"
                target="_blank"
                title="Entre em contato conosco pelo whatsapp"
                rel="noopener"
              >
                <WhatsappIcon />
              </a>
              <a
                href="mailto:blackcloset1999@gmail.com"
                target="_blank"
                title="Página da Black Closet no instagram"
                rel="noopener"
              >
                <GmailIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p>Política de privacidade</p>
          <span>Copyright 2021 Black Closet Store | Powred by Have Digital</span>
        </div>
      </div>
    </S.Container>
  );
};

export default Footer;
