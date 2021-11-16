import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import SvgIcon from '@/components/svgIcon';
import style from './index.module.scss';

const Index = () => {
  return (
    <div>
      <BasicTitle title={data[24]} content={data[25]} titleClass={{ marginTop: '80px' }} />
      <div className={style.box}>
        <div className={style.weChat}>
          <SvgIcon iconName="datashow_weChat" />
          <div className={style.weChat_title}>{data[26]}</div>
          <div className={style.weChat_text}>{data[27]}</div>
          <div className={style.weChat_more}>
            <div>Learn more</div>
            <i className="iconfont iconfs_2020091147icon"></i>
          </div>
        </div>
        <div className={style.hand}>
          <SvgIcon iconName="datashow_hand"/>
          <div className={style.hand_title}>{data[28]}</div>
          <div className={style.hand_text}>{data[29]}</div>
        </div>
        <div className={style.weChat_right}>
          <SvgIcon iconName="datashow_weChat" />
          <div className={style.weChat_right_title}>{data[26]}</div>
          <div className={style.weChat_right_text}>{data[27]}</div>
          <div className={style.weChat_right_more}>
            <div>Learn more</div>
            <i className="iconfont iconfs_2020091147icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
