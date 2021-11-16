import React from 'react';
import { data } from '../../data';
import BasicTitle from '@/components/BasicTitle';
import SvgIcon from '@/components/svgIcon';
import style from './index.module.scss';

const Index = () => {
  return (
    <div>
      <BasicTitle title={data[17]} content={[data[18], data[19]]} />
      <div className={style.icon_box}>
        <div className={style.icon_box_video}>
          <div className={style.icon_box_title}>{data[20]}</div>
          <div className={style.icon_box_video_top}>
            <SvgIcon iconName="btn_video_white" svgClassName={'btn_video'} />
          </div>
          <div className={style.icon_box_video_bottom}>
            <SvgIcon iconName="btn_video_black" svgClassName={'btn_video'} />
          </div>
        </div>
        <div className={style.icon_box_shadow}>
          <div className={style.icon_box_title}>{data[21]}</div>
          <div className={style.icon_box_shadow_content}>
            <SvgIcon iconName="btn_shadow" />
          </div>
        </div>
        <div className={style.icon_box_share}>
          <div className={style.icon_box_title}>{data[22]}</div>
          <div className={style.icon_box_share_content}>
            <SvgIcon iconName="btn_share" />
          </div>
        </div>
        <div className={style.icon_box_main}>
          <div className={style.icon_box_title}>{data[23]}</div>
          <div className={style.icon_box_main_content}>
            <SvgIcon iconName="btn_icon_main" />
          </div>
        </div>
        <div className={style.icon_box_main}>
          <div className={style.icon_box_title}>{data[24]}</div>
          <div className={style.icon_box_main_content}>
            <SvgIcon iconName="btn_icon_secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
