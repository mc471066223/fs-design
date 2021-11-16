import React from 'react';
import ColoringPro from './component/ColoringPro';
import Neutral from './component/Neutral';
import Auxiliary from './component/Auxiliary';
import MainColor from './component/MainColor';
import TextColor from './component/TextColor';
import BtnColor from './component/BtnColor';
import IconColor from './component/IconColor';
import DoubleColor from './component/DoubleColor';
import FrameColor from './component/FrameColor';
import Divider from './component/Divider';

import style from './index.module.scss';
function Color() {
  return (
    <div className={style.page_content}>
      {/* 用色比例 */}
      <ColoringPro />

      {/* 中性色 */}
      <Neutral />

      {/* 辅助色 */}
      <Auxiliary />

      {/* 主色 */}
      <MainColor />

      {/* 文字颜色 */}
      <TextColor />

      {/* 按钮颜色 */}
      <BtnColor />

      {/* 图标颜色 */}
      <IconColor />

      {/* 双色icon  三色*/}
      <DoubleColor />

      {/* 线框颜色 */}
      <FrameColor />

      {/* 分割线颜色 */}
      <Divider />
    </div>
  );
}
export default Color;
