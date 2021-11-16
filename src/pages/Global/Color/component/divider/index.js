import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import style from './index.module.scss';
const Index = () => {
  return (
    <div className={style.divider}>
      <BasicTitle title={data[61]} />
      <div className={style.divider_box}>E5E5E5</div>
      <BasicTitle title={data[62]} />
      <div className={style.divider_box1}>F7F7F7</div>
    </div>
  );
};

export default Index;
