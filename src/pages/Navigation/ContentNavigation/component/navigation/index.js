import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import { data } from '../../data';
import style from './index.module.scss';
import SvgIcon from '@/components/svgIcon';
const Index = () => {
  return (
    <div>
      <BasicTitle pageTitle={data[0]} content={data[1]} styleClass={{ marginBottom: '80px' }} />
      <BasicTitle title={data[2]} content={data[3]} />
      <div className={style.navigation}>
        <div className={style.navigation_text}>{data[4]}</div>
        <div className={style.navigation_line}>/</div>
        <div className={style.navigation_text}>{data[5]}</div>
        <div className={style.navigation_line}>/</div>
        <div className={style.navigation_text}>{data[6]}</div>
      </div>
      <div className={style.navigation_1}>
        <div className={style.navigation_text}>{data[4]}</div>
        <div className={style.navigation_line}>/</div>
        <div className={style.navigation_text}>{data[5]}</div>
        <div className={style.navigation_line}>/</div>
        <div className={style.navigation_text}>{data[6]}</div>
        <SvgIcon iconName="navigation_content_mouse" />
      </div>
    </div>
  );
};

export default Index;
