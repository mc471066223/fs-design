import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import SvgIcon from '@/components/svgIcon';
import { data } from '../../data';
import style from './index.module.scss';
const Index = () => {
  return (
    <div className={style.box}>
      <BasicTitle title={data[9]} content={data[10]} />
      <div className={style.box_content}>
        {[0, 1, 2, 3, 4, 5].map(index => {
          return <div key={index} className={style.box_content_item}></div>;
        })}
        <div className={style.box_content_svg}>
          <SvgIcon iconName="load_load"/>
        </div>
      </div>
    </div>
  );
};

export default Index;
