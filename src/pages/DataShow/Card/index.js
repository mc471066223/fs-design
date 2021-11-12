import React from 'react';
import { cardList } from './data';
import BoxCard from './component/BoxCard';
import BubbleCard from './component/BubbleCard';
import style from './index.module.scss';

function Index() {
  return (
    <div>
      <div className={style.BoxCard}>
        <BoxCard list={cardList} />
      </div>
      <BubbleCard />
    </div>
  );
}

export default Index;
