import React from 'react';
import ColoringPro from './component/coloringPro';
import Neutral from './component/neutral';
import Auxiliary from './component/auxiliary';
import MainColor from './component/mainColor';
import TextColor from './component/textColor';
import BtnColor from './component/btnColor';
import IconColor from './component/iconColor';
import DoubleColor from './component/doubleColor';
import FrameColor from './component/frameColor';
import Divider from './component/divider';

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
