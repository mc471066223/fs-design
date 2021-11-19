import React from 'react';
import BtnLoad from './component/BtnLoad';
import AreaLoad from './component/AreaLoad';
import ListLoad from './component/ListLoad';
import AlertLoad from './component/AlertLoad';
function Index() {
  return (
    <div>
      <BtnLoad />
      <AreaLoad />
      <ListLoad />
      <AlertLoad/>
      <AlertLoad type={1}/>
    </div>
  );
}

export default Index;
