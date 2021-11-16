import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import PaginationCom from './component/index';
import style from './index.module.scss';
const Index = () => {
  return (
    <div className={style.pagintaion}>
      <BasicTitle title={data[7]} content={data[8]} />
      <BasicTitle subTitle={data[9]} content={[data[10], data[11], data[12]]} />
      <BasicTitle content={data[13]} />
      <PaginationCom />
      <BasicTitle content={data[14]} />
      <PaginationCom type={1} />
      <BasicTitle content={data[15]} />
      <PaginationCom type={2} />
    </div>
  );
};

export default Index;
