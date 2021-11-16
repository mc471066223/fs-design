import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import right from '@/assets/images/DataShow/Card/right.png';
import left from '@/assets/images/DataShow/Card/left.png';
import style from './index.module.scss';

const Index = () => {
  return (
    <div>
      <BasicTitle title={data[18]} content={data[19]} titleClass={{ marginTop: '80px' }} />
      <div className={style.box}>
        <div className={style.box_top}>
          <div className={style.box_top_content}>
            <div className={style.box_top_content_text}>{data[20]}</div>
            <div>{data[21]}</div>
          </div>
          <img src={right} alt="" />
        </div>
        <div className={style.box_bottom}>
          <img src={left} alt="" />
          <div className={style.box_bottom_content}>
            <div className={style.box_bottom_content_text}>{data[20]}</div>
            <div>{data[21]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
