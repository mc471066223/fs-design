import React from 'react';
import BorderSize from './component/borderSize';
import Applicable from './component/applicable';
import LabelList from './component/labelList';

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
