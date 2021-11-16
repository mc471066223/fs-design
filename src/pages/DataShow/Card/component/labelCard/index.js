import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import lable from '@/assets/images/DataShow/Card/lable.png';
import style from './index.module.scss';

const Index = () => {
  return (
    <div>
      <BasicTitle title={data[12]} content={data[13]} />
      <div className={style.box}>
        <div className={style.label_box}>
          <img src={lable} alt="" />
          <div className={style.label_box_container}>
            <div className={style.label_box_container_text}>{data[14]}</div>
            <div className={style.label_box_container_label}>
              <div>Enterprise Network</div>
              <div>IT Services</div>
            </div>
            <div className={style.label_box_container_more}>
              <div>Learn more</div>
              <i className="iconfont iconfs_2020091147icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
