import React from 'react';
import BasicTitle from '@/components/BasicTitle';
import SvgIcon from '@/components/svgIcon';
import { data } from '../../data';
import style from './index.module.scss';
const Index = () => {
  return (
    <div className={style.box}>
      <BasicTitle title={data[7]} content={data[8]} />
      <div className={style.box_content}>
        <div className={style.box_content_header}></div>
        <div className={style.box_content_container}>
          <div className={style.box_content_container_slider}></div>
          <div className={style.box_content_container_content}>
            <div className={style.box_content_container_item}></div>
            <div className={style.box_content_container_item}></div>
            <div className={style.box_content_container_item}></div>
            <div className={style.box_content_container_svg}>
              <SvgIcon iconName="load_area"/>
            </div>
          </div>
        </div>
        <div className={style.box_content_footer}></div>
      </div>
    </div>
  );
};

export default Index;
