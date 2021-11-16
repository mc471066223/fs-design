import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import community from '@/assets/images/DataShow/Card/community.png';
import SvgIcon from '@/components/svgIcon';
import style from './index.module.scss';

const Index = () => {
  return (
    <div>
      <BasicTitle title={data[15]} content={data[16]} titleClass={{ marginTop: '80px' }} />
      <div className={style.community_box}>
        <div className={style.community_box_img}>
          <div>Ideas</div>
          <img src={community} alt="" />
          <SvgIcon iconName="card_video"/>
        </div>
        <div className={style.community_box_container}>
          <div className={style.community_box_container_text}>{data[17]}</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
