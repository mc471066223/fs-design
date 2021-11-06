import React from 'react';
import BorderSize from './component/borderSize';
import Applicable from './component/applicable';

function Border() {
  return (
    <div>
      {/* 边框尺寸 */}
      <BorderSize />
      {/* 适用场景 */}
      <Applicable />
    </div>
  );
}

export default Border;
