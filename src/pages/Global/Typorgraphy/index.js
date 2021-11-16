import React from 'react';
import FontGauge from './component/FontGauge';
import Standard from './component/Standard';

function Typorgraphy() {
  return (
    <div>
      {/* 字体总规 */}
      <FontGauge />
      {/* 使用规范 */}
      <Standard />
    </div>
  );
}
export default Typorgraphy;
