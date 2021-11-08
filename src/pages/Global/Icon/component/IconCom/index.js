import React, { useState } from 'react';
import BasicTitle from '@/components/BasicTitle';
import { dataJson } from '../../data';
import SvgIcon from '@/components/svgIcon';
import style from './index.module.scss';

const Index = () => {
  const [data, setData] = useState(dataJson);
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} styleClass={{ marginBottom: '80px' }} />
      <BasicTitle title={data[2]} content={data[3]} />
      <BasicTitle subTitle={data[4]} content={data[5]} />
      <div className={style.icon_regular_box}>1024*1024px</div>
      <BasicTitle subTitle={data[6]} content={data[7]} />
      <div className={style.icon_delete}>
        <div className={style.icon_delete_left}>
          <SvgIcon iconName="icon_delete" />
          <div className={style.icon_delete_left_box}>
            <div>80px</div>
            <div className={style.icon_delete_left_round}></div>
            <div className={style.icon_delete_left_circle}></div>
          </div>
        </div>
        <div className={style.icon_delete_right}>
          <SvgIcon iconName="icon_delete" />
          <div className={style.icon_delete_right_box}>
            <div className={style.icon_delete_right_line}>80px</div>
            <div className={style.icon_delete_right_circle}></div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Index;
