import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import style from './index.module.scss';

const Index = () => {
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} styleClass={{ marginBottom: '80px' }} />
      <BasicTitle title={data[2]} content={[data[3], data[4]]} />
      <div className={style.box_video}>
        <div>{data[5]}</div>
        <div>{data[6]}</div>
      </div>
      <div className={style.box_quick}>
        <div>{data[7]}</div>
        <div>{data[8]}</div>
      </div>
      <div className={style.box_edit}>
        <div>{data[9]}</div>
        <div>{data[10]}</div>
      </div>
      <div className={style.box_alert}>
        <div>{data[11]}</div>
        <div>{data[12]}</div>
      </div>
    </div>
  );
};

export default Index;
