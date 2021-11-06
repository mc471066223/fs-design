import React, { useState } from 'react';
import BasicTitle from '../../../Component/BasicTitle';
import dataJson from '../../data';
import BoxList from '@/pages/Global/Component/BoxList';
import style from "./index.module.scss";
const ColoringProp = () => {
  const [data, setData] = useState(dataJson);
  const textList = [[data[42],data[43]], data[44], data[45],data[46]];
  const bgList = ['#19191A', '#646466', '#89898C', '#4B4B4D'];

  return (
    <div className={style.IconColor}>
      <BasicTitle title={data[40]} subTitle={data[41]}/>
      <BoxList textList={textList} bgList={bgList}/>
    </div>
  );
};
export default ColoringProp;
