import React from 'react';
import BoxCard from './component/BoxCard';
import BubbleCard from './component/BubbleCard';
import LabelCard from './component/labelCard';
import CommunityCard from './component/CommunityCard';
import DirectionCard from './component/DirectionCard';
import Combining from './component/Combining';
import IconCard from './component/IconCard';

function Index() {
  return (
    <div>
      <BoxCard />
      <BubbleCard />
      <LabelCard />
      <CommunityCard />
      <DirectionCard />
      <Combining />
      <IconCard />
    </div>
  );
}

export default Index;
