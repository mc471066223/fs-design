import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import red from '@/assets/images/Global/Color/red.png';
import blue from '@/assets/images/Global/Color/blue.png';
import gray from '@/assets/images/Global/Color/gray.png';
import san from '@/assets/images/Global/Color/san.png';
import IconList from '../../../Component/IconList';

import style from './index.module.scss';

const list = [
  {
    img: red,
    color: ['#19191A', '#C00000'],
    text: data[48],
    width: '52px',
    height: '52px'
  },
  {
    img: blue,
    color: ['#19191A', '#0060BF'],
    text: data[49],
    width: '55px',
    height: '55px'
  },
  {
    img: gray,
    color: ['#19191A', '#89898C'],
    text: [data[50], data[51]],
    width: '60px',
    height: '60px'
  }
];

const newList = [
  {
    img: san,
    color: ['#19191A', '#C00000', '#E8E9EB'],
    text: data[53],
    width: '60px',
    height: '60px'
  }
];
const DoubleColor = () => {
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
