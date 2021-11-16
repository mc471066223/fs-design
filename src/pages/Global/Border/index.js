import React from 'react';
import BorderSize from './component/BorderSize';
import Applicable from './component/Applicable';
import LabelList from './component/LabelList';

function Border() {
  return (
    <div>
      {/* 边框尺寸 */}
      <BorderSize />
      {/* 适用场景 */}
      <Applicable />
      {/* 标签 */}
      <LabelList />
    </div>
  );
}

export default Border;
