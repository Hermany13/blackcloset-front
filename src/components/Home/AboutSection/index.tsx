import React from 'react';
import Image from 'next/image';

// Components
import SectionTitle from 'components/SectionTitle';

// Styled components
import * as S from './styles';

const AboutSection: React.FC = () => {
  return (
    <S.Container>
      <div className="content">
        <SectionTitle color="#000" title="Sobre nós" />
        <div className="about-container">
          <div className="image-container">
            <Image
              src="https://i.ibb.co/6RMzj7V/Black-closet-new-logo.jpg"
              layout="responsive"
              width={200}
              height={195}
              alt="Logo da blackcloset"
            />
          </div>
          <div className="text-container">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when na unknown printer took a galley of
              type and it to make a type specimen. It has survived not only five
              centuries, but also the leap into electronic, Remaining
              essentially unchanged.
            </p>{' '}
            <br />
            <p>
              {' '}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when na unknown printer took a galley of
              type and it to make a type specimen. It has survived not only five
              centuries, but also the leap into electronic, Remaining
              essentially unchanged.
            </p>
          </div>
        </div>
      </div>
    </S.Container>
  );
};

export default AboutSection;
