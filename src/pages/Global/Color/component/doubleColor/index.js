import React, { useState } from 'react';
import BasicTitle from '@/components/BasicTitle';
import dataJson from '../../data';
import red from '@/assets/images/Global/Color/red.png';
import blue from '@/assets/images/Global/Color/blue.png';
import gray from '@/assets/images/Global/Color/gray.png';
import san from "@/assets/images/Global/Color/san.png"
import IconList from '../../../Component/IconList';

import style from './index.module.scss';

const list = [
  {
    img: red,
    color: ['#19191A', '#C00000'],
    text: dataJson[48],
    width: '52px',
    height: '52px'
  },
  {
    img: blue,
    color: ['#19191A', '#0060BF'],
    text: dataJson[49],
    width: '55px',
    height: '55px'
  },
  {
    img: gray,
    color: ['#19191A', '#89898C'],
    text: [dataJson[50], dataJson[51]],
    width: '60px',
    height: '60px'
  }
];

const newList = [  {
  img: san,
  color: ['#19191A', '#C00000','#E8E9EB'],
  text: dataJson[53],
  width: '60px',
  height: '60px'
}]
const DoubleColor = () => {
  const [data, setData] = useState(dataJson);
  return (
    <div className={style.doubleColor}>
      <BasicTitle subTitle={data[47]} />
      <IconList list={list} />
      <BasicTitle subTitle={data[52]} subTitleClass={{ marginTop: '40px' }} />
      <IconList list={newList} />
    </div>
  );
};
export default DoubleColor;
