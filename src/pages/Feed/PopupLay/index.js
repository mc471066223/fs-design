import React from 'react';
import Popup from './component/PopupSize';
import Operation from './component/OperationNoBtn';
import OperationBtn from './component/OperationBtn';
import OperationPopup from "./component/OperationPopup";
function Index() {
  return (
    <div>
      <Popup />
      <Operation />
      <OperationBtn />
      <OperationPopup/>
    </div>
  );
}

export default Index;
