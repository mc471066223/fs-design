import React from 'react';
import Revolving from './component/Revolving';
import RevolvingAuto from './component/RevolvingAuto';
import RevolvingNoAuto from './component/RevolvingNoAuto';

function Index() {
  return (
    <div>
      <Revolving />
      <RevolvingAuto />
      <RevolvingNoAuto />
    </div>
  );
}

export default Index;
