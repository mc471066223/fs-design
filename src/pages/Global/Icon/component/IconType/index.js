import React, { useState } from 'react';
import BasicTitle from '@/components/BasicTitle';
import { dataJson } from '../../data';
import SvgIcon from '@/components/svgIcon';
import style from './index.module.scss';

const Index = () => {
  const [data, setData] = useState(dataJson);
  return (
    <div className={style.IconType}>
      <BasicTitle title={data[22]} subTitle={data[23]} content={data[24]} />
      <div className={style.IconType_box}>
        <i className="iconfont  iconfs_2020091124icon" />
        <i className="iconfont  iconfs_2020102602icon" />
        <i className="iconfont  iconfs_2020091125icon" />
        <i className="iconfont  iconfs_2020091119icon" />
        <i className="iconfont  iconfs_2021041901icon" />
      </div>
      <BasicTitle content={data[25]} />
      <div className={style.IconType_surface}>
        <SvgIcon iconName="icon_transceivers"/>
        <SvgIcon iconName="icon_enclosures"/>
        <SvgIcon iconName="icon_wdm"/>
      </div>
      <BasicTitle content={data[26]} />
      <div className={style.IconType_chat}>
        <i className="iconfont  iconfs_2021081706icon" />
        <i className="iconfont  iconfs_2021081705icon" />
        <i className="iconfont  iconfs_2021081704icon" />
        <i className="iconfont  iconfs_2021081701icon" />
        <i className="iconfont  iconfs_2021081703icon" />
        <i className="iconfont  iconfs_2021081702icon" />
      </div>
    </div>
  );
};

export default Index;
