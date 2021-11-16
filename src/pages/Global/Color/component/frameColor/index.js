import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import BoxList from '@/pages/Global/Component/BoxList';
import style from './index.module.scss';
const FrameColor = () => {
  const textList = [data[55], data[56], data[57], data[58], data[59], data[60]];
  const bgList = ['#19191A', '#4B4B4D', '#89898C', '#CCCCCC', '#E5E5E5', '#F2F2F2'];

  return (
    <div className={style.frameColor}>
      <BasicTitle title={data[54]} />
      <BoxList textList={textList} bgList={bgList} />
    </div>
  );
};
export default FrameColor;
