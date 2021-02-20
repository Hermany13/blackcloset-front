import React, { useRef, useCallback } from 'react';

// Components
import Card from 'components/Card';

// Styled components
import * as S from './styles';

// Icons
import RightIcon from '../../../../assets/home/right_icon.svg';
import LeftIcon from '../../../../assets/home/left_icon.svg';

const Carousel: React.FC = () => {
  const itemsRef = useRef<HTMLDivElement>(null);

  const scroll = useCallback((direction: 'prev' | 'next') => {
    const ammountToScroll = direction === 'prev' ? -880 : 880;
    itemsRef.current?.scrollBy(ammountToScroll, 0);
  }, []);

  return (
    <S.Container>
      <button
        type="button"
        onClick={() => scroll('prev')}
        style={{ paddingRight: '2px' }}
      >
        <RightIcon />
      </button>

      <S.Items ref={itemsRef}>
        <div className="card-container">
          <Card />
        </div>
        <div className="card-container">
          <Card />
        </div>
        <div className="card-container">
          <Card />
        </div>
        <div className="card-container">
          <Card />
        </div>
        <div className="card-container">
          <Card />
        </div>
        <div className="card-container">
          <Card />
        </div>
      </S.Items>

      <button type="button" onClick={() => scroll('next')}>
        <LeftIcon />
      </button>
    </S.Container>
  );
};

export default Carousel;
